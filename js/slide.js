export default class Slide {
  constructor(wrap, slide) {
    this.slide = document.querySelector(slide);
    this.wrap = document.querySelector(wrap);
  }

  onStart(event) {
    event.preventDefault();
    this.wrap.addEventListener("mousemove", this.onMove);
  }

  onMove(event) {}

  onEnd() {
    this.wrap.removeEventListener("mousemove", this.onMove);
  }

  addSlideEvent() {
    this.wrap.addEventListener("mousedown", this.onStart);
    this.wrap.addEventListener("mouseup", this.onEnd);
  }

  eventsBind() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }
  init() {
    this.eventsBind();
    this.addSlideEvent();
    return this;
  }
}
