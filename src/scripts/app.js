import angular from "angular";
import {storageFactory} from "./storage.factory";
import {productFactory} from "./product.factory";
import {shopController} from "./shop.controller";

const app = angular
    .module("gogShop", [])
    .factory("storageFactory", [storageFactory])
    .factory("productFactory", [productFactory])
    .controller("shopController", ["$scope", "storageFactory", "productFactory", shopController]);

export default app.name;