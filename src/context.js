import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({
	items: [],
	getItemQuantity: () => {},
	addToCart: () => {},
	removeFromCart: () => {},
	deleteCart: () => {},
	totalSum: () => {}
});

export const CartProvider = ({ children }) => {
	const [ cartItems, setCartItems ] = useState([]);

	return <CartContext.Provider value={{ cartItems }}>{children}</CartContext.Provider>;
};

//custom hook
export const useGlobalContext = () => useContext(CartContext);
