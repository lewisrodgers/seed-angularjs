import angular from 'angular';

import hello from './hello.component';

export default angular.module('app.home', [])
  .component('hello', hello)
  .name;
