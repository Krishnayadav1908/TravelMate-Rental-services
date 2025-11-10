import { Link } from "react-router-dom";

export default function Hero() {
    return (
      <>
        <div className="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-16">
          <div className="mt-16 lg:mt-28 max-w-xl text-center lg:text-left">
            <p className=" md:text-md font-semibold bg-orange-500 flex items-center justify-center lg:justify-start rounded-full w-fit mx-auto lg:mx-0 text-white px-4 py-2 mb-6 shadow-md">
              <img className="w-5 h-5 mr-2" src="/strr.png" alt="star" />
              Plan your trip now
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight">
              RENT A CAR,
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-sans mb-4">
              BIKE, OR BICYCLE
            </h1>
            <p className="md:text-2xl lg:text-3xl font-bold mb-4">
              Save <span className="text-orange-600">big</span> with our car
              rental
            </p>
  
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
              Explore the city at your own pace with our convenient rental
              options. Premium vehicles, competitive prices, and exceptional
              service.
            </p>
  
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 flex items-center gap-2 rounded-lg bg-orange-500 shadow-md shadow-orange-400 hover:shadow-lg hover:scale-105 transition text-white font-semibold cursor-pointer">
                <Link to='/vehicle' >Book Ride</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <button className="px-6 py-3 rounded-lg bg-black shadow-md hover:scale-105 hover:bg-gray-100 hover:shadow hover:text-black text-white font-semibold transition cursor-pointer">
                <Link to='/about' >Learn More</Link>
              </button>
            </div>
  
            <div className="grid grid-cols-2 gap-6 mt-13 mb-7 md:mb-31">
              <div className="flex items-center gap-3 bg-white hover:scale-105 rounded-xl shadow-md px-5 py-4 hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v6.75M3 13.5h18M3 13.5l2.25 6.75h13.5L21 13.5M6.75 19.5h.008v.008H6.75V19.5zm10.5 0h.008v.008h-.008V19.5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-green-600 text-xl font-bold">100+</p>
                  <p className="text-gray-600 text-sm">Vehicles</p>
                </div>
              </div>
  
              <div className="flex items-center gap-3 bg-white rounded-xl hover:scale-105 shadow-md px-5 py-4 hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 13.5V6.75A2.25 2.25 0 0015.75 4.5H8.25A2.25 2.25 0 006 6.75v6.75M18 13.5h.75A2.25 2.25 0 0121 15.75v1.5a2.25 2.25 0 01-2.25 2.25H18m0-6h-3.75m-6.75 0H6m12 6H6a2.25 2.25 0 01-2.25-2.25v-1.5A2.25 2.25 0 016 13.5h.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-green-600 text-xl font-bold">24/7</p>
                  <p className="text-gray-600 text-sm">Support</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="grid grid-cols-3 sm:flex sm:flex-row lg:flex-row justify-center items-center w-fit sm:gap-6 mb-4 md:mb-26 mt-0 md:mt-12 lg:ml-10 lg:mt-36 rounded-sm">
            <img
              src="/bik.png"
              alt="car & bike image"
              className="w-50 md:w-60 lg:w-70 lg:h-80 grid  md:overflow-hidden "
            />
            <img
              src="/car.png"
              alt="car & bike image"
              className="w-50 md:w-60 lg:w-96 lg:h-80"
            />
            <img
              src="/bycl.png"
              alt="car & bike image"
              className="w-50 md:w-60 lg:w-70 lg:h-80 object-contain overflow-hidden"
            />
          </div>
        </div>
      </>
    );
  }
  