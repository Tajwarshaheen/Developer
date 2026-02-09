import React from 'react'

function PortfolioHeader() {
  return (
    <>
      <section id='home' className='min-h-screen bg-blue-900 flex flex-col md:flex-row items-center justify-center text-white p-6 md:p-10 gap-10'>
        
        {/* Image Container */}
        <div className='w-full md:w-1/2 flex justify-center mt-10 md:mt-0'> 
          <img 
            src="../src/assets/tajwar.jpg"
            className="w-64 h-64 md:w-85 md:h-85 rounded-full shadow-xl border-blue-100 border-4 object-cover" 
            alt="Tajwar Shaheen"
          />
        </div>

        {/* Text Content Container */}
        <div className='w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 leading-tight'> 
            <span className='text-blue-400'>Hi,</span> I am Tajwar Shaheen
          </h1>
          <p className='text-lg md:text-xl text-gray-200'>
            Crafting Scalable Web Applications with React & Tailwind CSS
          </p>
          <p className='text-lg md:text-xl text-gray-200'>
            Turning Complex Problems into Elegant, Responsive Designs.
          </p>
          
          <button className='mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-blue-900 cursor-pointer transition-all duration-300 ease-in-out'>
            View My Work
          </button>
        </div>

      </section>
    </>
  )
}

export default PortfolioHeader










