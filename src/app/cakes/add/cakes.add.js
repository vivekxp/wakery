angular.module("wakery.cakes.add", ['wakery.cakes.service'])
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
    });