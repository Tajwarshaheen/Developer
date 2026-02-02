import React from 'react'

function Skill() {
  return (
 < >
 
    <h1 className='text-4xl md:text6xl font-bold text-center bg-blue-700'><span className='text-white'>My</span> <span className='text-blue-500'>Skills</span></h1>
             <p className='text-center  bg-blue-700 text-white'>Technology | Work with to bring ideas to life</p>

            <section className='min-h-screen bg-blue-700  items-center justify-center text-white '>

              <div className='flex w-full justify-center gap-10  '>  
                <div className='w-80 h-60 rounded-2xl bg-blue-800  inline-block mt-10'> <img src="../src/assets/react.svg" alt="" className='mt-5 ml-5' /> <h1  className='ml-30 mb-60'>Fronted Developer </h1> </div>
                <div className='w-80 h-60 rounded-2xl bg-blue-800  mt-10'>2</div>
                <div className='w-80 h-60 rounded-2xl bg-blue-800   mt-10'>3</div>
              </div>
              <div className='flex w-full justify-center gap-10 mt-10'>  
                <div className='w-80 h-60 rounded-2xl bg-blue-800  inline-block'> <img src="../src/assets/react.svg" alt="" className='mt-5 ml-5' /> <h1  className='ml-30 mb-60'>Fronted Developer </h1> </div>
                <div className='w-80 h-60 rounded-2xl bg-blue-800 '>2</div>
                <div className='w-80 h-60 rounded-2xl bg-blue-800 '>3</div>
              </div>
            </section>
 </>
  )
}

export default Skill