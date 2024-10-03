export default function AddEmployee() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Top header bar */}
      <div className="w-full bg-[#36B44A] p-4 text-white flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Employee Information</h1>
          <p className="text-xs font-medium">Gitlab CI/CD Demo</p>
        </div>
        <span className="bg-white text-[#36B44A] font-bold px-4 py-2 rounded-full cursor-pointer">
          All Employee
        </span>
      </div>

      {/* Form container */}
      <div className="mt-8 bg-white w-full max-w-md shadow-md rounded-lg">
        {/* Form header */}
        <div className="bg-gray-800 text-white p-6 rounded-t-lg">
          <h2 className="text-xl font-semibold text-center">
            Add New Employee
          </h2>
          <p className="text-center text-xs mt-1">Gitlab CI/CD Demo</p>
        </div>

        {/* Form body */}
        <form className="p-6 space-y-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#36B44A] text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Add Data
          </button>
        </form>
      </div>
    </div>
  );
}
