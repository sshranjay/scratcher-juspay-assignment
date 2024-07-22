import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { FaPlay } from "react-icons/fa";

const ComponentButton = forwardRef(({ label, index, draggableId, onClick, event }, ref) => {
  const [x, setX] = useState(event.x || '10');
  const [y, setY] = useState(event.y || '10');
  const [rotate, setRotate] = useState(event.rotate || '45');
  const [message, setMessage] = useState(event.message || 'Hello');
  const [size, setSize] = useState(event.size || '200');

  const handleClick = () => {
    const params = {};
    if (event.hasX) params.x = x;
    if (event.hasY) params.y = y;
    if (event.hasRotate) params.rotate = rotate;
    if (event.hasMessage) params.message = message;
    if (event.hasSize) params.size = size;
    onClick(params);
  };

  // Expose handleClick via ref
  useImperativeHandle(ref, () => ({
    triggerClick: handleClick,
  }));

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mb-2 p-2 bg-blue-500 text-white rounded flex items-center"
        >
          <span className="mr-2 text-xs">{label}</span>
          {event.hasX && (
            <input
              type="number"
              placeholder="X"
              value={x}
              onChange={(e) => setX(e.target.value)}
              className="p-1 mr-1 border rounded text-black text-xs w-12"
            />
          )}
          {event.hasY && (
            <input
              type="number"
              placeholder="Y"
              value={y}
              onChange={(e) => setY(e.target.value)}
              className="p-1 mr-1 border rounded text-black text-xs w-12"
            />
          )}
          {event.hasRotate && (
            <input
              type="number"
              placeholder="Rotate"
              value={rotate}
              onChange={(e) => setRotate(e.target.value)}
              className="p-1 mr-1 border rounded text-black text-xs w-12"
            />
          )}
          {event.hasMessage && (
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-1 mr-1 border rounded text-black text-xs w-20"
            />
          )}
          {event.hasSize && (
            <input
              type="number"
              placeholder="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="p-1 mr-1 border rounded text-black text-xs w-12"
            />
          )}
          <button onClick={handleClick} className="p-1 bg-green-500 text-white rounded">
            <FaPlay />
          </button>
        </div>
      )}
    </Draggable>
  );
});

export default ComponentButton;
