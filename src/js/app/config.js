'use strict';
import IndexController from './index/index.controller';

const config = (appModule, angular) => {
  appModule.controller('IndexController', ['$scope', '$log', IndexController]);

  appModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', ($stateProvider, $locationProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/index');

    $stateProvider
      .state('index', {
          url: '/index',
          template: require('./index/index.html'),
          controller: 'IndexController',
          controllerAs: 'index'
        });
  }]);
};

export default config;
