export default function EmployeeList() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Top header bar */}
      <div className="w-full bg-[#36B44A] p-4 text-white flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Employee Information</h1>
          <p className="text-xs font-medium">Gitlab CI/CD Demo</p>
        </div>
        <span className="bg-white text-[#36B44A] font-bold px-4 py-2 rounded-full cursor-pointer">
          Add Employee
        </span>
      </div>
      {/* Employee List */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700">
          All Employees (05)
        </h2>
      </div>
      <div className="mt-8  w-full max-w-5xl shadow-md rounded-lg">
        {/* Title */}

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg">
          <table className="min-w-full text-left border-collapse rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-4 font-medium">Employee_Id</th>
                <th className="py-3 px-4 font-medium">First Name</th>
                <th className="py-3 px-4 font-medium">Last Name</th>
                <th className="py-3 px-4 font-medium">Age</th>
                <th className="py-3 px-4 font-medium">Address</th>
                <th className="py-3 px-4 font-medium">Type</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows */}
              {[
                {
                  id: "Emp 001",
                  firstName: "James",
                  lastName: "State",
                  age: 40,
                  address: "London",
                  type: "Male",
                },
                {
                  id: "Emp 002",
                  firstName: "Peterson",
                  lastName: "Harry",
                  age: 56,
                  address: "US",
                  type: "Male",
                },
                {
                  id: "Emp 003",
                  firstName: "Ronaldo",
                  lastName: "Stuart",
                  age: 34,
                  address: "Portugal",
                  type: "Male",
                },
                {
                  id: "Emp 004",
                  firstName: "Alvarez",
                  lastName: "Peter",
                  age: 61,
                  address: "Argentina",
                  type: "Male",
                },
                {
                  id: "Emp 005",
                  firstName: "James",
                  lastName: "State",
                  age: 40,
                  address: "London",
                  type: "Female",
                },
              ].map((employee, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="py-3 px-4">{employee.id}</td>
                  <td className="py-3 px-4">{employee.firstName}</td>
                  <td className="py-3 px-4">{employee.lastName}</td>
                  <td className="py-3 px-4">{employee.age}</td>
                  <td className="py-3 px-4">{employee.address}</td>
                  <td className="py-3 px-4">{employee.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4">
          <p className="text-sm text-gray-600">Showing 11-20 records in here</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md">1</button>
            <button className="px-3 py-1 border rounded-md bg-gray-200">
              2
            </button>
            <button className="px-3 py-1 border rounded-md">3</button>
          </div>
        </div>
      </div>
    </div>
  );
}
