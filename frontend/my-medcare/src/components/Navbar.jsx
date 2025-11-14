import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import CardiacSciencesDropdown from "./dropdowns/CardiacSciencesDropdown";
import GastroenterologyDropdown from "./dropdowns/GastroenterologyDropdown";
import DermatologyDropdown from "./dropdowns/DermatologyDropdown";
import ENTDropdown from "./dropdowns/ENTDropdown";
import HaematologyDropdown from "./dropdowns/HaematologyDropdown";
import NeurosurgeryDropdown from "./dropdowns/NeurosurgeryDropdown";
import OrganTransplantDropdown from "./dropdowns/OrganTransplantDropdown";
import GeneralSurgery from "./dropdowns/GeneralSurgery";
import Orthopaedics from "./dropdowns/Orthopaedics";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const dropdownRef = useRef(null);

  const specialties = [
    [
      "Cardiac Sciences",
      "Gastroenterology",
      "Dermatology",
      "ENT",
      "Haematology",
      "Neurosurgery",
      "Organ Transplant",
    ],
    [
      "General Surgery",
      "Orthopaedics",
      
    ]
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setSelectedSpecialty(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderSubDropdown = () => {
    switch (selectedSpecialty) {
      case "Cardiac Sciences":
        return <CardiacSciencesDropdown />;
      case "Gastroenterology":
        return <GastroenterologyDropdown />;
      case "Dermatology":
        return <DermatologyDropdown />;
      case "ENT":
        return <ENTDropdown />;
      case "Haematology":
        return <HaematologyDropdown />;
      case "Neurosurgery":
        return <NeurosurgeryDropdown />;
      case "Organ Transplant":
        return <OrganTransplantDropdown />;
      case "General Surgery":
        return <GeneralSurgery/>;
      case "Orthopaedics":
        return <Orthopaedics/>;
      default:
        return null;
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-green-600 text-2xl font-bold">Medicare</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 relative">
          {/* Specialties Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setShowDropdown(!showDropdown);
                setSelectedSpecialty(null);
              }}
              className="flex items-center hover:text-green-600 font-medium"
            >
              Specialties <ChevronDown size={16} className="ml-1" />
            </button>

            {showDropdown && (
              <div className="absolute left-0 mt-3 bg-white rounded-lg shadow-lg w-[250px] p-3 z-50">
                {specialties.flat().map((item) => (
                  <div key={item} className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSpecialty(
                          selectedSpecialty === item ? null : item
                        );
                      }}
                      className={`w-full flex items-center justify-between text-sm px-3 py-2 rounded-md hover:bg-gray-100 ${
                        selectedSpecialty === item
                          ? "text-green-600 font-semibold bg-gray-50"
                          : "text-gray-700"
                      }`}
                    >
                      {item}
                      <ChevronRight
                        size={14}
                        className={`transition-transform ${
                          selectedSpecialty === item
                            ? "rotate-90 text-green-600"
                            : ""
                        }`}
                      />
                    </button>

                    {/* Sub-dropdown appears directly below */}
                    {selectedSpecialty === item && (
                      <div className="absolute left-full top-0 ml-2">
                        {renderSubDropdown()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/appointment" className="hover:text-green-600 font-medium">
  Medical Services
</Link>
          <Link to="/testimonials" className="hover:text-green-600 font-medium">
  Patient Corner
</Link>
<Link to="/about" className="hover:text-green-600 font-medium">
  About Us
</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? "❌" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white p-4 space-y-3 shadow-md">
          <details>
            <summary className="cursor-pointer font-medium">Specialties</summary>
            <ul className="mt-2 space-y-2 pl-4 text-sm text-gray-700">
              {specialties.flat().map((item) => (
                <li key={item} className="hover:text-green-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </details>
          <Link to="/appointment" className="hover:text-green-600 font-medium">
  Medical Services
</Link>
          <Link to="/testimonials" className="hover:text-green-600 font-medium">
  Patient Corner
  </Link>
  <Link to="/about" className="hover:text-green-600 font-medium">
  About Us
</Link>

        </div>
      )}
    </nav>
  );
}
