// app/landing/page.js
import Link from 'next/link';
import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#DDFFD0]">
      <header className="bg-[#E3FACE] h-[120px] flex items-center justify-between px-5">
        <div className="text-6xl font-bold text-green-600 font-sans">Nutribite</div>
        <nav className="flex items-center space-x-12">
          <a href="#" className="text-black text-lg hover:underline">
            Recipe
          </a>
          <a href="#" className="text-black text-lg hover:underline">
            Nutrition Analysis
          </a>
          <a href="#" className="text-black text-lg hover:underline">
            Famous Food
          </a>
          <a href="#" className="text-black text-lg hover:underline">
            About Us
          </a>
        </nav>
        <div className="flex items-center space-x-6">
          <div className="text-black text-2xl">
            <i className="fa-regular fa-user"></i>
          </div>

          <Link href="/auth/signup">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Sign in
            </button>
          </Link>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-120px)]">
        <h1 className="text-4xl font-bold text-black leading-snug">
          What <br />
          Would You Like <br />
          To Cook Today?
        </h1>
        <p className="text-lg text-black mt-6">
          Our job is to fill your tummy with delicious foods.
        </p>
        <div className="flex space-x-20 mt-10">
          <a
            href="#"
            className="text-black text-2xl hover:underline transition"
          >
            Explore More
          </a>
          <a
            href="#"
            className="text-black text-2xl hover:underline transition"
          >
            New Suggestion
          </a>
        </div>
      </main>
    </div>
  );
}
