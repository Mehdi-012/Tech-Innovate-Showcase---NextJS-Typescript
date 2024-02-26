import React from 'react';

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium">Full Name</label>
            <input type="text" id="fullName" name="fullName" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">Your Message</label>
            <textarea id="message" name="message" rows={5} className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
