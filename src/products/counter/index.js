import { Badge, Button, Group } from "@mantine/core";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT } from "./../../redux/types/count.types";
import { addProduct, substractProduct } from "./../../redux/action/count.action";

const ProductCounter = ({ price, id }) => {
	const products = useSelector(state => {
		return state.count.products
	})
	const indxProduct = products?.findIndex((item) => item.id === id)
	const [count, setCount] = useState(indxProduct > -1 ? products[indxProduct].count : 0);
	const dispatch = useDispatch();
	const decreaseCount = () => {
		if (count >= 1) {
			setCount(count - 1);
			dispatch(substractProduct(count - 1, price, id));
		}
	};
	const increaseCount = () => {
		setCount(count + 1);
		dispatch(addProduct(count + 1, price, id));
	};
	return (
		<Group position="center" spacing={10} align="center">
			<Button onClick={increaseCount} color="green">
				<PlusIcon width={16} height={16} />
			</Button>
			<Badge
				size="xl"
				color={'green'}
				radius={"sm"}
				variant="gradient"
				gradient={{ from: "green", to: "violet" }}>
				{count}
			</Badge>
			<Button onClick={decreaseCount} color="violet">
				<MinusIcon width={16} height={16} />
			</Button>
		</Group>
	);
};

export default ProductCounter;
