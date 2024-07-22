import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import eventTypes from "../constants/EventTypes";
import { componentEventHandlers } from "../utils/eventHandlers";
import ComponentButton from "./ComponentButton";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 bg-gray-200 text-center">
        <p className="font-bold">Sidebar: Drag components from here</p>
      </div>
      <div className="flex-none h-full p-4 bg-gray-100">
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
                    event={event}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
