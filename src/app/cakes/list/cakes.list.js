angular.module("wakery.cakes.list", ['wakery.cakes.service','wakery.cakes.view'])
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
    });