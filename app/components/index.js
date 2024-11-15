// app/landing/page.js
'use client'
import Link from 'next/link';
import React from 'react';
import Explore from './/recipiofday';
import { Typewriter } from 'react-simple-typewriter'

export default function LandingPage() {
  
  return (
    <div className="min-h-screen bg-[#DDFFD0]">
      <header className="bg-[#E3FACE] h-[120px] flex items-center justify-between px-5">
        <div className="text-6xl font-bold text-green-600 font-sans">Nutribite</div>
        <nav className="flex items-center space-x-12">
          <Link href="/auth/recipe">
          <button className="text-black text-2xl hover:text-green-700">Recipes</button>
          </Link>
          <Link href="/auth/nutrition">
          <button className="text-black text-2xl hover:text-green-700">Nutrition Analysis</button>
          </Link>
          <Link href="/auth/famous">
          <button className="text-black text-2xl hover:text-green-700">Famous Food</button>
          </Link>
          <Link href="/auth/aboutus">
          <button className="text-black text-2xl hover:text-green-700">About Us</button>
          </Link>
        </nav>
        <div className="flex items-center space-x-6">
          <div className="text-black text-2xl">
            <i className="fa-regular fa-user"></i>
          </div>

          <Link href="/auth/signup">
            <button className="bg-green-600 text-white px-9 py-3 rounded-full hover:bg-green-700 transition">
              Sign in
            </button>
          </Link>
        </div>
      </header>

      <main className="flex flex-col bg-cover items-center justify-center text-center min-h-[calc(100vh-120px)] " style={{
         // Path from the public folder
      }}>
        <h1 className="text-4xl font-bold text-black leading-snug">
        <Typewriter words={['What would you like to Cook today?','Do you even know what you are going to Cook']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
             />
        
           
          
        </h1>
        <p className="text-lg text-black mt-6">
          Our job is to fill your tummy with Genuine Food.
        </p>
        <div className="flex space-x-20 mt-10">
          <a
            href="#"
            className="hover:text-black text-2xl text-green-700 transition"
          >
            Explore More
          </a>
          <a
            href="#"
            className="hover:text-black text-2xl  text-green-700 transition"
          >
            New Suggestion
          </a>
        </div>
        
      <div className='mt-20'>
        <Explore />
      </div>
        
      </main>
      <footer className="relative bg-green-800 text-white">
      
      
      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-10 px-6">
        <h2 className="text-2xl font-bold mb-4">Nutribite</h2>
        <p className="text-center text-sm mb-6">
          Serving delicious recipes and nutrition tips. Your ultimate food companion!
        </p>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        <p className="text-xs mt-6">© 2024 Nutribite. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
}
