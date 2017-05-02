angular.module("WakeryApp", ['ngMaterial'])

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('orange')
            .accentPalette('blue');
    })

    .controller("WakeryController", function ($scope) {
        $scope.testText = " Welcome to wakery cakery!!";
    });