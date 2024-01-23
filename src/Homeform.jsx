import React from 'react';

function Homeform() {
  return (
    <div className="form-container justify-start items-start space-x-4 p-2 ml-2 mr-2  lg:ml-52 xl:ml-52">
      <div className="form-content flex flex-row justify-start items-start mt-6">
        <form>
          <input
            type="text"
            placeholder="Type your domain name"
            className="border border-gray-300 p-2 rounded-md w-56 focus:outline-none focus:border-indigo-500"
          />
          <button className="bg-teal-400  text-white px-4 py-2 rounded-md ml-2 hover:bg-indigo-900 focus:outline-none focus:bg-indigo-900">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default Homeform;
