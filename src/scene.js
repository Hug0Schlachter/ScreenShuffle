class Scene {
  constructor() {
    this.mode = "clicking";
    this.offset = [];
    this.offset.x = 250;
    this.offset.y =  250;
    this.dragOffset = [];
    this.dragOffset.x = 0;
    this.dragOffset.y = 0;
    this.mappedMouse = [];
    this.mappedMouse.x = 0;
    this.mappedMouse.y = 0;
  }
}

Scene.prototype.mapMouse = function () {
  this.mappedMouse.x = mouseX - this.offset.x;
  this.mappedMouse.y = mouseY - this.offset.y;
};

Scene.prototype.stopDragging = function () {
  this.dragOffset.x = 0;
  this.dragOffset.y = 0;
  this.mode = "clicking";
  cursor(ARROW);
};

Scene.prototype.isDragging = function () {
  if(this.mode == "dragging"){
    return true
  } else {
    return false;
  }
};
Scene.prototype.whileDragging = function () {
  this.offset.x = mouseX - this.dragOffset.x;
  this.offset.y = mouseY - this.dragOffset.y;
  //console.log(this.xOffset + ", " + this.yOffset + ", " + mouseX + ", " +  mouseY);

};
Scene.prototype.startDragging = function () {
  this.mode = "dragging";
  this.dragOffset.x = mouseX - this.offset.x;
  this.dragOffset.y = mouseY - this.offset.y;
  cursor(HAND);
  console.log ("Start dragging from: " + this.dragOffset.x + ", " + this.dragOffset.y);
};

var backgroundGrid = function (){
  amount = 40;
  size = 5000;
  stroke(colors.darkGrey);
  strokeWeight(1);
  fill(colors.darkGrey);
  //horizontal lines
  for (i = -amount/2; i < amount; i++){
    stroke(colors.darkGrey);
    line(-size, (size/amount)*i, size, (size/amount)*i);
    noStroke()
    text(i, (size/amount)*i, 20);
  }
  // vertiacal lines
  for (i = -amount/2; i < amount; i++){
    stroke(colors.darkGrey);
    line((size/amount)*i, -size, (size/amount)*i, size);
    noStroke();
    text(i, 20, (size/amount)*i);
  }
}
