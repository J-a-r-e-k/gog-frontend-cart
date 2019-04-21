import {expect} from "chai";
import {shopController} from "./shop.controller";
import {storageFactory} from "./storage.factory";
import {productFactory} from "./product.factory";

describe("shopController", () => {

    let $scope = {};
    shopController($scope, storageFactory(), productFactory());

    it("should has empty products array", (done) => {
        expect($scope.products).to.be.a("array");
        expect($scope.products).to.be.empty;
        done();
    });

    it("should has addProduct function", (done) => {
        expect($scope.addProduct).to.be.a("function");
        done();
    });

    it("should has removeProduct function", (done) => {
        expect($scope.removeProduct).to.be.a("function");
        done();
    });

    it("should has isOnCart function", (done) => {
        expect($scope.isOnCart).to.be.a("function");
        done();
    });

    it("should has clearCart function", (done) => {
        expect($scope.clearCart).to.be.a("function");
        done();
    });
});