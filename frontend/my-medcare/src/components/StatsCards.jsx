export default function StatsCards() {
    const stats = [
      { title: "JCI & NABH ACCREDITED", desc: "Blood Bank | Lab | Nursing", color: "bg-purple-50" },
      { title: "330", desc: "Hospital Beds", color: "bg-yellow-50" },
      { title: "15 OTs", desc: "& 105 ICU Beds", color: "bg-blue-50" },
      { title: "Robotic", desc: "Surgeries", color: "bg-pink-50" },
    ];
  
    return (
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 mt-30 mb-10">
        {stats.map((s, i) => (
          <div key={i} className={`${s.color} p-6 rounded-2xl shadow-md text-center`}>
            <h4 className="font-bold text-lg text-gray-800">{s.title}</h4>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    );
  }
  