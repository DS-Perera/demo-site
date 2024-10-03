import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              {/* Left side - Title */}
              <h1 className="text-xl font-semibold text-gray-800">Employee Details Bank</h1>
            </div>
            <div className="flex items-center">
              {/* Right side - Add New Button */}
              <a className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" >
                Add New
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="p-6">
        <h1>page2</h1>
      </div>
    </div>
  );
}
