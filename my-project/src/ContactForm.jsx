import React from 'react';

const ContactForm = () => {
  return (
    <>
      {/* Title Section */}
      <div className='bg-blue-900 pt-10'>
        <h1 className='text-4xl md:text-6xl font-bold text-center'>
          <span className='text-white'>Contact</span> <span className='text-blue-500'>Us</span>
        </h1>
      </div>

      <div className="min-h-screen bg-blue-900 flex items-center justify-center p-4 md:p-10">
        <div className="max-w-md w-full bg-blue-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white text-center">Get in Touch</h2>
            <p className="text-blue-100 text-center text-sm mt-2">Humse baat karne ke liye niche form bharein</p>
          </div>
          
          <form className="p-6 md:p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl bg-blue-900 border border-blue-700 text-white focus:bg-white focus:text-black focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400"
                placeholder="Tajwar Shaheen"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl bg-blue-900 border border-blue-700 text-white focus:bg-white focus:text-black focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400"
                placeholder="name@company.com"
              />
            </div>

            {/* Subject Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl bg-blue-900 border border-blue-700 text-white focus:bg-white focus:text-black focus:border-blue-500 outline-none transition duration-200">
                <option className='text-black'>General Inquiry</option>
                <option className='text-black'>Support</option>
                <option className='text-black'>Feedback</option>
              </select>
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Message</label>
              <textarea 
                rows="4" 
                className="w-full px-4 py-3 rounded-xl bg-blue-900 border border-blue-700 text-white focus:bg-white focus:text-black focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400"
                placeholder="Aapka message yahan likhein..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-xl transition duration-300 transform active:scale-95 shadow-lg"
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