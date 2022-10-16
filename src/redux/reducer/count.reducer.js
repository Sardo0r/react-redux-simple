import { loadState, saveState } from "./../../utils/storage";
import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	SUBSTRACT_PRODUCT,
} from "../types/count.types";
import { getStorage, setStorage } from "../../utils/local-storage.ts";

const initialState = {
	totalCount: 0,
	products: Array.isArray(getStorage('products', '[]')) ? getStorage('products', '[]') : []
};

const countReducer = (state = initialState, action) => {
	console.log({ action, state })
	switch (action.type) {
		case ADD_PRODUCT:
			const ind = state.products?.findIndex(i => i.id === action.payload.id)
			if (ind !== -1) {
				state.products[ind].count = action.payload.count
				saveState("products", state.products);
				return {
					...state,
				}
			} else {
				state.products.push(action.payload)
				saveState("products", state.products);
				return {
					...state,
					products: state.products
				};
			}
		case REMOVE_PRODUCT:
			state.products?.splice(state.products.findIndex(itm => itm.id === action.payload.id), 1)
			saveState(
				"products",
				state.products
			);
			return {
				...state,
				products: state?.products
			};
		case SUBSTRACT_PRODUCT:
			const indx = state.products?.findIndex(i => i.id === action.payload.id)
			if (state.products[indx].count === 1) {
				state.products.splice(indx, 1)
			} else {
				state.products[indx].count = action.payload.count
			}
			saveState("products", state.products);
			return {
				...state,
				products: state.products
			};
		default:
			return { ...state };
	}
};

export default countReducer;
