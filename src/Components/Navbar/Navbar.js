import React from 'react'
function Navbar() {
  return (   
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
            <img src="https://img.icons8.com/parakeet/96/000000/film-reel.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">M---D</span>
        </a>
    </div>
    </nav>
  )
}

export default Navbar