describe("cakes list specs", function () {
    var compile, scope, compiledElement, deferred;
    var CakesService, CakeViewFactory;

    beforeEach(function () {
        module('wakery.cakes.list');

        inject(function ($compile, $rootScope, $templateCache,
            _CakesService_, _$q_, _CakeViewFactory_) {
            compile = $compile;
            scope = $rootScope.$new();
            CakesService = _CakesService_;
            CakeViewFactory = _CakeViewFactory_;
            deferred = _$q_.defer();
            $templateCache.put('templates/cakes.list.tpl.html', '<div>mock template</div>');
        });

        spyOn(CakesService, 'list').and.returnValue(deferred.promise);
        spyOn(CakeViewFactory, 'show');

        var element = angular.element('<cakes-list></cakes-list>');
        compiledElement = compile(element)(scope);
        scope.$digest();
    });

    describe("When directive is compiled", function () {
        it("should call list on CakeService", function () {
            expect(CakesService.list).toHaveBeenCalled();
        });

        describe("When the valid response is received", function () {
            var valid_data = { data: [{}, {}, {}] };
            beforeEach(function () {
                deferred.resolve(valid_data);
                scope.$apply();
            });
            it("should store the cakes in the scope", function () {
                expect(scope.cakes).toEqual(valid_data.data);
            });
        });

        describe("When the invalid response is received", function () {
            beforeEach(function () {
                scope.cakes = [{ name: 'random cake' }];
                deferred.reject("Err. 666");
                scope.$apply();
            });
            it("should reset cakes array to empty", function () {
                expect(scope.cakes).toEqual([]);
            });
        });

        describe("When show method is called on scope", function () {
            var mockEvent = "mock_event", mockCake = "mock_cake";
            beforeEach(function () {
                scope.show(mockEvent, mockCake);
            });
            it("should call show on CakeViewFactory", function () {
                expect(CakeViewFactory.show).toHaveBeenCalledWith(mockEvent, mockCake);
            });
        });
    });


});
