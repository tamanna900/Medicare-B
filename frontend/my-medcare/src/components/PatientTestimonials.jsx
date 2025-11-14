import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Emily Carter",
    feedback:
      "The doctors and nurses at MediCare Hospital were extremely professional and caring. I felt safe and well taken care of during my heart surgery.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    treatment: "Cardiac Surgery",
  },
  {
    name: "Rajesh Kumar",
    feedback:
      "Exceptional care from start to finish. The staff was attentive and the facilities were top-notch. Highly recommend MediCare for anyone seeking quality healthcare.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 5,
    treatment: "Neurology Consultation",
  },
  {
    name: "Sophia Brown",
    feedback:
      "My orthopedic treatment was smooth and effective. The recovery team guided me through every step, and now I’m back to my active lifestyle!",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    rating: 4,
    treatment: "Orthopedic Care",
  },
];

const PatientTestimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Patient Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-2xl transition-shadow duration-300"
            >
              <FaQuoteLeft className="text-blue-500 text-3xl absolute -top-4 left-4 bg-white rounded-full p-1" />

              <div className="flex flex-col items-center text-center mt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                <p className="text-sm text-green-600 mb-3">{t.treatment}</p>

                {/* Star Rating */}
                <div className="flex justify-center mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm italic">{t.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
