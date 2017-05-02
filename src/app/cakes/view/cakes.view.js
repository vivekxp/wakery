angular.module("wakery.cakes.view", ['ngMaterial'])
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