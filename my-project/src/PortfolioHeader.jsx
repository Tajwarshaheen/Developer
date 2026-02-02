import React from 'react'

function PortfolioHeader() {
  return (
    <>
    <section className='min-h-screen bg-blue-700 flex flex-col  md:flex-row  items-center justify-center text-white p-10'>
    <div className='mb-8 md:mb-0 md-mr-12  w-full'> 
   <img src="../src/assets/tajwar.jpg"
    className="w-85 h-78 md:h-85 rounded-full shadow-sm mx-auto border-blue-100 border-4"   
   />
    </div>
    <div className='text-center gap-40  w-full ' >
        <h1 className=' text-4xl md:text6xl font-bold mb-4'> <span className='text-blue-400'> Hi</span> I am Tajwar Shaheen</h1>
        <p >Crafting Scalable Web Applications with React & Tailwind CSS</p>
        <p>Turning Complex Problems into Elegant, Responsive Designs.</p>
   
   <button className='inline-block px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-black cursor-pointer transition-all duration-500 ease-in mt-20'>
  view my work
</button>
    </div>

    </section>
    </>
  )
}

export default PortfolioHeader