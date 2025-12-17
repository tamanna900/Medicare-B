import React, { useEffect, useState } from "react";

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [loading, setLoading] = useState(true);

  const departments = [
    "Cardiac Sciences",
    "Gastroenterology",
    "Dermatology",
    "ENT",
    "Haematology",
    "Neurosurgery",
    "Organ Transplant",
    "General Surgery",
    "Orthopaedics",
  ];

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/appointments");
      const data = await res.json();
      setAppointments(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching:", err);
      setLoading(false);
    }
  };

  // FILTER LOGIC
  const filteredAppointments = appointments.filter((a) => {
    const matchesName = a.name.toLowerCase().includes(search.toLowerCase());
    const matchesDept = filterDept ? a.department === filterDept : true;
    return matchesName && matchesDept;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Doctor Dashboard</h2>

      {/* SEARCH + FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          placeholder="Search by patient name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/2"
        />

        <select
          value={filterDept}
          onChange={(e) => setFilterDept(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        >
          <option value="">Filter by Department</option>
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {/* LOADING STATE */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {/* APPOINTMENTS TABLE */}
      {!loading && (
        <div className="overflow-x-auto shadow-md rounded-lg bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Patient Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Department</th>
                <th className="p-3 border">Doctor</th>
                <th className="p-3 border">Appointment Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((a, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 border font-semibold">{a.name}</td>
                    <td className="p-3 border">{a.email}</td>
                    <td className="p-3 border">{a.phone}</td>
                    <td className="p-3 border">{a.department}</td>
                    <td className="p-3 border">{a.doctor}</td>
                    <td className="p-3 border">{a.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-4 text-center text-gray-500" colSpan="6">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* HISTORY SECTION */}
      <h3 className="text-2xl font-bold mt-12 mb-4">Patient History</h3>
      <p className="text-gray-600 mb-2">
        (Shows all past appointments automatically if your backend provides date comparison)
      </p>

      <div className="bg-blue-50 p-6 rounded-lg shadow">
        <p className="text-gray-700">
          You can further enhance this section to show detailed medical history,
          prescriptions, lab reports, etc., as your backend grows.
        </p>
      </div>
    </div>
  );
}
