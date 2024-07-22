class Event {
    constructor(id, type, value = null, hasTime = false, time = null, hasXY = false, x = null, y = null) {
      this.id = id;
      this.type = type;
      this.value = value;
      this.hasTime = hasTime;
      this.time = time;
      this.hasXY = hasXY;
      this.x = x;
      this.y = y;
    }
  }
  
  export default Event;
  