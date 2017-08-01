describe('landing a plane', function() {
    it('lands a plane at an airport', function() {
      var plane = 'plane';
      var airport = new Airport();

      airport.land(plane);
      expect(airport.plane()).toEqual(plane);
    });
});
