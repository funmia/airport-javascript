describe('Weather', function() {
  var weather;
  beforeEach(function() {
    weather = new Weather();
  });
  describe('isStormy', function() {
    it('returns false if random number is less than 0.9', function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      expect(weather.isStormy()).toEqual(false);
    });
    it('returns true if random number is greater than or equal to 0.9', function() {
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(weather.isStormy()).toEqual(true);
    });
  });

});
