import angular from "angular";
import {storageFactory} from "./storage.factory";
import {productFactory} from "./product.factory";
import {shopController} from "./shop.controller";
import {cartDirective} from "./cart.directive";

const app = angular
    .module("gogShop", [])
    .factory("storageFactory", [storageFactory])
    .factory("productFactory", [productFactory])
    .controller("shopController", ["$scope", "storageFactory", "productFactory", shopController])
    .directive("cart", [cartDirective]);

export default app.name;