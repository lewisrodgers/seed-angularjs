import 'angular';
import 'angular-mocks';

import home from './';
import './cHello';

describe('<hello> component', function() {
  let $compile;
  let $rootScope;

  beforeEach(angular.mock.module(home));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should render the text', function() {
    let element = $compile('<c-hello></c-hello>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('Hello world!');
  });
});
