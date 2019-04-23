import gogShop from "./app";

describe("Product Factory", () => {
    let productFactory;

    beforeEach(() => {
        angular.mock.module(gogShop);
        angular.mock.inject(($injector) => {
            productFactory = $injector.get("productFactory");
        });
    });

    it("returns product object", (done) => {
        expect(productFactory.get(1)).toEqual(jasmine.any(Object));
        done();
    });
});