function Airport() {

};

Airport.prototype.land = function(plane) {
  this._plane = plane
};

Airport.prototype.plane = function() {
  return this._plane
};

Airport.prototype.takeOff = function(plane) {
  this._plane = null
};
