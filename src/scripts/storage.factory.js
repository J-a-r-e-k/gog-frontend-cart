const storageFactory = () => {
    return {
        "get": (key) => {
            let output = [];
            try {
                output = JSON.parse(localStorage.getItem(key) || "[]");
            } catch (e) {
                localStorage.setItem(key, "[]");
            }
            return output;
        },
        "set": (key, value) => {
            return localStorage.setItem(key, JSON.stringify(value));
        }
    };
};

export {storageFactory}