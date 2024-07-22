import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import eventTypes from "../constants/EventTypes";
import { componentEventHandlers } from "../utils/eventHandlers";
import ComponentButton from "./ComponentButton";
import RunButton from "./RunButton";

const Sidebar = () => {
  return (
    <div className="p-4 h-full max-h-screen overflow-y-auto">
      {Object.keys(eventTypes).map((category) => (
        <Droppable droppableId={`sideArea-${category}`} type="TASKS" key={category}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="mb-4">
              <h3 className="text-lg font-bold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              {eventTypes[category].map((event) => (
                <ComponentButton
                  key={event.id}
                  label={event.type}
                  index={event.id}
                  draggableId={`sideArea-${event.type}`}
                  onClick={componentEventHandlers[event.type]}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
      <RunButton />
    </div>
  );
};

export default Sidebar;
