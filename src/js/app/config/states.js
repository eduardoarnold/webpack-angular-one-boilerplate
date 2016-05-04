'use strict';
// State loader
const loadStates = (appModule) => {
  appModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/index');

    $stateProvider.state('index', {
      url: '/index',
      template: require('../index/index.html'),
      controller: 'IndexController',
      controllerAs: 'index'
    });

  }]);
};

export default {
  load: loadStates
};
