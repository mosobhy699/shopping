import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { urlFor } from '../../lib/client'
import { client } from '../../lib/client'
import Product from '../../components/Product';
import { useState } from 'react';
// as you see there is none function called useStateContext function in contextState file so we will made this special function which help us to grabb the state and use in global for entire application
import { useStateContext } from '@/context/StateContext';
const ProductDetails = ({ product, products }) => {
    // destructuring of product
    const { name, image, details, price, details1 } = product;
    const [index, setindex] = useState(0)
    // destruction values from useStateContext
    const { decqty, incqty, qty, onAdd, setshowCart } = useStateContext();
    const handleBuyNow = () => {
        onAdd(product, qty);
        setshowCart(true)
    }
    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    {/* how to made small image and change state of index on mouseenter */}
                    <div className='product-detail-image'>
                        <img src={urlFor(image[index])} className='product-detail-image' />
                    </div>
                    {/* i return to index of image */}
                    <div className='small-images-container'>
                        {(image).map((image, i) =>
                            <img
                                key={i}
                                src={urlFor(image)}
                                className={(i == index) ? "small-image selected-image" : "small-image"}
                                onMouseEnter={() => setindex(i)}
                            />)}
                    </div>
                </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details:</h4>
                    <p>{details1}</p>
                    <p className='price'>{price}$</p>
                    <div className='quantity'>
                        <h3>Quatity:</h3>
                        <p className='quantity-desc'>
                            <span className='minus' onClick={decqty}><AiOutlineMinus /></span>
                            <span className='num'>{qty}</span>
                            <span className='plus' onClick={incqty}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className='buttons'>
                        <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)} style={{ marginRight: "10px" }}>Add To Card</button>
                        <button type='button' className='buy-now' onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='maylike-product-wrapper'>
                <h2>you may also like</h2>
                {/* we use marquee classname which refer to many divs scrolling in x-axis */}
                {/* we fetch all products and use Product component for this SCROLL */}
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map((item) => {
                            return (<Product key={item._id} product={item} />

                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


// beacuse its dunamic page depend on slug_current so we use params which return object and put the name of file 
// must use get statis path function in dynamic pages
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    return {
        props: { products, product }
    }
}
export default ProductDetails;