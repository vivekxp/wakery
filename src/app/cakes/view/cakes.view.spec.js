describe("cake view specs", function () {

    var CakeViewFactory, $mdDialog;
    beforeEach(module('wakery.cakes.view'));
    beforeEach(inject(function (_CakeViewFactory_, _$mdDialog_) {
        CakeViewFactory = _CakeViewFactory_;
        $mdDialog = _$mdDialog_;
        spyOn($mdDialog, 'show');
    }));

    describe("When show method is called", function () {
        var response;
        beforeEach(function () {
            response = CakeViewFactory.show("event", "cake");
        });

        it("should call show on mdDialog", function () {
            expect($mdDialog.show).toHaveBeenCalled();
        });
    });
});