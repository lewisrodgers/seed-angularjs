import './index';
import 'angular-mocks';

describe('Test factory', function() {
  let Test;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_Test_) {
    Test = _Test_;
  }));

  it('should exist', function() {
    expect(Test).toBeDefined();
  });
});
