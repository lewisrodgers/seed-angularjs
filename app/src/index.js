import angular from 'angular';

angular
  .module('app', [])
  .factory('Test', function() {
    let Test = {};
    return Test;
  })
  .run(function($log) {
    'ngInject';
    $log.info('Hello App');
  });
