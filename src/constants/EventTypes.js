import Event from "../models/Event";

export const eventTypes = {
  motion: [
    new Event(1, "Move Horizontally", 10),
    new Event(2, "Move Vertically", 10),
    new Event(3, "Turn Clockwise", 90),
    new Event(4, "Turn Anti Clockwise", 90),
    new Event(5, "Move Diagonally", null, false, null, true, 0, 0)
  ],
  looks: [
    new Event(6, "Say Message", "Hello"),
    new Event(8, "Think", "Hmm"),
    new Event(10, "Hide Message"),
    new Event(11, "Update Model Size", 100),
    new Event(12, "Show Model"),
    new Event(13, "Hide Model")
  ]
};
