import React from 'react';
import './Impress.css'
const Impress = () => {
    return (
      <div className='mt-10'>
        <section class="call-to-action">
          <div class="container mx-auto px-6 text-center py-10">
            <h2 class="mb-6 text-4xl font-bold text-center text-white">
              Impress them all!
            </h2>
            <h3 class="my-4 text-2xl text-white">
              Build the next generation of design experiences
            </h3>
            <button class="transform hover:scale-110 transition duration-300 ease-in-out bg-white font-bold rounded-full mt-6 py-6 px-8 shadow-lg uppercase tracking-wider">
              Get Started
            </button>
          </div>
        </section>
      </div>
    );
};

export default Impress;