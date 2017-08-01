describe('Airport', function() {

  var airport, plane, weather, defaultCapacity, largeCapacity;

  beforeEach(function (){
    weather = jasmine.createSpyObj('weather', ['isStormy'])
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff', 'landed'])
    airport = new Airport(weather);
    largeAirport = new Airport(weather, largeCapacity)
    defaultCapacity = 10
    largeCapacity = 20
  });

  describe('capacity', function() {
    it('set to default value if not specified', function() {
      expect(airport.capacity()).toEqual(defaultCapacity);
    });
    it('set to argument value if specified', function() {
      expect(largeAirport.capacity()).toEqual(largeCapacity);
    });
  });

  describe('good weather', function() {
    beforeEach (function(){
      weather.isStormy.and.returnValue(false);
    });
    describe('land', function() {
      it('lands a plane at an airport in good weather', function() {
        airport.land(plane);
        expect(airport.planes()).toContain(plane);
      });
      it('calls land function on the plane', function() {
        airport.land(plane);
        expect(plane.land).toHaveBeenCalled();
      });
    });

    it('takes off a plane from an airport in good weather', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).not.toContain(plane);
    });

    describe('airport full', function() {

      it('stops a plane landing in full airport', function() {
        for(i = 1; i <= defaultCapacity; i++) {
          airport.land(plane);
        }
        expect(function() { airport.land(plane); }).toThrowError('Airport is full');
      });
    });
  });

  describe('bad weather', function() {
    beforeEach(function () {
      weather.isStormy.and.returnValue(true);
    });

    it('does not land a plane at an airport in bad weather', function() {
      expect(function() {airport.land(plane); }).toThrowError();
    });

    it('stops a plane taking off in stormy weather', function(){
      expect(function() {airport.takeOff(plane); }).toThrowError();
    });
  });
});
