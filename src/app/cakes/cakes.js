angular.module("wakery.cakes", ['wakery.cakes.list', 'wakery.cakes.add'])
    .controller("CakesController", function () { })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/add', {
                templateUrl: 'templates/cakes.add.tpl.html',
                controller: 'CakesAddController'
            });
    });