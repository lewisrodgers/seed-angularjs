/**
 * @param {Object} $stateProvider
 */
export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      component: 'cHello', // example
    });
}
