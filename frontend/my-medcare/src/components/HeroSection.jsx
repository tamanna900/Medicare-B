import React from "react";
import hospitalImg from "../assets/anime-flat-building-illustration.jpg";
export default function HeroSection() {
    return (
      <section className="pt-20 relative">
        <img
          src={hospitalImg}
          alt="Hospital"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gray bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-bold mb-4 text-green-700">
            Medicare Hospital, Gurgaon
          </h2>
          <p className="text-lg">World-class healthcare, close to you</p>
        </div>
      </section>
    );
  }
  