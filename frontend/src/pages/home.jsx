import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div>
    <div className='flex flex-col items-center gap-4 justify-center min-w-96 mx-auto p-6 w-full'>
      {/* <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> */}
      <Navbar />
        <h1 className='text-4xl font-semibold text-center text-gray-300'>
          Welcome to <span className='text-blue-500'>Teboursouk Delivery</span>
        </h1>
        <p className='text-center text-gray-300 mt-4'>
          Delivering your favorite items quickly and reliably.
        </p>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='p-4 rounded-lg shadow-md bg-gray-800'>
            <h2 className='text-2xl font-semibold text-center text-gray-300'>
              Order Food
            </h2>
            <p className='text-center text-gray-300 mt-2'>
              Browse and order from a variety of restaurants.
            </p>
            <button className='btn btn-block btn-sm mt-4'>Order Now</button>
          </div>
          <div className='p-4 rounded-lg shadow-md bg-gray-800'>
            <h2 className='text-2xl font-semibold text-center text-gray-300'>
              Grocery Delivery
            </h2>
            <p className='text-center text-gray-300 mt-2'>
              Get groceries delivered to your door.
            </p>
            <button className='btn btn-block btn-sm mt-4'>Shop Now</button>
          </div>
          <div className='p-4 rounded-lg shadow-md bg-gray-800'>
            <h2 className='text-2xl font-semibold text-center text-gray-300'>
              Package Delivery
            </h2>
            <p className='text-center text-gray-300 mt-2'>
              Send and receive packages with ease.
            </p>
            <button className='btn btn-block btn-sm mt-4 disabled'>Coming soon...</button>
          </div>
        </div>

        <div className='mt-8'>
          <h2 className='text-2xl font-semibold text-center text-gray-300'>
            Why Choose Us?
          </h2>
          <ul className='mt-4 list-disc list-inside text-gray-300'>
            <li>Fast and reliable delivery</li>
            <li>Wide range of services</li>
            <li>Easy to use platform</li>
            <li>Customer satisfaction guaranteed</li>
          </ul>
        </div>
      {/* </div> */}
      <Footer />
    </div>
    </div>
  );
}

export default Home;
