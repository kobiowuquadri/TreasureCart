
import React, { createContext, useState } from 'react';
import  pdata    from '../Products/Pdata'
import Ppimage from '../Product Page/Ppdata'

const getDefaultCart = () => {

    let cart = {}
    for (let i = 0; i < pdata.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const ProductImageContext = createContext(null);

export const ProductImageProvider = (props) => {
  const [productImage, setProductImage] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setProductImage((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeFromCart = (itemId) => {
    setProductImage((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
  }

  const contextValue = {productImage, addToCart, removeFromCart}

  return (
    <ProductImageContext.Provider value={contextValue}>
        {props.children}
    </ProductImageContext.Provider>
  );
};
export default ProductImageContext;