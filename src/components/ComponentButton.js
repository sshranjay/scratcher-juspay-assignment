import React from 'react';
import { Draggable } from '@hello-pangea/dnd';

const ComponentButton = ({ label, onClick, index, draggableId }) => {

  const handleClick = (e) => {
    // Prevent the click event from propagating to the drag handle
    e.stopPropagation();
    onClick();
  };

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-2 m-1 bg-blue-500 text-white rounded"
          onClick={handleClick}
        >
          {label}
        </div>
      )}
    </Draggable>
  );
};

export default ComponentButton;
