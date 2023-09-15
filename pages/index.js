import React from 'react'
import { client } from "../lib/client"
import { Footerbannar, Herobannar, Prodcut } from '../components'

const Home = ({ products, bannardata }) => {
  return (
    <>
      <Herobannar herobannar={bannardata[1]} />
      {console.log(bannardata[0])}
      <div className='products-heading'>
        <h1 >
          Baset Selling Products
        </h1>
        <p>Speakers of many Varitions</p>
      </div>
      <div className='products-container'>
        {/* put props here */}
        {products?.map((product) => <Prodcut product={product} key={product._id}/>)}
      </div>
      <Footerbannar Footerbannar={bannardata && bannardata[0]} />
    </>
  )
}
// fetch using async function to implement this function first with using getserversideprops
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const querybannar = '*[_type == "bannar"]';
  const bannardata = await client.fetch(querybannar)

  return {
    props: {
      products, bannardata
    }
  }
}
export default Home;