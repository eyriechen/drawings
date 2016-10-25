function roundedRect(x, y, width, height, radius) {
  return "M" + (x + radius) + " " + y
       + "L" + (x + width - radius) + " " + y
       + "Q" + (x + width) + " " + y + " " + (x + width) + " " + (y + radius)
       + "L" + (x + width) + " " + (y + height - radius)
       + "Q" + (x + width) + " " + (y + height) + " " + (x + width - radius) + " " + (y + height)
       + "L" + (x + radius) + " " + (y + height)
       + "Q" + x + " " + (y + height) + " " + x + " " + (y + height - radius)
       + "L" + x + " " + (y + radius)
       + "Q" + x + " " + y + " " + (x + radius) + " " + y;
};

function WireRect(parent, x, y, width, height, diameter, r) {
  this.parent = parent;
};

function Wire(parent, x, y, length, diameter, direction){
  var w, h;
  if(direction == "h"){
    w = length;
    h = diameter;
  }else if(direction == "v"){
    h = length;
    w = diameter;
  }
  this.parent = parent;
  this.attrs = {"x": x, "y": y, "width": w, "height":h};
  this.styles = {"fill": "white", "stroke": "black"};
};

Wire.prototype.draw = function() {
  var w = this.parent.append("rect");
  for(var key in this.attrs){
    w.attr(key, this.attrs[key]);
  }
  for (var key in this.styles) {
    w.style(key, this.styles[key]);
  }
};

