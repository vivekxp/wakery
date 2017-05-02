describe("cake.service.spec.js", function () {

    var COLLECTION_URL = "http://52.31.91.48:5000/api/cakes";

    var CakesService, $httpBackend, $q;
    beforeEach(module('wakery.cakes.service'));

    beforeEach(inject(function (_CakesService_, _$httpBackend_, _$q_) {
        CakesService = _CakesService_;
        $httpBackend = _$httpBackend_;
        $q = _$q_;
    }));

    describe("When list method is called", function () {
        var response;
        beforeEach(function () {
            response = CakesService.list();
        });

        it("should call GET on collection URL", function () {
            $httpBackend.expectGET(COLLECTION_URL).respond({ status: 200 });
            $httpBackend.flush();
        });

        it("should return the promise as response", function () {
            expect(typeof response).toEqual(typeof $q.defer().promise);
        });
    });

    describe("When create method is called", function () {
        var response;
        beforeEach(function () {
            response = CakesService.create();
        });

        it("should call POST on collection URL", function () {
            $httpBackend.expectPOST(COLLECTION_URL).respond({ status: 204 });
            $httpBackend.flush();
        });

        it("should return the promise as response", function () {
            expect(typeof response).toEqual(typeof $q.defer().promise);
        });
    });

});