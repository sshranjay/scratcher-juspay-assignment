import Event from "../models/Event";

const eventTypes = {
  motion: [
    new Event(1, "Move Horizontally", false, null, true, 10, false, null, false, null, false, null, false, null),
    new Event(2, "Move Vertically", false, null, false, null, true, 10, false, null, false, null, false, null),
    new Event(3, "Turn Clockwise", false, null, false, null, false, null, false, null, false, null, true, 45),
    new Event(4, "Turn Anti Clockwise", false, null, false, null, false, null, false, null, false, null, true, 45),
    new Event(5, "Move Diagonally", false, null, true, 10, true, 10, false, null, false, null, false, null)
  ],
  looks: [
    new Event(6, "Say Message", false, null, false, null, false, null, true, "", false, null, false, null),
    new Event(7, "Hide Message", false, null, false, null, false, null, false, null, false, null, false, null),
    new Event(8, "Update Model Size", false, null, false, null, false, null, false, null, true, 200, false, null),
    new Event(9, "Show Model", false, null, false, null, false, null, false, null, false, null, false, null),
    new Event(10, "Hide Model", false, null, false, null, false, null, false, null, false, null, false, null)
  ]
};

export default eventTypes;