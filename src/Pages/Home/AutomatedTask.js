import React from 'react';

const AutomatedTask = () => {
    return (
      <div>
        <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Automated Tasks
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Save time and money with our revolutionary services. We are the
              leaders in the industry.
            </p>
            <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>{" "}
                Automated task management workflow
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>{" "}
                Detailed analytics for your data
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>{" "}
                Some awesome integrations
              </li>
            </ul>
          </div>

          <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
              src="https://cdn.devdojo.com/images/december2020/settings.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default AutomatedTask;