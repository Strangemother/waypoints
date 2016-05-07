import homeCtrl from './controllers/homeCtrl.js';
import modalCtrl from './controllers/modalCtrl.js';

(function(){
    'use strict';

    var wp = angular.module('wp', ['ui.router', 'ui.bootstrap']);

    wp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            views: {
                '': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                }
            }
        });

    }]);

    wp.controller('HomeCtrl', homeCtrl);
    wp.controller('ModalCtrl', modalCtrl);


    module.exports = wp;
})();
