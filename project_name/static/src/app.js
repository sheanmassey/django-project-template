(function(){

    var app = angular.module('app', [
        // ng modules:
        'ngCookies',
        'ngResource',
        'ngAnimate',
        // 3rd party
        'ui-router',
        'LocalStorageModule',
    ]);

    app.config(['$urlRouterProvider', '$stateProvider', '$httpProvider', function($urlRouterProvider, $stateProvider, $httpProvider){
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        $urlRouterProvider.otherwise('/');

        // $stateProvider
        //     .state('app', {
        //         url: '/app',
        //         resolve {
        //             x: function() {

        //             }
        //         },
        //         controller: '',
        //         templateUrl: '',
        //     });
    }]);

})();
