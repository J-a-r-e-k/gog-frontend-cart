const storageFactory = () => {
    return {
        "get": (key) => {
            try {
                return JSON.parse(localStorage.getItem(key) || "[]");
            } catch (e) {
                console.error(e);
                localStorage.setItem(key, "[]");
                return [];
            }
        },
        "set": (key, value) => {
            return localStorage.setItem(key, JSON.stringify(value));
        }
    };
};

export {storageFactory}