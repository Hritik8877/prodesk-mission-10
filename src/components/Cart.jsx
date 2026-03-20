import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  clearCart 
} from '../Redux/cartSlice';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount, totalQuantity } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-600">Start shopping to add items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart ({totalQuantity} items)</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {items.map(item => (
          <div key={item.id} className="flex items-center py-4 border-b last:border-b-0">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">₹{item.price.toFixed(2)} each</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <MinusIcon className="h-4 w-4" />
              </button>
              
              <span className="w-8 text-center">{item.quantity}</span>
              
              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
            
            <div className="w-24 text-right font-semibold">
              ₹{item.totalPrice.toFixed(2)}
            </div>
            
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        ))}
        
        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-end mt-4 space-x-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 cursor-pointer"
            >
              Clear Cart
            </button>
            
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;