function Weather() {

};

Weather.prototype.isStormy = function() {
  if(this._randomWeather() < 0.9) {
    return false;
  } else {
    return true;
  }
};

Weather.prototype._randomWeather = function() {
  return Math.random()
};
