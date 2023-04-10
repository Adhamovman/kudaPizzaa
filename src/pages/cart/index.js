import React, { useContext } from 'react'
import Layout from '../../components/layout/layout';
import { ProductContext } from '../../App';
import { Container } from 'react-bootstrap';
import FavouriteCard from '../../components/favouriteCard';


const Cart = () => {
  const {state: {cartProducts}, dispatch} = useContext(ProductContext);

  return (
    <Layout>
   <Container>
   {cartProducts.length !== 0 ? cartProducts.map(el => <FavouriteCard key={el.id} {...el}/>) : "Bo'sh" }
   </Container>
    </Layout>
  )
}

export default Cart;