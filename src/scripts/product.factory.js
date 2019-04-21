import PRODUCTS from "./products.json";

const productFactory = () => {
    return {
        "get": (id) => {
            return new Promise(resolve => resolve(PRODUCTS.find(product => product.id === id)));
        }
    };
};

export {productFactory}