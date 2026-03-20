import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={() => {}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Continue Shopping
        </Link>
        
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;