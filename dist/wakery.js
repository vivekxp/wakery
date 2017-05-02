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

    .controller("WakeryController", function ($scope) { });;angular.module("wakery.cakes.add", ['wakery.cakes.service'])
    .controller("CakesAddController", function ($scope, $location, CakesService) {
        $scope.cake = {};
        $scope.addCake = function () {
            console.log("adding cake now");
            CakesService.create($scope.cake).then(function () {
                $location.path('/');
            }, function () {
                console.log("Could not add caake :(");
            });
        };
        $scope.cancel = function () {
            $location.path('/');
        };
    });;angular.module("wakery.cakes", ['wakery.cakes.list','wakery.cakes.add'])
    .controller("CakesController", function () { })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/add', {
                templateUrl: 'templates/cakes.add.tpl.html',
                controller: 'CakesAddController'
            });
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
    });;angular.module("wakery.cakes.list", ['wakery.cakes.service','wakery.cakes.view'])
    .directive('cakesList', function (CakesService, CakeViewFactory) {
        return {
            templateUrl: 'templates/cakes.list.tpl.html',
            link: function ($scope, element, attrs) {
                CakesService.list().then(function (response) {
                    $scope.cakes = response.data;
                }, function () {
                    $scope.cakes = [];
                });

                $scope.show = function(event,cake) {
                    CakeViewFactory.show(event,cake);
                };
            }
        };
    });;angular.module("wakery.cakes.view", ['ngMaterial'])
    .factory("CakeViewFactory", function ($mdDialog) {
        var factoryMethods = {};
        factoryMethods.show = function (event, cake) {
            $mdDialog.show({
                parent: angular.element(document.body),
                targetEvent: event,
                templateUrl: 'templates/cakes.view.tpl.html',
                locals: { cake: cake },
                clickOutsideToClose: true,
                escapeToClose: true,
                fullscreen: true,
                controller: DialogController
            });
        };
        return factoryMethods;
    });

function DialogController($scope, $mdDialog, cake) {
    $scope.cake = cake;
    $scope.closeDialog = function () {
        $mdDialog.hide();
    };
}