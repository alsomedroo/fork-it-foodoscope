// components/About.js
import React from 'react';
import Image from 'next/image';


const About = () => {
  return (
    <main className="bg-gradient-to-br from-green-100 to-green-300 min-h-screen py-12 ">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-green-900">HackBasters</h3>
      </div>

      {/* About Paragraph */}
      <div className='flex justify-center'>
      <Image 
  src="/groupimg.jpg"  // Path to your image
  alt="A description of the image"
  width={1000}  // Specify width
  height={600} // Specify height
  layout="intrinsic" // Optionally set layout (e.g., 'responsive', 'intrinsic', or 'fixed')
  priority // For images that should load immediately (e.g., above-the-fold images)
/>
      </div>
      <div className="flex max-w-3xl mx-auto w-full">
        <p className="text-xl text-gray-800 leading-relaxed">
            <br></br>
            <br></br>
          We are a team of passionate food enthusiasts and tech-savvy friends,
          driven by our love for good food and healthy living. Our goal is to make it easy for everyone to
          explore delicious recipes, understand the nutritional value of their meals, and discover the best
          local food spots around them.
          
          Whether you’re a home chef, a foodie on a mission, or someone who wants to eat healthier, we’ve got
          you covered! From curated recipes to detailed nutrition analysis and nearby food recommendations,
          our platform is here to inspire and guide your culinary journey.
          
          
          Made with love by friends, for friends—because good food is better when shared!
        </p>
        
      </div>
      
      

      {/* Feedback Section */}
      <section id="feedback" className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-12">
        <h2 className="text-2xl font-semibold text-green-800 text-center mb-4">We Value Your Feedback</h2>
        <p className="text-center text-gray-600 mb-6">Your thoughts help us improve. Let us know what you think about our website!</p>

        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Feedback Field */}
          <div>
            <label htmlFor="feedback" className="block text-gray-700 font-semibold">Your Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              rows="5"
              placeholder="Share your feedback"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default About;
