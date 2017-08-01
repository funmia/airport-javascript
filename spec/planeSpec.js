describe('Plane', function() {
  var plane;
  beforeEach(function () {
    plane = new Plane;
  });
  describe('land', function() {
    beforeEach(function () {
      plane.takeOff();
    });
    it('changes plane\'s landed property to true', function() {
      plane.land();
      expect(plane.landed()).toEqual(true);
    });
    it('throws error if plane is already grounded', function() {
      plane.land();
      expect(function() { plane.land() }).toThrowError();
    });
  });
  describe('takeOff', function() {
    it('changes plane\'s landed property to false', function() {
      plane.takeOff();
      expect(plane.landed()).toEqual(false);
    });
    it('throws error if plane is already in the air', function() {
      plane.takeOff();
      expect(function() { plane.takeOff() }).toThrowError();
    });
  });
});
