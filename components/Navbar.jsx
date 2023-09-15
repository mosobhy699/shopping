import Link from 'next/link'
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '@/context/StateContext'
import dynamic from 'next/dynamic'
import Card from './Card'
const Navbar = () => {
    const { showCart, setshowCart, totalQuantity } = useStateContext();
    return (
        <div className='navbar-container'>
            <Link href={"/"}>
                <p className='logo'>MOSOBHY STORE</p>
            </Link>
            <button type='button' className='cart-icon' onClick={() => setshowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{totalQuantity}</span>
            </button>
            {/* WE USE CONDITION if showcart ==true show the compnent if showcart==false don't render */}
            {showCart && <Card />}
        </div>

    )
}

export default Navbar;
