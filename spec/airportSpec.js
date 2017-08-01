describe('landing a plane', function() {

var airport;
var plane;

  beforeEach(function (){
    airport = new Airport();
    plane = 'plane';
  });

  it('lands a plane at an airport', function() {
    airport.land(plane);
    expect(airport.plane()).toEqual(plane);
  });

  it('takes off a plane from an airport', function() {
    airport.takeOff(plane);
    expect(airport.plane()).toEqual(null);
  });
});
