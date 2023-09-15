import React from 'react'
import { useRef } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { toast } from 'react-hot-toast'
import { urlFor } from '@/lib/client'
import { useStateContext } from '@/context/StateContext'
import Link from 'next/link'
import getStripe from '@/lib/getstripe'

const Card = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantity, cartItems, setshowCart, toggleCartItemQuantity, onRemove } = useStateContext();
    const handleCheckout = async () => {
        const stripe = await getStripe();
        // here we are linked api/stripe with this handle function when i click in it made fetch POST
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading('Redirecting...');
        // new code to use stripe without sessionId
        window.location.replace(data.url)
    }

    return (
        <div className='cart-wrapper' ref={cartRef}>
            <div className='cart-container'>
                <button
                    type='button'
                    className='cart-heading'
                    onClick={() => setshowCart(false)}
                >
                    <AiOutlineLeft />
                    <span className='heading'>Your Card</span>
                    <span className='cart-num-items'>{totalQuantity} items</span>
                </button>
                {cartItems.length < 1 && (
                    <div className='empty-cart'>
                        <AiOutlineShopping size={150} />
                        <h3>Your Shopping bag is Empty</h3>
                        <Link href='/'>
                            <button
                                type='button'
                                onClick={() => setshowCart(false)}
                                className='btn'
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}
                <div className='product-container'>
                    {/* order items in cart */}
                    {cartItems.length >= 1 && cartItems.sort((a, b) => a.orderValue > b.orderValue ? 1 : -1)
                        .map((item) => (
                            <div className='product' key={item._id}>
                                <img src={urlFor(item?.image[0])} className='cart-product-image' />
                                <div className='item-desc'>
                                    <div className='flex top'>
                                        <h5>{item.name}</h5>
                                        <h4>${item.price}</h4>

                                    </div>
                                    <div className='flex bottom'>
                                        <p className='quantity-desc'>
                                            <span className='minus' onClick={() => toggleCartItemQuantity(item._id, "dec")}><AiOutlineMinus /></span>
                                            {console.log(item.quantity)}
                                            <span className='num' >{item.quantity}</span>
                                            <span className='plus' onClick={() => toggleCartItemQuantity(item._id, "inc")}><AiOutlinePlus /></span>
                                        </p>
                                        <button
                                            type='button'
                                            className='remove-item'
                                            onClick={() => onRemove(item)}
                                        >
                                            <TiDeleteOutline />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className='cart-bottom'>
                        <div className='total'>
                            <h3>SubTotal:</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className='btn-container'>
                            <button type='button' className='btn' onClick={handleCheckout}>Pay With Stripe</button>
                        </div>
                    </div>

                )
                }
            </div>
        </div>
    )
}

export default Card