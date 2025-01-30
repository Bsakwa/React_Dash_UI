"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = useLocalStorage;
const react_1 = require("react");
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = (0, react_1.useState)(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.error(error);
            return initialValue;
        }
    });
    (0, react_1.useEffect)(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        }
        catch (error) {
            console.error(error);
        }
    }, [key, storedValue]);
    return [storedValue, setStoredValue];
}
