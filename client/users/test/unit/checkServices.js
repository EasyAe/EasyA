describe('GetItem', function () {
  var getItem;
  beforeEach(module('testAngularWebApp'));
  beforeEach(inject(function (_getItem_) {
    getItem = _getItem_;
  }));
  describe('#itemsAJaxServerResponse', function () {

    it('should be a non empty array', function () {
      expect(getItem.getAllItems()).to.be.an('object');
    });

  });
});