const shopController = ($scope, storageFactory, productFactory) => {
    $scope.products = storageFactory.get("cart");

    $scope.addProduct = (id) => {
        if ($scope.isOnCart(id)) {
            return false;
        }
        return productFactory.get(id).then(product => {
            $scope.products.push(product);
            $scope.$apply();
            return storageFactory.set("cart", $scope.products);
        })
    };

    $scope.removeProduct = (id) => {
        $scope.products = $scope.products.filter(value => value.id !== id);
        return storageFactory.set("cart", $scope.products);
    };

    $scope.isOnCart = (id) => {
        return $scope.products.find(item => item.id === id);
    };

    $scope.clearCart = () => {
        $scope.products = [];
        return storageFactory.set("cart", $scope.products);
    };
};

export {shopController}