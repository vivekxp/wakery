angular.module("WakeryApp", ['ngMaterial', 'ngRoute',
    'wakery.cakes'
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

    .controller("WakeryController", function ($scope) { });;angular.module("wakery.cakes", ['wakery.cakes.list'])
    .controller("CakesController", function () {

    });;angular.module("wakery.cakes.service", [])
    .service("CakesService", function ($http) {
        var SERVER_URI = "http://52.31.91.48:5000/api/cakes";
        var serviceMethods = {
            list: function () {
                return $http({ method: 'GET', url: SERVER_URI });
            },
            create: function (cake) {
                return $http({ method: 'POST', url: SERVER_URI, data: cake });
            },
        };
        return serviceMethods;
    });;angular.module("wakery.cakes.list", ['wakery.cakes.service'])
    .directive('cakesList', function (CakesService) {
        return {
            templateUrl: 'templates/cakes.list.tpl.html',
            link: function ($scope, element, attrs) {
                CakesService.list().then(function (response) {
                    $scope.cakes = response.data;
                }, function () {
                    $scope.cakes = [];
                });
            }
        };
    });