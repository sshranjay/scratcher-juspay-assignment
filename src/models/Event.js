class Event {
  constructor(
    id, 
    type, 
    hasTime = false, 
    time = null, 
    hasX = false, 
    x = null, 
    hasY = false, 
    y = null, 
    hasMessage = false, 
    message = null, 
    hasSize = false, 
    size = null,
    hasRotate = false,
    rotate = null
  ) {
    this.id = id;
    this.type = type;
    this.hasTime = hasTime;
    this.time = time;
    this.hasX = hasX;
    this.x = x;
    this.hasY = hasY;
    this.y = y;
    this.hasMessage = hasMessage;
    this.message = message;
    this.hasSize = hasSize;
    this.size = size;
    this.hasRotate = hasRotate;
    this.rotate = rotate;
  }
}

export default Event;
