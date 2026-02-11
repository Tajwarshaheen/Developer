import React from 'react'

// Import Icons
import reduxIcon from '../assets/icons/redux-original.svg'
import mongoIcon from '../assets/icons/mongodb-original.svg'
import nodeIcon from '../assets/icons/nodejs-original.svg'
import gitIcon from '../assets/icons/git-original.svg'

function Skill() {

  const skills = [
    { name: "Frontend Developer", icon: reduxIcon, desc: "React & Next.js" },
    { name: "UI Styling", icon: mongoIcon, desc: "Tailwind CSS" },
    { name: "Backend Dev", icon: nodeIcon, desc: "Node.js & Express" },
    { name: "Database", icon: mongoIcon, desc: "MongoDB" },
    { name: "Version Control", icon: gitIcon, desc: "Git & GitHub" },
    { name: "State Management", icon: reduxIcon, desc: "Redux Toolkit" },
  ];

  return (
    <div className='bg-blue-900 min-h-screen py-10 px-5' id='skills'>
      
      {/* Header Section */}
      <h1 className='text-4xl md:text-6xl font-bold text-center'>
        <span className='text-white'>My</span> <span className='text-blue-500'>Skills</span>
      </h1>

      <p className='text-center text-white mt-2'>
        Technology | Working with to bring ideas to life
      </p>

      {/* Skills Grid */}
      <section className='max-w-6xl mx-auto mt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          
          {skills.map((skill, index) => (
            <div 
              key={index}
              className='w-full max-w-sm h-60 rounded-2xl bg-blue-800 p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg border border-blue-700'
            >
              
              {/* Icon */}
              <div className='w-20 h-20 mb-4 bg-blue-900 rounded-full flex items-center justify-center p-4 shadow-inner'>
                <img 
                  src={skill.icon}
                  alt={skill.name}
                  className='w-full h-full object-contain'
                />
              </div>

              {/* Text */}
              <h2 className='text-xl font-bold text-white'>
                {skill.name}
              </h2>

              <p className='text-blue-300 text-sm mt-1'>
                {skill.desc}
              </p>

            </div>
          ))}

        </div>
      </section>

    </div>
  )
}

export default Skill
