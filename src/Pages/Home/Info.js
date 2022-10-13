import React from 'react';
const Info = () => {

    return (
      <div
        class="w-full flex flex-wrap md:justify-between pt-10 pb-6"
        data-aos="fade-in"
      >
        <div class="lg:pt-12 pt-6 w-full md:w-4/12 lg:max-w-lg px-4 text-center">
          <div class="relative flex flex-col min-w-0 break-words bg-gray-200 w-full mb-2 shadow-lg rounded-lg">
            <div class="px-4 py-5 flex-auto">
              <div class="p-2 text-center text-5xl inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400">
                <i class="fas fa-space-shuttle text-gray-800 transform -rotate-90"></i>
              </div>
              <h4 class="text-xl font-semibold">Flight Time</h4>
              <p class="mt-2 mb-4 text-gray-600">
                Thanks to our state-of-the-art hyper sleep system our 30 day
                flight feels like 30 seconds. Go to sleep on earth and wake up
                in a new landscape.
              </p>
            </div>
          </div>
        </div>

        <div class="lg:pt-12 pt-6 w-full md:w-4/12 lg:max-w-lg px-4 text-center">
          <div class="flex flex-col min-w-0 break-words bg-gray-200 w-full mb-2 shadow-lg rounded-lg">
            <div class="px-4 py-5 flex-auto">
              <div class="p-2 text-center text-5xl inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400">
                <i class="fas fa-biking"></i>
              </div>
              <h4 class="text-xl font-semibold">Amenities</h4>
              <p class="mt-2 mb-4 text-gray-600">
                Enjoy all of the comforts of Earth at Elon City. As our
                terraforming projects continue more of the planet will be
                available for fun and exploration.
              </p>
            </div>
          </div>
        </div>

        <div class="lg:pt-12 pt-6 w-full md:w-4/12 lg:max-w-lg px-4 text-center">
          <div class="relative flex flex-col min-w-0 break-words bg-gray-200 w-full mb-2 shadow-lg rounded-lg">
            <div class="px-4 py-5 flex-auto">
              <div class="p-2 text-center text-5xl inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400">
                <i class="fas fa-house-user"></i>
              </div>
              <h4 class="text-xl font-semibold">Land Availability</h4>
              <p class="mt-2 mb-4 text-gray-600">
                As technology keeps improving so does your prospects for land
                ownership. Over 20% of Mars is available for ownership at this
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Info;