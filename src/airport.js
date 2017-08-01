const DEFAULTCAPACITY = 10

function Airport(weather, capacity = DEFAULTCAPACITY) {
  this._weather = weather;
  this._planes = [];
  this._capacity = capacity
};

Airport.prototype.planes = function() {
  return this._planes;
};

Airport.prototype.capacity = function() {
  return this._capacity;
};

Airport.prototype.land = function(plane) {
  if (this._isWeatherStormy()) {
    throw new Error('cannot land during storm');
  } else if(this._planes.length === DEFAULTCAPACITY) {
    throw new Error('Airport is full');
  }
  plane.land();
  this._planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  if (this._isWeatherStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  plane.takeOff();
  var index = this._planes.indexOf(plane);
  this._planes.splice(index, 1);
};

Airport.prototype._isWeatherStormy = function() {
  return this._weather.isStormy();
};
