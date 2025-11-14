import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years of experience in cardiovascular diseases and treatments.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "Specialized in neurological disorders with extensive research background.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    experience: "Expert in joint replacement and sports injury treatments.",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Our Doctors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 text-sm mb-4">{doctor.experience}</p>

                {/* Social Icons */}
                <div className="flex justify-center space-x-5 text-lg">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-sky-500 hover:text-sky-700 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
