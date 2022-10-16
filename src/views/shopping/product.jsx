import { ActionIcon, Badge, Group, Skeleton, Stack, Text } from "@mantine/core";
import { ExitIcon, TrashIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/action/count.action";
import { REMOVE_PRODUCT } from "../../redux/types/count.types";

const ShoppingProd = ({ id, price, count }) => {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const removeItem = () => {
        dispatch(removeProduct(count, price, id))
    }
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);
                setIsLoading(false);
                console.log({ json })
            });
    }, []);

    return isLoading ? <Skeleton width={600} height={209}></Skeleton> : <Group align={'center'} p={'xl'} sx={{ border: '1px solid green', borderRadius: '8px' }}>
        <img width={80} height={80} style={{ objectFit: 'contain', margin: '0 auto' }} src={product?.image} />
        <Stack align={'flex-start'}>
            <Text> <span style={{ fontWeight: 500 }}>Title:</span> {product?.title.substring(0, 30)}...</Text>
            <Text><span style={{ fontWeight: 500 }}>Price:</span> ${price}</Text>
            <Group align={'center'}>
                <Text weight={500}>Category: </Text><Badge>{product?.category}</Badge>
            </Group>
            <Group align={'center'}>
                <Text weight={500}>Count: </Text><Badge size="lg" color={'grape'}>{count}</Badge>
            </Group>
        </Stack>
        <ActionIcon onClick={() => removeItem()} color={'red'} size="xl"><TrashIcon height={24} width={24} color="red" /></ActionIcon>
    </Group>
}

export default ShoppingProd