import { Container } from 'react-bootstrap';
import { ProductContext } from '../../App';
import FavouriteCard from '../../components/favouriteCard';
import Layout from '../../components/layout/layout'
import React, { useContext } from 'react'

const Favourite = () => {
  
  const {state: {favouriteProducts}, dispatch} = useContext(ProductContext);

  return (
    <Layout>
      <Container>
      {favouriteProducts.length !== 0 ? favouriteProducts.map(el => <FavouriteCard key={el.id} {...el}/>) : "Bo'sh" }
    </Container>
    </Layout>
  )
}

export default Favourite;