angular.module("wakery.cakes.list", ['wakery.cakes.service'])
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