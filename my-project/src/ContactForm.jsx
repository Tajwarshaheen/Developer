import React from 'react';

const ContactForm = () => {
  return (
   <>
    <h1 className='text-4xl md:text6xl font-bold text-center bg-blue-900 py-20'><span className='text-white  py-20'>Contact</span> <span className='text-blue-500'>Us</span></h1>
             

    <div className="min-h-screen bg-blue-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-blue-800 rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-blue-800 p-6">
          <h2 className="text-2xl font-bold text-white text-center">Contact Us</h2>
          <p className="text-blue-100 text-center text-sm mt-2">Humse baat karne ke liye niche form bharein</p>
        </div>
        
        <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-white mb-1">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl bg-blue-800 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition duration-200"
              placeholder="Tajwar shaheen"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-white mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl bg-blue-800 border border-gray-200 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition duration-200"
              placeholder="name@company.com"
            />
          </div>

          {/* Subject Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-white mb-1">Subject</label>
            <select className="w-full px-4 py-3 rounded-xl bg-blue-800 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition duration-200">
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-semibold text-white mb-1">Message</label>
            <textarea 
              rows="4" 
              className="w-full px-4 py-3 rounded-xl bg-blue-800 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition duration-200"
              placeholder="Aapka message yahan likhein..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl  transition duration-300 transform active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
   
   </>
  );
};

export default ContactForm;