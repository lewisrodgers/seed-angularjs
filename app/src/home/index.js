import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './home.config';

import cHello from './cHello'; // example

export default angular
  .module('app.home', [
    uiRouter,
  ])
  .config(config)
  .component('cHello', cHello) // example
  .name;
