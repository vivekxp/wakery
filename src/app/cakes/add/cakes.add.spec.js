describe("cakes add specs", function () {

    var CakesService, scope, deferred, $location;

    beforeEach(function () { module("wakery.cakes.add"); });

    beforeEach(inject(function ($controller, $rootScope, _$location_, _CakesService_, _$q_) {
        CakesService = _CakesService_;
        scope = $rootScope.$new();
        deferred = _$q_.defer();
        $location = _$location_;
        $controller('CakesAddController', {
            $scope: scope
        });

        spyOn(CakesService, 'create').and.returnValue(deferred.promise);
        spyOn($location, 'path');
    }));

    describe("When addCake is called", function () {
        var newCake = "new_cake";
        beforeEach(function () {
            scope.cake = newCake;
            scope.addCake();
        });

        it("should call create on Cakes service", function () {
            expect(CakesService.create).toHaveBeenCalledWith(newCake);
        });

        describe("When adding cake was successful", function () {
            beforeEach(function () {
                deferred.resolve();
                scope.$apply();
            });

            it("should navigate back to the list of cakes", function () {
                expect($location.path).toHaveBeenCalledWith("/");
            });
        });

        describe("When adding cake was not successful", function () {
            beforeEach(function () {
                deferred.reject();
                scope.$apply();
            });

            it("should not navigate away", function () {
                expect($location.path).not.toHaveBeenCalled();
            });
        });
    });

    describe("When cancel is called", function () {
        beforeEach(function () {
            scope.cancel();
        });

        it("should navigate back to the list of cakes", function () {
            expect($location.path).toHaveBeenCalledWith("/");
        });
    });
});