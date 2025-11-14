import React from 'react'

export default function Orthopaedics() {
    const items=["orthopaedics"];
  return (
    <div className="bg-white rounded-lg shadow-lg w-[250px] p-4 space-y-2">
    <h4 className="font-semibold text-gray-800 border-b pb-2">
      Orthopaedics
    </h4>
    {items.map((item) => (
      <div
        key={item}
        className="text-sm text-gray-600 hover:text-green-600 cursor-pointer"
      >
        {item}
      </div>
    ))}
  </div>
  );
}
