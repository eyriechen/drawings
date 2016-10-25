function roundedRectClockwise(x, y, width, height, radius) {
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

function roundedRectAnticlockwise(x, y, width, height, radius) {
  return "M" + x + " " + (y + radius)
       + "L" + x + " " + (y + height - radius)
       + "Q" + x + " " + (y + height) + " " + (x + radius) + " " + (y + height)
       + "L" + (x + width - radius) + " " + (y + height)
       + "Q" + (x + width) + " " + (y + height) + " " + (x + width) + " " + (y + height - radius)
       + "L" + (x + width) + " " + (y + radius)
       + "Q" + (x + width) + " " + y + " " + (x + width - radius) + " " + y
       + "L" + (x + radius) + " " + y
       + "Q" + x + " " + y + " " + x + " " + (y + radius);
};

function WireRect(parent, x, y, width, height, diameter, radius) {
  this.parent = parent;
  var radius_inside = radius - diameter;
  if (radius_inside < 0) { radius_inside = 0; };
  var path = roundedRectClockwise(x, y, width, height, radius) +
             roundedRectAnticlockwise(x + radius, y + radius, width - 2 * radius, height - 2 * radius, radius_inside) +
             "Z";
  this.attrs = {"x": x, "y": y, "d": path};
  this.styles = {"fill": "white", "stroke": "black"};
};

WireRect.prototype.draw = function() {
  var w = this.parent.append("path");
  for(var key in this.attrs){
    w.attr(key, this.attrs[key]);
  }
  for (var key in this.styles) {
    w.style(key, this.styles[key]);
  }
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

