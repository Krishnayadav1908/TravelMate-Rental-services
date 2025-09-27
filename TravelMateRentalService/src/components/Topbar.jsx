import { useState } from "react";
import { Link } from 'react-router-dom';

function Topbar(){
    const [isOpen, setIsOpen] = useState(false);
    
    return <>
       <header className="mt-0 bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center h-17 px-1">
        <div className="h-16 flex items-center">
            <div className=""> <Link to='/'>
                <img src="/car.jpg" className=" ml-5 bg-white rounded h-15 flex " alt="car image"/>
            </Link>
            </div>
            <div className="cursor-pointer">
               <p className="pl-1 font-semibold text-xl"><Link to='/'>TravelMate</Link></p>
               <p className="pl-1 font-semibold text-sm text-orange-600 "><Link to='/'>Rental service</Link></p>
            </div>
        </div>

        <nav className="hidden md:flex  lg:space-x-10 md:space-x-7 font-semibold">
          <Link to='/' className="hover:text-orange-600">Home</Link>
          <Link to='/about' className="hover:text-orange-600">About</Link>
          <Link to='/model' className="hover:text-orange-600">Vehicle Models</Link>
          <Link to='/contact' className="hover:text-orange-600">Contact</Link>
        </nav>

        <div className="md:flex hidden h-14 items-center space-x-4  ">
            <ul className="flex gap-7">
            <Link className="hover:text-orange-600 py-2 font-semibold">Signin</Link>
          <Link
            to='/register'
            className="font-semibold ml-4 mr-7 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 shadow-sm hover:shadow-md"
          >
            Register
          </Link>
            </ul>
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex justify-end p-2 text-gray-700 focus:outline-none"
        >
          ☰
        </button>
        </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <nav className="flex flex-col space-y-2 font-semibold">
            <Link to='/' className="hover:text-orange-600">Home</Link>
            <Link to='/about' className="hover:text-orange-600">About</Link>
            <Link to='/model' className="hover:text-orange-600">Vehicle Models</Link>
            <Link to='/contact' className="hover:text-orange-600">Contact</Link>
          </nav>
          <div className="flex flex-col space-y-2">
            <Link className="hover:text-orange-600 font-semibold">Signin</Link>
            <Link
              to='/register'
              className="font-semibold px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500 shadow-sm hover:shadow-md text-center"
            >
              Register
            </Link>
          </div>
        </div>
      )}
      </header>
    </>
}

export default Topbar;