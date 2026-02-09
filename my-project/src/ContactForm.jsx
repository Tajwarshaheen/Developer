import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-blue-900 min-h-screen text-white">
      {/* Header */}
      <div className="py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Get  <span className='text-blue-500'>In Touch</span></h1>
        <p className="text-blue-200">Humse rabta karein, hum aapki madad ke liye hazir hain.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        
        {/* Info Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-blue-700/30 p-8 rounded-3xl border border-blue-700">
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-6">
              <p>📧 <span className="ml-2 font-bold">Email:</span> <br/> tajwarshaheen1011@example.com</p>
              <p>📞 <span className="ml-2 font-bold">Phone:</span> <br/> +92 084637487</p>
              <p>📍 <span className="ml-2 font-bold">Location:</span> <br/> Islamabad, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:col-span-2 bg-blue-800 rounded-3xl p-8 text-slate-900 shadow-xl">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="p-3 border rounded-xl outline-blue-500 text-white" />
              <input type="text" placeholder="Last Name" className="p-3 border rounded-xl outline-blue-500 text-white" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-xl outline-blue-500 text-white" />
            <textarea rows="4"  placeholder="Your Message " className="w-full p-3 border rounded-xl outline-blue-500 text-white"></textarea>
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;