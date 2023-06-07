import '@/styles/globals.css'
import {ChakraProvider, Flex, Box } from '@chakra-ui/react'
import Navbar from '../components/NavBar'
import CartContext from '@/state/Cart'
import UserContext from '@/state/User'
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  
  const [items,setItems] = useState({});
  const [info,setInfo] = useState({})
  console.log(Component)
  return <ChakraProvider>
                      <UserContext.Provider value = {{info, setInfo}}>                      
                      <CartContext.Provider value = {{ items, setItems }}>
                          <Flex w="full" minH="100vh" bgColor="gray.100">
                          <Navbar/> 
                            <Box maxW="70vw" m="auto">
                              <Component {...pageProps} />
                            </Box>
                          </Flex>
                        </CartContext.Provider>     
                        </UserContext.Provider>   
        </ChakraProvider>
}
