import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomDropdown = ({ options, defaultValue = "Public" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || "Public");

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    localStorage.billing = value;
    console.log("billing = ", value, localStorage);
  };

  return (
    <div className="relative inline-block w-full">
      <div
        className="flex justify-between border border-gray-300 bg-white rounded-xl p-2 px-1 w-full text-red-500 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`cursor-pointer px-2 py1 rounded-full ${
            selectedValue === "Public"
              ? "text-green-600 border border-green-600 bg-green-100 bg-opacity-50"
              : "text-red-600 border border-red-600 bg-red-100 bg-opacity-50"
          }`}
        >
          {" "}
          {options.find((option) => option.value === selectedValue)?.label}
        </span>
        <KeyboardArrowDownIcon className="!text-gray-400" />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-xl shadow-lg rounded-full ">
          {options.map((option) => (
            <li
              key={option.value}
              className={`cursor-pointer px-2 py-1 hover:bg-gray-100`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
