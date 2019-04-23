import template from "./cart.directive.html"

const cartDirective = () => {
    return {
        "restrict": "A",
        "scope": {
            "products": "=",
            "removeProduct": "&",
            "clearCart": "&"
        },
        "template": template,
        "link": (scope) => {
            scope.priceSum = () => {
                if (!scope.products.length) {
                    return 0;
                }
                return scope.products
                    .map(product => product.price)
                    .reduce((prev, next) => parseFloat(prev) + parseFloat(next));
            };
        }
    }
};

export {cartDirective}