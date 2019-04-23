import PRODUCTS from "./products.json";

const productFactory = () => {
    return {
        "get": (id) => PRODUCTS.find(product => product.id === id)
    };
};

export {productFactory}