describe('Airport', function() {

  var airport, plane, weather;

  beforeEach(function (){
    weather = jasmine.createSpyObj('weather', ['isStormy'])
    airport = new Airport(weather);
    plane = 'plane';
  });

  describe('good weather', function() {
    beforeEach (function(){
      weather.isStormy.and.returnValue(false);
    });

    it('lands a plane at an airport in good weather', function() {
      airport.land(plane);
      expect(airport.plane()).toEqual(plane);
    });

    it('takes off a plane from an airport in good weather', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.plane()).toEqual(null);
    });

  });

  describe('bad weather', function() {
    beforeEach(function () {
      weather.isStormy.and.returnValue(true);
    });

    it('does not land a plane at an airport in bad weather', function() {
      expect(function() {airport.land(plane); }).toThrowError('cannot land during storm')
    });

    it('stops a plane taking off in stormy weather', function(){
      expect(function() {airport.takeOff(plane); }).toThrowError('cannot takeoff during storm')
    });
  });
});
