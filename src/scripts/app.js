import angular from "angular";
import {storageFactory} from "./storage.factory";
import {productFactory} from "./product.factory";
import {shopController} from "./shop.controller";

angular
    .module("gogShop", [])
    .factory("storageFactory", [storageFactory])
    .factory("productFactory", [productFactory])
    .controller("shopController", ["$scope", shopController]);

angular.bootstrap(document, ["gogShop"]);
