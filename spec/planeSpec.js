describe('Plane', function() {
  var plane;
  beforeEach(function () {
    plane = new Plane;
  });
  describe('land', function() {
    it('changes plane\'s landed property to true', function() {
      plane.land();
      expect(plane.landed()).toEqual(true);
    });
  });
  describe('takeOff', function() {
    it('changes plane\'s landed property to false', function() {
      plane.takeOff();
      expect(plane.landed()).toEqual(false);
    });
  });
});
