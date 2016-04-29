'use strict';
// State loader
const loadStates = (appModule, angular) => {
  appModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/page1');

    $stateProvider.state('index', {
      url: '/index',
      template: require('../index/index.html'),
      controller: 'IndexController',
      controllerAs: 'index'
    });

  }]);
}

export default {
  load: loadStates
};
