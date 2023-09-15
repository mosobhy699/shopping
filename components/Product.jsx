import React from 'react'
import { urlFor } from '@/lib/client'
import Link from 'next/link'
const Product = ({ product }) => {
    return (
        <div>
            <Link href={`/product/${product.slug.current}`}>
                <div className='product-card'>
                    <img src={urlFor(product.image[0])} height={250} width={250} className='product-image'/>
                    <p className='product-name'>{product.details}</p>
                    <span className='product-price'>{`${product.price}$`}</span>
                </div>
            </Link>
        </div >
    )
}

export default Product