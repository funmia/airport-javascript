describe('Airport', function() {

  var airport, plane, weather;

  beforeEach(function (){
    // weather = jasmine.createSpy('weather')
    weather = new Weather();
    airport = new Airport(weather);
    console.log(airport);
    plane = 'plane';
  });

  describe('land', function() {
    it('lands a plane at an airport', function() {
      airport.land(plane);
      expect(airport.plane()).toEqual(plane);
    });
  });

  describe('takeOff', function() {
    beforeEach(function () {
      airport.land(plane);
    });
    it('takes off a plane from an airport in good weather', function() {
      spyOn(weather, "isStormy").and.returnValue(false);
      airport.takeOff(plane);
      expect(airport.plane()).toEqual(null);
    });
    it('stops a plane taking off in stormy weather', function(){
      spyOn(weather, "isStormy").and.returnValue(true);
      airport.takeOff(plane);
      expect(airport.plane()).toEqual(plane);
    });
  });
});
