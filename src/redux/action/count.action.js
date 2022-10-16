import { ADD_PRODUCT, REMOVE_PRODUCT, SUBSTRACT_PRODUCT } from "../types/count.types";

const addProduct = (count, price, id) => {
	return { type: ADD_PRODUCT, payload: { count, price, id } };
};

const removeProduct = (count, price, id) => {
	return { type: REMOVE_PRODUCT, payload: { count, price, id } };
};

const substractProduct = (count, price, id) => {
	return { type: SUBSTRACT_PRODUCT, payload: { count, price, id } };
};

export { addProduct, removeProduct, substractProduct };
