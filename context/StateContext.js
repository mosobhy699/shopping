import { useState, useEffect, useContext, createContext } from "react";
import dynamic from "next/dynamic";
// toast is the pop-up Notification will be apper when we add something to the cart , remove it or finish the order
import { toast } from "react-hot-toast";
import { getLocalCartData, getLocalPriceData, getLocalQuantityData } from "./local";
// import dynamic to prevent Resolving Hydration
// first step use createcontext hook
const Context = createContext();
// use function StateContext and pass prop {children} so when you wrap some thing inside this function will be children of it
/* <StateContext>
 {children}
</StateContext>
use it to effect on entire appliction in app.js
*/
export const StateContext = ({ children }) => {
    // Get all data from local storage
    // 
    // const qtyFromStorage = JSON.parse(window.localStorage.getItem("qty"));
    // put inside the context function the states


    const [showCart, setshowCart] = useState(false)
    // items start from empty array
    const [cartItems, setcartItems] = useState([])
    const [totalPrice, settotalPrice] = useState(0)
    const [totalQuantity, settotalQuantity] = useState(0)
    const [qty, setqty] = useState(1)

    let foundproduct;
    let index;

    // useEffect(() => {
    //     const cartItemsFromStorage = JSON.parse(window.localStorage.getItem("cartItems"));
    //     const totalPriceFromStorage = JSON.parse(window.localStorage.getItem("totalPrice"));
    //     const totalQuantityFromStorage = JSON.parse(window.localStorage.getItem("totalQuantity"));
      
    //     if (typeof window !== "undefined") {
    //         // set local storage data
    //         setcartItems(cartItemsFromStorage)
    //         settotalPrice(totalPriceFromStorage)
    //         settotalQuantity(totalQuantityFromStorage)
    //     }

    // }, [])
    // made function use it to increase the number of quantity when you click +
    const incqty = () => {
        setqty((perv) => perv + 1)
    }
    // made function use it to decrease the number of quantity when you click -
    const decqty = () => {
        setqty((perv) => {
            // to made perv quantity not less than 1
            if (perv - 1 < 1) {
                return 1;
            } else {
                return perv - 1
            }
        })
    }
    //important
    // we use this function to the cart component if the user add the same product what will happen 
    const onAdd = (product, quantity) => {
        //order the items in card
        index = cartItems.length;
        // if (typeof window !== "undefined") {
        //     window.localStorage.setItem("cartItems", JSON.stringify(cartItems))
        //     window.localStorage.setItem("totalPrice", JSON.stringify(totalPrice))
        //     window.localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity))
        // }
        // we use this check to when we add same product not be as anew product but incearse the quantity in same product
        const checkProductInCart = cartItems.find((item) => item._id === product._id)
        settotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        settotalQuantity((pervtotalquantity) => pervtotalquantity + quantity)

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    // this code increase the quantity of product without add another item of same product
                    quantity: cartProduct.quantity + quantity
                }
            })
            setcartItems(updatedCartItems)
            // if user add another product what will happen
        } else {
            product.quantity = quantity;
            product.orderValue = index;
            setcartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added to the Cart`)
        console.log(quantity)
    }
    const onRemove = (product) => {

        foundproduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        index = newCartItems.length
        // order the items when remove to be the same
        newCartItems.map((item) => {
            if (item.orderValue >= foundproduct.orderValue) item.orderValue -= 1
        })
        settotalPrice((prevTotalPrice) => prevTotalPrice - foundproduct.price * foundproduct.quantity);
        settotalQuantity(prevTotalQuantities => prevTotalQuantities - foundproduct.quantity);
        setcartItems(newCartItems);

    }

    const toggleCartItemQuantity = (id, value) => {
        foundproduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id)
        const newCartItems = cartItems.filter((item) => item._id !== id)
        if (value === "inc") {

            setcartItems([...newCartItems, { ...foundproduct, quantity: foundproduct.quantity + 1 }])
            settotalPrice((prevtotalprice) => prevtotalprice + foundproduct.price)
            settotalQuantity((prevtotalquatity) => prevtotalquatity + 1)
            /* foundproduct.quantity += 1
            wrong in react it's mutaute the state cartItems[index] = foundproduct;*/
        } else if (value === "dec") {
            if (foundproduct.quantity > 1) {
                setcartItems([...newCartItems, { ...foundproduct, quantity: foundproduct.quantity - 1 }])
                settotalPrice((prevtotalprice) => prevtotalprice - foundproduct.price)
                settotalQuantity((prevtotalquatity) => prevtotalquatity - 1)
            }
        }
    }


    // use return Context.Provider and put inside it children
    return (
        // must use value object and pass through it all values (initial values) across our entire application
        <>
            <Context.Provider
                value={{
                    showCart,
                    setshowCart,
                    cartItems,
                    totalPrice,
                    totalQuantity,
                    qty,
                    incqty,
                    decqty,
                    onAdd,
                    toggleCartItemQuantity,
                    onRemove,
                    setcartItems,
                    settotalPrice,
                    settotalQuantity,
                    setshowCart
                }}
            >
                {children}
            </Context.Provider></>
    )
}
// then we use Context variable which made from CreateContext and then made this special function and useContext(Context)
export const useStateContext = () => useContext(Context)
