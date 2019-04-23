import gogShop from "./app";

describe("Storage Factory", () => {
    let storageFactory;

    beforeEach(() => {
        angular.mock.module(gogShop);
        angular.mock.inject(($injector) => {
            storageFactory = $injector.get("storageFactory");
        });
    });

    it("returns array from local storage", (done) => {
        storageFactory.set("cart", undefined);
        expect(storageFactory.get("cart")).toEqual(jasmine.any(Array));
        done();
    });

    it("returns updated array from local storage", (done) => {
        const newValue = [{}];
        storageFactory.set("cart", newValue);
        expect(storageFactory.get("cart")).toEqual(jasmine.any(Array));
        expect(storageFactory.get("cart")).toEqual(newValue);
        done();
    });
});