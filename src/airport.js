function Airport(weather) {
  this._weather = weather;
};

Airport.prototype.plane = function() {
  return this._plane
};

Airport.prototype.land = function(plane) {
  this._plane = plane
};

Airport.prototype.takeOff = function(plane) {
  if (this._isWeatherStormy() === false) {
    this._plane = null;
  }
};

Airport.prototype._isWeatherStormy = function() {
  return this._weather.isStormy();
};
