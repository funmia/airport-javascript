function Plane() {
  this._landed = true;
};

Plane.prototype.land = function() {
  if(this._landed) {
    throw new Error('Plane is already grounded');
  }
  this._landed = true;
};

Plane.prototype.takeOff = function() {
  if(!this._landed) {
    throw new Error('Plane is already in the air');
  }
  this._landed = false;
};

Plane.prototype.landed = function() {
  return this._landed;
};
