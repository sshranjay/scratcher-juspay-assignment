import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import { connect } from "react-redux";
import { componentEventHandlers } from "../utils/eventHandlers";
import ComponentButton from "./ComponentButton";

const MidArea = ({ tasks }) => {
  return (
    <Droppable droppableId="midArea" type="TASKS">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="flex-1 h-full overflow-auto p-4 bg-gray-100">
          {tasks.map((task) => (
            <ComponentButton
                  key={task.id}
                  label={task.type}
                  index={task.id}
                  draggableId={`midArea-${task.id}`}
                  onClick={componentEventHandlers[task.type]}
                />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasksList.tasks,
});

export default connect(mapStateToProps)(MidArea);
