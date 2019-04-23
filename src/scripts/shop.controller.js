const shopController = ($scope, storageFactory, productFactory) => {
    $scope.products = storageFactory.get("cart");

    $scope.addProduct = (id) => {
        if ($scope.isOnCart(id)) {
            return false;
        }
        const product = productFactory.get(id);
        $scope.products.push(product);
        return storageFactory.set("cart", $scope.products);
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