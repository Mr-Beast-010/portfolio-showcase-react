import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <h3 className="text-3xl font-bold text-center mb-10">Contact Me</h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        <div>
          <h4 className="text-xl font-semibold mb-2">Let's Connect</h4>
          <p>Email: romio@example.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Kolkata, India</p>
          <div className="mt-4 space-x-4 text-xl">
            <a href="#" title="GitHub">🐱</a>
            <a href="#" title="Twitter">🐦</a>
            <a href="#" title="LinkedIn">💼</a>
          </div>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 text-white rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 text-white rounded" />
          <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-800 text-white rounded" />
          <textarea rows={5} placeholder="Your Message" className="w-full p-3 bg-gray-800 text-white rounded"></textarea>
          <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
