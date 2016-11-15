import angular from 'angular';

import cHello from './cHello';

export default angular.module('app.home', [])
  .component('cHello', cHello)
  .name;
