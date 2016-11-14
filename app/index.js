import angular from 'angular';

angular
  .module("app", [])
  .run(function($log) {
    'ngInject';
    $log.info('Hello App');
  });
