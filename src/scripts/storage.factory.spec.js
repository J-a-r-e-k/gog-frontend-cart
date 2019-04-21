import {expect} from "chai";
import {storageFactory} from "./storage.factory";

describe("storageFactory", () => {
    const sf = storageFactory();

    it("should return empty array", (done) => {
        expect(sf.get("cart")).to.be.a("array");
        expect(sf.get("cart")).to.be.empty;
        done();
    });

    it("should return updated array", (done) => {
        const newValue = [{}];
        sf.set("cart", newValue);
        expect(sf.get("cart")).to.be.a("array");
        expect(sf.get("cart")).to.eql(newValue);
        done();
    });
});