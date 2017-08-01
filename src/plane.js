function Plane() {
  this._landed = true;
};

Plane.prototype.land = function() {
  this._landed = true;
};

Plane.prototype.takeOff = function() {
  this._landed = false;
};

Plane.prototype.landed = function() {
  return this._landed;
};
