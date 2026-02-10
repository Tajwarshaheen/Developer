import React from 'react'

import img1 from "../src/assets/images (1).jpg";
import img2 from "../src/assets/images (2).jpg";
import img3 from "../src/assets/images (3).jpg";
import img4 from "../src/assets/images (4).jpg";
import img5 from "../src/assets/images (5).jpg";
import img6 from "../src/assets/download.jpg";

const projects = [
  { id: 1, title: "Ecom Platform", img: img1 },
  { id: 2, title: "Portfolio Web", img: img2 },
  { id: 3, title: "Chat App", img: img3 },
  { id: 4, title: "Dashboard", img: img4 },
  { id: 5, title: "Social Media", img: img5 },
  { id: 6, title: "Web App", img: img6 },
];



function Project() {
  // Yahan images ke sahi naam check karein. 
  // Agar kisi image ka naam "download.jpg" tha (jo aapne pehle code mein likha tha), 
  // toh use array mein specific object banakar dena behtar hai.


  return (
    <div  className='bg-blue-900 min-h-screen py-10 px-4' id='projects'>
      <h1 className='text-4xl md:text-6xl font-bold text-center'>
        <span className='text-white'>My</span> <span className='text-blue-500'>Projects</span>
      </h1>
      <p className='text-center text-white mt-2'>A selection of My React Works</p>

      <section className='max-w-7xl mx-auto mt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          
          {projects.map((proj) => (
            <div key={proj.id} className='w-full max-w-[320px] bg-blue-800 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300'>
              {/* Fixed Image Logic */}
              <img 
                src={proj.img} 
                alt={proj.title} 
                className='w-full h-52 object-cover' 
                // Agar path galat ho toh ye placeholder image dikhayega
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Project+Coming+Soon' }}
              />
              
              <div className='p-5 '>
                <h1 className='text-2xl font-bold text-white'>{proj.title}</h1>
                <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className='flex flex-wrap gap-2 mt-4'>
                  <span className='px-3 py-1 bg-blue-400 text-xs font-bold rounded-full text-blue-900'>React</span>
                  <span className='px-3 py-1 bg-blue-400 text-xs font-bold rounded-full text-blue-900'>Tailwind</span>
                </div>

                <div className='flex justify-between gap-4 mt-6'>
                  <button className='flex-1 bg-blue-500 hover:bg-blue-400 text-white py-2 rounded-lg font-semibold cursor-pointer'>Demo</button>
                  <button className='flex-1 border-2 border-blue-400 text-white hover:bg-blue-400 py-2 rounded-lg font-semibold cursor-pointer'>Code</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
      
  
    </div>
  )
}

export default Project