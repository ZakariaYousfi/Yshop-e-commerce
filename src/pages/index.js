
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import { Grid } from '@chakra-ui/layout';
import ProductCard from '../components/ProductCard';
import products from '../products'


export default function Home(props) {
  return (
    <>
         <Grid gridTemplateColumns="repeat(4, 1fr)" gap="5">
         {products.map((product) => (
          <ProductCard key={product.id} {...product} />
          ))}
        </Grid>
    </>
  )
}
