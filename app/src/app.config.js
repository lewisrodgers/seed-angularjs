/**
 * @param {Object} $urlRouterProvider
 */
export default function($urlRouterProvider) {
  'ngInject';
  $urlRouterProvider.otherwise('/');
}
