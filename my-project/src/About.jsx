import React from 'react'

function About() {
  return (
    <>
             <h1 className='text-4xl md:text6xl font-bold text-center bg-blue-900'><span className='text-white'>About</span> <span className='text-blue-500'>Me</span></h1>
             <p className='text-center  bg-blue-900 text-white'>Get  to know more about my background and passion</p>

<section className='min-h-screen bg-blue-900 flex flex-col  md:flex-row  items-center justify-center text-white p-10'>
   

    <div className='mb-8 md:mb-0 md-mr-12  w-full'>
        
            <img src="../src/assets/tajwar.jpg"className="w-95 h-88 md:h-95 rounded-2xl shadow-sm mx-auto border-blue-100 border-4"/>
        </div>
        <div className='text-center   w-full '>
              <h1 className=' text-4xl md:text6xl font-bold  mb-10  mr-90'> <span className='text-blue-400'> My </span> Journey</h1>
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit illum, dolorem, obcaecati eos debitis fuga officiis vitae eligendi optio animi labore exercitationem odio pariatur culpa velit vel hic quis.odio pariatur culpa velit vel hic quis. th these  veritatis beatae totam quam  veritatis beatae totam quam  veritatis beatae totam quam  veritatis beatae totam quam  veritatis beatae totam quam  This is the End
              </p>
              <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quia placeat sapiente vel corporis, laboriosam ad blanditiis natus excepturi officia, repellat sunt consequatur.consequatur.consequatur.consequatur corrupti veritatis beatae totam quam in  veritatis beatae totam quam  veritatis beatae totam quam  veritatis beatae totam quam  veritatis beatae totam quam  veritatis beatae totam quam  veritatis beatae totam quam  veritatis beatae totam quam  veritatis beatae totam quam  doloribus consequatur.</p>
            
   
        </div>
    
</section>
    </>
    
  )
}

export default About