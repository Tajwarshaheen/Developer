import React from 'react'

function About() {
  return (
    <>
      <div id='about' className='bg-blue-900 py-10'>
        <h1 className='text-4xl md:text-6xl font-bold text-center'>
          <span className='text-white'>About</span> <span className='text-blue-500'>Me</span>
        </h1>
        <p className='text-center text-white px-4'>Get to know more about my background and passion</p>
      </div>

      <section className='min-h-screen bg-blue-900 flex flex-col md:flex-row items-center justify-between text-white p-6 md:p-10 gap-10'>
        {/* Image Container */}
        <div className='w-full md:w-1/2'>
          <img 
            src="../src/assets/tajwar.jpg" 
            // h-64 ya h-72 use karein height kam karne ke liye
            // object-cover image ko crop karke adjust rakhta hai stretch nahi karta
            className="w-full max-w-sm h-64 md:h-80 object-cover rounded-2xl shadow-sm mx-auto border-blue-100 border-4" 
            alt="Profile"
          />
        </div>

        {/* Text Container */}
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h2 className='text-4xl md:text-6xl font-bold mb-6'>
            <span className='text-blue-400'>My</span> Journey
          </h2>
          <p className='mb-4 text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit illum, dolorem, obcaecati eos debitis fuga officiis vitae eligendi optio animi labore exercitationem odio pariatur culpa velit vel hic quis.
          </p>
          <p className='text-gray-200'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quia placeat sapiente vel corporis, laboriosam ad blanditiis natus excepturi officia, repellat sunt consequatur.
          </p>
        </div>
      </section>
    </>
  )
}

export default About