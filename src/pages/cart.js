import { useContext, useEffect, useState } from 'react';
import { Box, Flex, Button, Divider, Text } from '@chakra-ui/react';
import CartContext from '@/state/Cart';
import { UseAxios } from 'axios-hooks';
import apiURL from '@/apiURL';
import Link from 'next/link';

export default function Cart() {

    const { items } = useContext(CartContext)
    const [products, setProducts] = useState([])
    const hasProducts = Object.keys(items).length
    // http get request that returns the products

    const getProducts = async () => {
        if(!hasProducts) return ;
        //http request
        const response = await fetch(apiURL+'api/products/'+JSON.stringify(Object.keys(items)),{
        method: "GET",
    }
        );
        const jsonData = await response.json();
        setProducts(jsonData.data)
    }

    useEffect(() => {getProducts()},[JSON.stringify(products)])

    function getTotal() {
        if (!products.length) return 0;
        return Object.keys(items)
        .map(
        (id) => {
        products.find((product) => product.id == id).price
        * (items[id] / 100) // Stripe requires the prices to be
        // integers (i.e., €4.99 should be
        // written as 499). That's why
        // we need to divide by 100 the prices
        // we get from GraphCMS, which are
        // already in the correct
        // Stripe format
    }).reduce((x, y) => x + y)
        //.toFixed(2);
        }

        return (
            <Box
            rounded="xl"
            boxShadow="2xl"
            w="container.lg"
            p="16"
            bgColor="white">
            <Text as="h1" fontSize="2xl" fontWeight="bold">
            Cart
            </Text>
            <Divider my="10" />
            <Box>
            {!hasProducts ? (
            <Text>The cart is empty.</Text>
            ) : (
            <>
            {products.map((product) => (
            <Flex
            key={product.id}
            justifyContent="space-between"
            mb="4">
            <Box>
            <Link href={`/product/${product.slug}`} passHref>
            <Text
            as="a"
            fontWeight="bold"
            _hover={{textDecoration: 'underline',
            color: 'blue.500' }}>
            {product.name}
            <Text as="span" color="gray.500">
            {''}
            x{items[product.id]}
            </Text>
            </Text>
            </Link>
            </Box>
            <Box>
            €{(items[product.id] *
            (product.price / 100)).toFixed(2)}
            </Box>
            </Flex>
            ))}
            <Divider my="10" />
            <Flex
            alignItems="center"
            justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold">
            Total: €{getTotal()}
            </Text>
            <Button colorScheme="blue"> Pay now </Button>
            </Flex>
            </>
            )}
            </Box>
            </Box>
            );
}
