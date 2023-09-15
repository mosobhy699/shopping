"use client";
export const getLocalCartData = () => {
    if (typeof window !== "undefined") {
        let newCarData = localStorage.getItem("cartItems");
        if (newCarData === "") {
            return [];
        } else {
            return JSON.parse(newCarData)
        }
    }
}
export const getLocalQuantityData = () => {
    if (typeof window !== "undefined") {
        let newQuantityData = localStorage.getItem("totalQuantity");
        if (newQuantityData === 0) {
            return 0;
        } else {
            return JSON.parse(newQuantityData)
        }
    }
}
export const getLocalPriceData = () => {
    if (typeof window !== "undefined") {
        let newPriceData = localStorage.getItem("totalPrice");
        if (newPriceData === 0) {
            return 0;
        } else {
            return JSON.parse(newPriceData)
        }
    }
}