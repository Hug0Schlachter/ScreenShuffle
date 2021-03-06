class Layer {
  constructor(){
    this.pos = [];
    this.pos.x = 0;
    this.pos.y = 0;
    this.size = [];
    this.size.x = 0;
    this.size.y = 0;
    this.dragOffset = [];
  }
}

Layer.prototype.startDrag = function () {
  this.dragOffset.x = mouseX - this.pos.x;
  this.dragOffset.y = mouseY - this.pos.y;
  //console.log ("Start dragging layer from: " + this.dragOffset.x + ", " + this.dragOffset.y);
};

Layer.prototype.whileDrag = function () {
  this.pos.x = mouseX - this.dragOffset.x;
  this.pos.y = mouseY - this.dragOffset.y;
  //console.log("dragging layer to: " + this.pos.x + ", " + this.pos.y);

};

Layer.prototype.endDrag = function () {
  this.dragOffset.x = 0;
  this.dragOffset.y = 0;
};

Layer.prototype.setSize = function (x,y) {
  this.size.x = x;
  this.size.y = y;
  //console.log("set Size to: " + x + ", " + y);
  return
};

Layer.prototype.renderSelection = function () {
    strokeWeight(5);
    noFill();
    stroke(colors.yellow);
    rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
};

Layer.prototype.updateSize = function () {
  this.setSize(this.image.width / this.resolution, this.image.height / this.resolution);
};
