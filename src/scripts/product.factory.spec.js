import gogShop from "./app";
import {
    expect
} from "chai";

describe("Product Factory", () => {
    let productFactory;

    beforeEach(() => {
        angular.mock.module(gogShop);
        angular.mock.inject(function ($injector) {
            productFactory = $injector.get("productFactory");
        });
    });

    it("returns product object", function (done) {
        expect(productFactory.get(1)).to.be.a("Object");
        done();
    });
});