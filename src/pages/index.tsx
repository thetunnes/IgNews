import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss' 


interface HomeProps {
  product: {
    priceId: string,
    amount: string,
  }
}

export default function HomeComponent({ product }: HomeProps) {


  return (
    <>
      <Head>
        <title>Home | Ig.news</title>  
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>

          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>

          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton />
        </section>

        <img  src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const Home = React.memo(HomeComponent, (prev, next) => {
  return Object.is(next.product, prev.product)
})

export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1Jf9RKDQklzWbSpao3MEJFZU')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format((price.unit_amount / 100)),

  }
  return {

    props: {
      product
    },
    revalidate: 60 * 60 * 24, //Validação para em 24 hours a página ser renderizada dnv

  }
}
