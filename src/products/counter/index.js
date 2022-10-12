import { Badge, Button, Group } from "@mantine/core";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT } from "./../../redux/types/count.types";
import { addProduct } from "./../../redux/action/count.action";

const ProductCounter = ({ price, id }) => {
	const [count, setCount] = useState(0);
	const dispatch = useDispatch();
	const decreaseCount = () => {
		if (count >= 1) {
			setCount(count - 1);
		}
	};
	const increaseCount = () => {
		setCount(count + 1);
		dispatch({ type: ADD_PRODUCT, payload: { count: count + 1, price, id } });
	};
	return (
		<Group position="center" spacing={10} align="center">
			<Button onClick={increaseCount} color="green">
				<PlusIcon width={16} height={16} />
			</Button>
			<Badge
				size="xl"
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
