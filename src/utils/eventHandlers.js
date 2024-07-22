import store from "../store";
import { move, rotate, showMessage, hideMessage, changeSize, setVisible } from '../redux/catReducer';

const handleMove = () => {
  store.dispatch(move({ x: 10, y: 0 }));
};

const handleMoveY = () => {
  store.dispatch(move({ x: 0, y: 10 }));
};

const handleTurnClockwise = () => {
  store.dispatch(rotate(45));
};

const handleTurnAntiClockwise = () => {
  store.dispatch(rotate(-45));
};

const handleSayMessage = () => {
  store.dispatch(showMessage("Hello!"));
};

const handleHideMessage = () => {
  store.dispatch(hideMessage());
};

const handleChangeSize = () => {
  store.dispatch(changeSize(120));
};

const handleShow = () => {
  store.dispatch(setVisible(true));
};

const handleHide = () => {
  store.dispatch(setVisible(false));
};

export const componentEventHandlers = {
    // Motion Events
    "Move Horizontally": handleMove,        // Maps to Move Horizontally
    "Move Vertically": handleMoveY,         // Maps to Move Vertically
    "Turn Clockwise": handleTurnClockwise,  // Maps to Turn Clockwise
    "Turn Anti Clockwise": handleTurnAntiClockwise, // Maps to Turn Anti Clockwise
    "Move Diagonally": handleMove,          // If needed for diagonal move
  
    // Looks Events
    "Say Message": handleSayMessage,        // Maps to Say Message
    "Think": handleSayMessage,              // Assuming Think uses similar handler
    "Hide Message": handleHideMessage,      // Maps to Hide Message
    "Update Model Size": handleChangeSize,  // Maps to Update Model Size
    "Show Model": handleShow,               // Maps to Show Model
    "Hide Model": handleHide                // Maps to Hide Model
  };
