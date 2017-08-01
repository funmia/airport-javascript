function Airport(weather) {
  this._weather = weather;
  this._plane = null;
};

Airport.prototype.plane = function() {
  return this._plane
};

Airport.prototype.land = function(plane) {
  if (this._isWeatherStormy()) {
    throw new Error('cannot land during storm');
  }
  this._plane = plane;
};

Airport.prototype.takeOff = function(plane) {
  if (this._isWeatherStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._plane = null;
};

Airport.prototype._isWeatherStormy = function() {
  return this._weather.isStormy();
};
