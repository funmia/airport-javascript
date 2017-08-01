describe('Airport', function() {

  var airport, plane, weather;

  beforeEach(function (){
    weather = jasmine.createSpyObj('weather', ['isStormy'])
    airport = new Airport(weather);
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff'])
  });

  describe('good weather', function() {
    beforeEach (function(){
      weather.isStormy.and.returnValue(false);
    });
    describe('land', function() {
      it('lands a plane at an airport in good weather', function() {
        airport.land(plane);
        expect(airport.plane()).toEqual(plane);
      });
      it('calls land method on the plane', function() {
        airport.land(plane);
        expect(airport.plane()).toEqual(plane);
      });
    });

    it('takes off a plane from an airport in good weather', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.plane()).toEqual(null);
    });

    describe('airport full', function() {

      it('stops a plane landing in full airport', function() {
        airport.land(plane);
        expect(function() { airport.land(plane); }).toThrowError('Airport is full');
      });
    });

  });

  describe('bad weather', function() {
    beforeEach(function () {
      weather.isStormy.and.returnValue(true);
    });

    it('does not land a plane at an airport in bad weather', function() {
      expect(function() {airport.land(plane); }).toThrowError('cannot land during storm');
    });

    it('stops a plane taking off in stormy weather', function(){
      expect(function() {airport.takeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});
