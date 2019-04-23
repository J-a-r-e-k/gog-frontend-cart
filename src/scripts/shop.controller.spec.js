import gogShop from "./app";

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
        expect($scope.products).toEqual(jasmine.any(Object));
        done();
    });

    it("adds product to cart", (done) => {
        let $scope = $rootScope.$new();
        let controller = $controller("shopController", { $scope: $scope });
        $scope.addProduct(1);
        expect($scope.isOnCart(1)).toBeDefined();
        done();
    });

    it("removes product from cart", (done) => {
        let $scope = $rootScope.$new();
        let controller = $controller("shopController", { $scope: $scope });
        $scope.addProduct(1);
        $scope.removeProduct(1);
        expect($scope.isOnCart(1)).toBe(undefined);
        done();
    });

    it("removes all products from cart", (done) => {
        let $scope = $rootScope.$new();
        let controller = $controller("shopController", { $scope: $scope });
        $scope.addProduct(1);
        $scope.clearCart();
        expect($scope.isOnCart(1)).toBe(undefined);
        done();
    });
});
