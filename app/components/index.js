// components/LandingPage.js
import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-gray-800 bg-opacity-75 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">YourWebsite</h1>
          <nav>
          <Link href="/auth/signup">
            
              <button className="hover:underline">Sign in</button>
              {/* <button className="hover:underline">Sign in</button>
              <button className="hover:underline">Sign in</button>
              <button className="hover:underline">Sign in</button> */}
            
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/hero-image.jpg")' }}>
        <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg text-center">
          <h2 className="text-5xl font-extrabold">Welcome to YourWebsite</h2>
          <p className="mt-4 text-lg">We provide top-notch solutions for your business needs.</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4">
        <h3 className="text-4xl font-bold text-center">About Us</h3>
        <p className="mt-6 text-center text-gray-300">YourWebsite is dedicated to delivering high-quality services to help businesses thrive.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-800 py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center">Our Services</h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-2xl font-semibold">Service One</h4>
              <p className="mt-4 text-gray-300">Description of service one.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-2xl font-semibold">Service Two</h4>
              <p className="mt-4 text-gray-300">Description of service two.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-2xl font-semibold">Service Three</h4>
              <p className="mt-4 text-gray-300">Description of service three.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <h3 className="text-4xl font-bold text-center">Contact Us</h3>
        <p className="mt-6 text-center text-gray-300">Feel free to reach out to us for more information.</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} YourWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
