import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Card from '../components/card';

const foodItems = [
  { id: 1, name: 'Pizza', price: 10 },
  { id: 2, name: 'Burger', price: 7 },
  { id: 3, name: 'Pasta', price: 12 },
  // Add more items as needed
];

const OrderFood = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
    <div className='flex flex-col items-center gap-4 justify-center min-w-96 mx-auto p-6 w-full'>
      {/* <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> */}
      <Navbar />
        <h1 className='text-4xl font-semibold text-center text-gray-300'>
          Choose Your food for Today with <span className='text-blue-500'>Teboursouk Delivery</span>
        </h1>
        <p className='text-center text-gray-300 mt-4'>
          Delivering your favorite items quickly and reliably.
        </p>
        <div className='flex items-center justify-center gap-3 flex-wrap'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      <Footer />
    </div>
    </div>
  );
};

export default OrderFood;
