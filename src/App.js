import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "@hello-pangea/dnd";
import { connect } from "react-redux";
import { setTasks } from './redux/taskReducer';
import eventTypes  from "./constants/EventTypes";

const App = ({ tasks, setTasks }) => {

  const onDragEnd = (result) => {
    if (!result.destination) {
      console.log("Invalid destination");
      return;
    };

    const { source, destination, draggableId } = result;
    const draggableIdType = draggableId.split("-")[1];
    let task;

    let newTasks = [...tasks];

    if (source.droppableId.startsWith('sideArea') && destination.droppableId === 'midArea') {

      Object.keys(eventTypes).forEach(category => {
        // eslint-disable-next-line
        const foundTask = eventTypes[category].find(event => event.type == draggableIdType);
        if (foundTask) {
          task = { ...foundTask, id: new Date().getTime() };
        }
      });
      // when we add a new task
      newTasks.push(task);
      // eslint-disable-next-line
    } else if (source.droppableId === 'midArea' && destination.droppableId.startsWith('sideArea')) {
      // when we remove a task
      // eslint-disable-next-line
      newTasks = newTasks.filter(t => t.id != draggableIdType);
      // eslint-disable-next-line
    }else if (source.droppableId === 'midArea' && destination.droppableId === 'midArea') {
      // When reordering within 'midArea'
      
       // Find the index of the item being moved
       // eslint-disable-next-line
      const sourceIndex = newTasks.findIndex((x) => x.id == source.index);
      // eslint-disable-next-line
      const destinationIndex = newTasks.findIndex((x) => x.id == destination.index);;

      // Remove the item from its original position
      const [movedTask] = newTasks.splice(sourceIndex, 1);
      // Insert the item at its new position
      newTasks.splice(destinationIndex, 0, movedTask);
    }

    console.log(newTasks);
    setTasks(newTasks);
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans h-screen overflow-hidden">
      <div className="h-full flex flex-row">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-none h-full bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
          </div>
          <div className="flex-1 h-full bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <MidArea />
          </div>
        </DragDropContext>
        <div className="flex-1 h-full bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasksList.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  setTasks: (tasks) => dispatch(setTasks(tasks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
