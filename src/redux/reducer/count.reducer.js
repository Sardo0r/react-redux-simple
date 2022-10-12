import { loadState, saveState } from "./../../utils/storage";
import {
	ADD_COUNT,
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	SUBTRACT_COUNT
} from "../types/count.types";

const initialState = {
	totalCount: 0,
	totalPrice: 0,
	products: loadState("products") ?? []
};

const countReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT: {
			console.log({ action });

			saveState(
				"products",
				state.products.push({
					id: action.payload.id,
					count: action.payload.count,
					price: action.payload.price
				})
			);
			return {
				totalCount: state.totalCount + action.payload.count,
				totalPrice: state.totalPrice + action.payload.price,
				product:
					state.products &&
					state?.products?.push({
						id: action.payload.id,
						count: action.payload.count,
						price: action.payload.price
					})
			};
		}
		case REMOVE_PRODUCT:
			saveState(
				"products",
				state?.products?.filter((item) => item.id !== action.payload.id)
			);
			return {
				totalCount: state.totalCount - action.payload.count,
				totalPrice: state.totalPrice - action.payload.price,
				product: state?.products?.filter(
					(item) => item.id !== action.payload.id
				)
			};
		default:
			return { ...state };
	}
};

export default countReducer;
