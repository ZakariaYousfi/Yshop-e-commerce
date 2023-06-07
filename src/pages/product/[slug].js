import products from '../../products'
import { Box, Flex, Grid, Text, Image, Divider, Button,
    Select } from '@chakra-ui/react';
import {useContext, useState } from 'react';
import CartContext from '@/state/Cart';

export async function getStaticPaths() {

    const paths = products.map((product) => ({
    params: {
    slug: product.slug,
    },
    }));
    return {
    paths,
    fallback: false,
};
}

export async function getStaticProps({ params }) {
    return {
    props: {
    product: products.find((p) => p.slug === params.slug),
    },
    };
}

function SelectQuantity(props) {
    const quantity = [...Array.from({ length: 10 })];
    return (
    <Select placeholder="Quantity"
    onChange={(event) =>props.onChange(event.target.value)}>
    {quantity.map((_, i) => (
    <option key={i + 1} value={i + 1}>
    {i + 1}
    </option>
    ))}
    </Select>
    );
    }
    export default function ProductPage({ product }) {

    const [quantity, setQuantity] = useState(0)
    const {items, setItems} = useContext(CartContext)

    const alreadyInCart = product.id in items;

    function addToCart() {
        setItems({ 
            ...items,
            [product.id] : quantity,
        })
    }

    return (
    <Flex rounded="xl" boxShadow="2xl" w="full" p="16"
    bgColor="white">
    <Image height="96" width="96" src={product.images[0].url}/>
    <Box ml="12" width="container.xs">
    <Text as="h1" fontSize="4xl" fontWeight="bold">
    {product.name}
    </Text>
    <Text lineHeight="none" fontSize="xl" my="3"
    fontWeight="bold" textColor="blue.500">
    €{product.price}
    </Text>
    <Text maxW="96" textAlign="justify" fontSize="sm">
    {product.description}
</Text>
<Divider my="6" />
<Grid gridTemplateColumns="2fr 1fr" gap="5"
alignItems="center">
<SelectQuantity onChange={(quantity) => {
    setQuantity(parseInt(quantity))
}} />
<Button colorScheme="blue" onClick = {addToCart}>
{alreadyInCart ? 'Update' : 'Add to cart'}
</Button>
</Grid>
</Box>
</Flex>
);
}