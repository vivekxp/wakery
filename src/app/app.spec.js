describe("app specs", function () {
    var $routeProvider;
    beforeEach(function () {
        angular.module('routeProviderConfig', ['ngRoute'])
            .config(function (_$routeProvider_) {
                $routeProvider = _$routeProvider_;
                spyOn($routeProvider, 'when');
                spyOn($routeProvider, 'otherwise');
            });
        module('routeProviderConfig');
        module('wakery');
        inject();
    });

    it('should set cakes as default view', function () {
        expect($routeProvider.when).toHaveBeenCalledWith('/', {
            templateUrl: 'templates/cakes.tpl.html',
            controller: 'CakesController'
        });
    });

    it("should set fallback route to /", function () {
        expect($routeProvider.otherwise).toHaveBeenCalledWith('/');
    });
});