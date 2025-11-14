import React from "react";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      title: "Advanced Technology",
      description:
        "Cutting-edge medical equipment for accurate diagnosis and treatment.",
    },
    {
      title: "Expert Doctors",
      description:
        "Board-certified physicians with years of experience in their specialties.",
    },
    {
      title: "24/7 Emergency Care",
      description:
        "Round-the-clock emergency services for critical medical situations.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
            alt="Hospital Interior"
            className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right - Content */}
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About <span className="text-green-600">MediCare Hospital</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Founded in 1995, MediCare Hospital has been at the forefront of
            medical excellence, providing comprehensive healthcare services to
            our community.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our state-of-the-art facility is equipped with the latest medical
            technology, and our team of dedicated professionals is committed to
            delivering personalized care to every patient.
          </p>

          {/* Features */}
          <div className="space-y-4 mt-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start space-x-4">
                <div className="mt-1">
                  <CheckCircle className="text-green-600" size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <a
            href="#"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium mt-6 hover:bg-green-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
