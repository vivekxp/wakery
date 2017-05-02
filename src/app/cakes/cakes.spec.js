describe("cakes specs", function () {
    var $routeProvider;

    beforeEach(function () {
        angular.module('cakesRouteProviderConfig', ['ngRoute'])
            .config(function (_$routeProvider_) {
                $routeProvider = _$routeProvider_;
                spyOn($routeProvider, 'when');
            });
        module('cakesRouteProviderConfig');
        module('wakery');
        inject();
    });

    it('should call when on routeprovider', function () {
        expect($routeProvider.when).toHaveBeenCalledWith('/add', {
            templateUrl: 'templates/cakes.add.tpl.html',
            controller: 'CakesAddController'
        });
    });
});