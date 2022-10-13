import React from 'react'

const Blog = () => {
    return (
      <div class="pt-12 flex flex-row flex-wrap md:justify-around bg-gray-200">
        <div
          class="flex items-center w-full sm:w-9/12 lg:w-1/3 lg:mb-12 bg-cover bg-no-repeat rounded-lg"
          style={{
            backgroundImage:
              "url(" +
              "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/04/mars_landscape/21916769-2-eng-GB/Mars_landscape_pillars.jpg" +
              ")",
            
          }}
        >
          <div class="w-full rounded-lg bg-black opacity-75">
            <div class="w-full bg-red-700 p-2">
              <h4 class="font-bold text-1xl text-center text-white">
                Today's Weather
              </h4>
            </div>
            <p class="pt-2 pl-2 text-1xl font-semibold text-white">
              Elon City, MARS
            </p>
            <p class="pl-2 text-1xl font-semibold text-white">
              Mon May 23 2155 08:02:21 MT-0800 (Mars Standard Time)
            </p>
            <div class="m-4 pb-3 flex flex-row justify-between">
              <div class="p-3 flex flex-col text-white">
                <i class="fas fa-cloud-sun text-gray-200 pl-6 text-2xl font-semibold"></i>
                <p class="text-lg font-medium">
                  33<span>&#8457;</span>
                </p>
                <p class="text-lg font-medium">High</p>
              </div>
              <div class="p-3 flex flex-col text-white">
                <i class="fas fa-cloud text-gray-200 pl-6 text-2xl font-semibold"></i>
                <p class="text-lg font-medium">
                  -91<span>&#8457;</span>
                </p>
                <p class="text-lg font-medium">Low</p>
              </div>
              <div class="flex flex-col text-lg text-white font-medium">
                <p>Feels like: 35&#8457;</p>
                <p>Precipitation: 0%</p>
                <p>Humidity: 0%</p>
                <p>Wind: 5 MPH</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-col mt-10">
          <div class="w-full lg:max-w-lg border-b border-gray-800">
            <h2 class="mb-6 text-2xl lg:text-3xl text-black font-serif font-medium text-center">
              Latest News
            </h2>
            <div class="flex justify-evenly pl-3 py-3">
              <div>
                <img
                  src="https://images.pexels.com/photos/9283/landscape-nature-sky-blue.jpg?cs=srgb&dl=pexels-skitterphoto-9283.jpg&fm=jpg"
                  alt=""
                  className="object-contain w-32 mr-2"
                />
              </div>
              <div class="flex flex-col pl-2">
                <p class="font-semibold text-xs md:text-sm">May 23rd, 2155</p>
                <p class="w-64 text-md text-orange-600 font-bold hover:underline cursor-pointer break-words">
                  Mars might be losing its classic red look thanks to more trees
                </p>
              </div>
            </div>
          </div>

          <div class="w-full lg:max-w-lg border-b border-gray-800">
            <div class="flex justify-evenly pl-3 py-3">
              <div>
                <img
                  src="https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                  className="object-contain w-32 mr-2"
                />
              </div>
              <div class="flex flex-col pl-2">
                <p class="font-semibold text-xs md:text-sm">May 22nd, 2155</p>
                <p class="w-64 text-md text-orange-600 font-bold hover:underline cursor-pointer break-words">
                  A newly discovered industrial pollutant is a possible threat
                  to Elon City
                </p>
              </div>
            </div>
          </div>

          <div class="w-full lg:max-w-lg border-b border-gray-800">
            <div class="flex justify-evenly pl-3 py-3">
              <div>
                <img
                  src="https://images.pexels.com/photos/3273851/pexels-photo-3273851.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                  className="object-contain w-32 mr-2"
                />
              </div>
              <div class="flex flex-col pl-2">
                <p class="font-semibold text-xs md:text-sm">May 19th, 2155</p>
                <p class="w-64 text-md text-orange-600 font-bold hover:underline cursor-pointer break-words">
                  Are children born on Mars considered Martians?
                </p>
              </div>
            </div>
          </div>

          <div class="w-full lg:max-w-lg border-b border-gray-800">
            <div class="flex justify-evenly pl-3 py-3">
              <div>
                <img
                  src="https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                  className="object-contain w-32 mr-2"
                />
              </div>
              <div class="flex flex-col pl-2">
                <p class="font-semibold text-xs md:text-sm">May 19th, 2155</p>
                <p class="w-64 text-md text-orange-600 font-bold hover:underline cursor-pointer break-words">
                  A recently proposed tax bill has garnered controversy for
                  requiring Mars citizens to pay for air
                </p>
              </div>
            </div>
          </div>

          <h2 class="ml-6 mt-8 mb-8 text-2xl font-serif font-medium hover:underline cursor-pointer">
            <span>
              More News<i class="fas fa-angle-right pt-1 ml-2"></i>
            </span>
          </h2>
        </div>
      </div>
    );
}

export default Blog