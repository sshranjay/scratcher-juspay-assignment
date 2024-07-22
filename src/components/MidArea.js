import React, { useRef, useEffect } from "react";
import { Droppable } from "@hello-pangea/dnd";
import { connect } from "react-redux";
import { componentEventHandlers } from "../utils/eventHandlers";
import ComponentButton from "./ComponentButton";
import RunButton from "./RunButton";

const MidArea = ({ tasks }) => {
  const buttonsRef = useRef([]);

  useEffect(() => {
    buttonsRef.current = buttonsRef.current.slice(0, tasks.length);
  }, [tasks]);

  const executeTasks = async () => {
    for (let i = 0; i < tasks.length; i++) {
      if (buttonsRef.current[i]) {
        buttonsRef.current[i].triggerClick();
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      }
    }
  };

  return (
    <div className="h-full">
      <div className="p-4 bg-gray-200 text-center">
        <p className="font-bold">Mid Area: Drop and arrange tasks here</p>
      </div>
      <Droppable droppableId="midArea" type="TASKS">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="flex-none h-full p-4 bg-gray-100">
            <div className="mb-12">
              {tasks.map((task, index) => (
                <ComponentButton
                  key={task.id}
                  label={task.type}
                  index={task.id}
                  draggableId={`midArea-${task.id}`}
                  onClick={componentEventHandlers[task.type]}
                  event={task}
                  ref={el => buttonsRef.current[index] = el}
                />
              ))}
              {provided.placeholder}
            </div>
            <RunButton
              className="bottom-4 right-4"
              disabled={tasks.length === 0}
              onClick={executeTasks}
            />
          </div>
        )}
      </Droppable>
    </div>

  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasksList.tasks,
});

export default connect(mapStateToProps)(MidArea);
