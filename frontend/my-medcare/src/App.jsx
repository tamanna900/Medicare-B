import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AppointmentForm from "./components/AppointmentForm";
import StatsCards from "./components/StatsCards";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Doctors from "./components/Doctors";
import PatientTestimonials from "./components/PatientTestimonials";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content */}
        <main className="grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <StatsCards />
                  <Doctors />
                  <div className="text-center mt-10">
                    <h1 className="text-3xl font-bold">Welcome to MediCare</h1>
                    <p className="mt-4 text-gray-600">
                      Your Health, Our Priority
                    </p>
                  </div>
                </>
              }
            />

            <Route path="/appointment" element={<AppointmentForm />} />

            <Route path="/about" element={<AboutUs />} />

            <Route path="/testimonials" element={<PatientTestimonials />} />
          </Routes>
        </main>

        <ChatWidget />

        <Footer />
      </div>
    </Router>
  );
}
