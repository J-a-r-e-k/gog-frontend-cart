import {expect} from "chai";
import {productFactory} from "./product.factory";

describe("productFactory", () => {
    const pf = productFactory();

    it("should return product with id", (done) => {
        pf.get(1).then(product => {
            expect(product.id).to.hasOwnProperty("id");
            done();
        });
    });
});