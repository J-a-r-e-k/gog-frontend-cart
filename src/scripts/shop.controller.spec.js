import gogShop from "./app";
import {
    expect
} from "chai";

describe("Shop Controller", () => {
    let $controller;
    let $rootScope;

    beforeEach(() => {
        angular.mock.module(gogShop);
        angular.mock.inject(function (_$controller_, _$rootScope_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        });
        localStorage.setItem("cart", "[]");
    });

    it("has products array", (done) => {
        let $scope = $rootScope.$new();
        let controller = $controller("shopController", { $scope: $scope });
        expect($scope.products).to.be.an("Array");
        done();
    });

    it("adds product to cart", (done) => {
        let $scope = $rootScope.$new();
        let controller = $controller("shopController", { $scope: $scope });
        $scope.addProduct(1);
        expect($scope.isOnCart(1)).to.be.not.undefined;
        done();
    });

    it("removes product from cart", (done) => {
        let $scope = $rootScope.$new();
        let controller = $controller("shopController", { $scope: $scope });
        $scope.addProduct(1);
        $scope.removeProduct(1);
        expect($scope.isOnCart(1)).to.be.undefined;
        done();
    });

    it("removes all products from cart", (done) => {
        let $scope = $rootScope.$new();
        let controller = $controller("shopController", { $scope: $scope });
        $scope.addProduct(1);
        $scope.clearCart();
        expect($scope.isOnCart(1)).to.be.undefined;
        done();
    });
});
