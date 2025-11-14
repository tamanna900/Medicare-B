import React, { useState } from "react";

const AppointmentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
  });
  const [message, setMessage] = useState("");

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
  
  const doctorsByDepartment = {
    "Cardiac Sciences": [
      "Dr. Arjun Mehta",
      "Dr. Kavita Rao",
      "Dr. Sameer Singh",
    ],
    "Gastroenterology": [
      "Dr. Ritu Verma",
      "Dr. Rohit Bansal",
      "Dr. Anjali Kapoor",
    ],
    "Dermatology": [
      "Dr. Priya Sharma",
      "Dr. Amit Chauhan",
      "Dr. Neha Patil",
    ],
    "ENT": [
      "Dr. Karan Malhotra",
      "Dr. Sneha Iyer",
      "Dr. Devansh Thakur",
    ],
    "Haematology": [
      "Dr. Ishita Banerjee",
      "Dr. Aditya Sinha",
      "Dr. Meenal Joshi",
    ],
    "Neurosurgery": [
      "Dr. Rajeev Khanna",
      "Dr. Shweta Anand",
      "Dr. Manish Kapoor",
    ],
    "Organ Transplant": [
      "Dr. Vikas Tiwari",
      "Dr. Meera Narang",
      "Dr. Pankaj Deshmukh",
    ],
    "General Surgery": [
      "Dr. Rahul Gupta",
      "Dr. Shruti Bhatia",
      "Dr. Arvind Menon",
    ],
    "Orthopaedics": [
      "Dr. Neel Sharma",
      "Dr. Simran Kaur",
      "Dr. Raghav Chauhan",
    ],
  };
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.department || !form.date) {
      setMessage("Please fill all required fields");
      return;
    }
    if (!validateEmail(form.email)) {
      setMessage("Invalid email format");
      return;
    }
    if (!validatePhone(form.phone)) {
      setMessage("Phone number must be 10 digits");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage("Appointment booked successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          department: "",
          doctor: "",
          date: "",
        });
      } else {
        setMessage("Failed to save appointment. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error while saving appointment.");
    }
  };

  return (
    <section id="appointment" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Book Appointment</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow rounded-lg p-8 space-y-4"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border p-2 rounded"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          type="email"
          className="w-full border p-2 rounded"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          type="tel"
          className="w-full border p-2 rounded"
        />

        <select
          name="department"
          value={form.department}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <select
  name="doctor"
  value={form.doctor}
  onChange={handleChange}
  className="w-full border p-2 rounded"
>
  <option value="">Select Doctor</option>
  {doctorsByDepartment[form.department]?.length > 0 ? (
    doctorsByDepartment[form.department].map((doc, idx) => (
      <option key={idx} value={doc}>{doc}</option>
    ))
  ) : (
    <option disabled>No doctors available</option>
  )}
</select>


        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>

        {message && (
          <p
            className={`font-semibold mt-3 ${
              message.includes("successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </section>
  );
};

export default AppointmentForm;
