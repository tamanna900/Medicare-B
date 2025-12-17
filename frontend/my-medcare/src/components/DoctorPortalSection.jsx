export default function DoctorPortalSection() {
    return (
      <div className="w-full bg-[#f5f9ff] py-16 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
  
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#102E50] mb-4">
              Doctor Login Portal
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Access your personalized dashboard to manage patient records, 
              view appointments, track medical history, and update treatments securely.
            </p>
  
            <button
              onClick={() => window.location.href = "/doctor-login"}
              className="px-6 py-3 bg-[#27548A] text-white rounded-lg shadow-lg hover:bg-[#102E50] transition-all duration-300"
            >
              Login as Doctor
            </button>
          </div>
  
          {/* Right Image Section */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
              alt="doctor portal"
              className="w-64 md:w-80 drop-shadow-md"
            />
          </div>
  
        </div>
      </div>
    );
  }
  