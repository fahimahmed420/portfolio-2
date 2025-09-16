import React, { useState } from "react";

const CustomSortDropdown = ({ sortBy, setSortBy }) => {
  const options = [
    { value: "name", label: "Sort by Name" },
    { value: "proficiency", label: "Sort by Proficiency" },
    { value: "experience", label: "Sort by Experience" },
  ];

  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    setSortBy(value);
    setOpen(false);
  };

  return (
    <div className="relative w-60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 flex justify-between items-center hover:ring-2 hover:ring-blue-500 focus:outline-none"
      >
        {options.find((opt) => opt.value === sortBy)?.label}
        <span className={`ml-2 transition-transform ${open ? "rotate-180" : "rotate-0"}`}>▼</span>
      </button>

      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-2xl">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded-lg ${
                sortBy === opt.value ? "bg-blue-100" : ""
              }`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSortDropdown;
