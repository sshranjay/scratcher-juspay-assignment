import store from "../store";
import { move, rotateBy, showMessage, hideMessage, changeSize, setVisible } from '../redux/catReducer';

// Move horizontally
const handleMoveX = ({ x }) => {
  store.dispatch(move({ x: parseFloat(x), y: 0 }));
};

// Move vertically
const handleMoveY = ({ y }) => {
  store.dispatch(move({ x: 0, y: parseFloat(y) }));
};

// Move diagonally
const handleMoveDiagonal = ({ x, y }) => {
  store.dispatch(move({ x: parseFloat(x), y: parseFloat(y) }));
};

// Turn clockwise
const handleTurnClockwise = ({ rotate }) => {
  store.dispatch(rotateBy(parseFloat(rotate)));
};

// Turn anti-clockwise
const handleTurnAntiClockwise = ({ rotate }) => {
  store.dispatch(rotateBy(-parseFloat(rotate)));
};

// Say message
const handleSayMessage = ({ message }) => {
  store.dispatch(showMessage(message));
};

// Hide message
const handleHideMessage = () => {
  store.dispatch(hideMessage());
};

// Update model size
const handleChangeSize = ({ size }) => {
  store.dispatch(changeSize(parseFloat(size)));
};

// Show model
const handleShow = () => {
  store.dispatch(setVisible(true));
};

// Hide model
const handleHide = () => {
  store.dispatch(setVisible(false));
};

export const componentEventHandlers = {
  // Motion Events
  "Move Horizontally": handleMoveX,
  "Move Vertically": handleMoveY,
  "Turn Clockwise": handleTurnClockwise,
  "Turn Anti Clockwise": handleTurnAntiClockwise,
  "Move Diagonally": handleMoveDiagonal,

  // Looks Events
  "Say Message": handleSayMessage,
  "Hide Message": handleHideMessage,
  "Update Model Size": handleChangeSize,
  "Show Model": handleShow,
  "Hide Model": handleHide,
};
