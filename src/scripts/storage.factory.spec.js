import gogShop from "./app";
import {
    expect
} from "chai";

describe("Storage Factory", () => {
    let storageFactory;

    beforeEach(() => {
        angular.mock.module(gogShop);
        angular.mock.inject(function ($injector) {
            storageFactory = $injector.get("storageFactory");
        });
    });

    it("returns array from local storage", (done) => {
        storageFactory.set("cart", undefined);
        expect(storageFactory.get("cart")).to.be.a("array");
        done();
    });

    it("returns updated array from local storage", (done) => {
        const newValue = [{}];
        storageFactory.set("cart", newValue);
        expect(storageFactory.get("cart")).to.be.a("array");
        expect(storageFactory.get("cart")).to.eql(newValue);
        done();
    });
});