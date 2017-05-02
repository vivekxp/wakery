angular.module("WakeryApp", ['ngMaterial', 'ngRoute',
    'cakes'
])
    .config(function ($mdThemingProvider, $routeProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('orange')
            .accentPalette('blue');

        $routeProvider
            .when('/', {
                templateUrl: 'templates/cakes.tpl.html',
                controller: 'CakesController'
            });
        $routeProvider.otherwise("/");
    })

    .controller("WakeryController", function ($scope) { });;angular.module("cakes", [])
    .controller("CakesController", function () {

    });