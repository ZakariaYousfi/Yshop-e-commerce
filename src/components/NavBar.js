
import Link from 'next/link';
import { Flex, Box, Button, Text, Image } from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';
import {useContext} from 'react'
import CartContext from '@/state/Cart';
import UserContext from '@/state/User';

export default function NavBar() {

const {items} = useContext(CartContext)
const {info} = useContext(UserContext)

const itemsCount = Object
                    .values(items)
                    .reduce((x,y)=>x+y,0)
return (
<Box position="fixed" top={0} left={0} w="full"
bgColor="white" boxShadow="md">
<Flex width="container.xl" m="auto" p="5"
justifyContent="space-between">
<Link href="/" passHref>
<Image src='https://i.imgur.com/UIeEkqh.png' alt='Yshop' width = '100px' height = '50px' />
{//<Text textColor="blue.800" fontWeight="bold" fontSize="2xl"> Shop </Text>
}
</Link>
<Box>
<Link href="/about" passHref>
<Text textColor="blue.800" fontWeight="bold"
fontSize="2xl" >
About us
</Text>
</Link>
</Box>
<Box>
<Link href="/login" passHref>
<Text textColor="blue.800" fontWeight="bold"
fontSize="2xl" >
{info.id ? info.username : 'Login/Signup'}
</Text>
</Link>
</Box>
<Box>
<Link href="/cart" passHref>
<Button>
<MdShoppingCart />
<Text ml = "3">{itemsCount}</Text>
</Button>
</Link>
</Box>
</Flex>
</Box>
);
}