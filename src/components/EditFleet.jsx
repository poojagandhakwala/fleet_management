import React, { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CustomDropdown from "../custom/CustomDropDown";

const EditFleet = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { fleet } = location.state;
  const [toggle, setToggle] = useState("info");

  const handleToggle = (event, newToggle) => {
    if (newToggle !== null) {
      setToggle(newToggle);
    }
  };

  const billingOptions = [
    { value: "Public", label: "Public Billing Plan" },
    { value: "Private", label: "Private Billing Plan" },
  ];

  return (
    <div>
      <div className="flex flex-col w-full mx-3">
        <div className="py-2 text-white flex justify-between">
          <h5 className="text-lg font-bold text-start">Fleet</h5>
          <div className="flex items-center">
            <HelpOutlineIcon className="mx-2" />
            <NotificationsIcon className="mx-2" />
            <p className="mx-2 bg-red-400 border border-white rounded-full px-2 py-1.5 text-center">
              CE
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl text-sm p-3">
          <div className="w-full flex rounded-xl p-3 text-lg font-semibold items-center">
            <ArrowBackIcon
              onClick={() => navigate("/")}
              className="cursor-pointer"
            />
            <h4 className="ml-1">{`${fleet?.name} ${
              fleet?.type === "Public" ? "Public Fleet" : "Private Fleet"
            }`}</h4>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 text-start">
              {/* Row 1 */}
              <div className="my-1 bg-white rounded-xl text-center text-base font-semibold p-5 px-3">
                <span className="bg-gray-100 rounded-full p-2 my-1">
                  <PedalBikeIcon className="text-gray-600" />
                </span>
                <div className="pt-3">
                  <h3>Total Vehicle</h3>
                  <p className="text-[#283246] text-xl font-bold">50</p>
                </div>
              </div>
              <div className="my-1 bg-white rounded-xl text-center text-base font-semibold p-5 px-3">
                <span className="bg-gray-100 rounded-full p-2 my-1">
                  <DirectionsBikeIcon className="text-gray-600" />
                </span>
                <div className="pt-3">
                  <h3>Total Trips</h3>
                  <p className="text-[#283246] text-xl font-bold">16</p>
                </div>
              </div>
              <div className="my-1 bg-white rounded-xl text-center text-base font-semibold p-5 px-3">
                <span className="bg-gray-100 rounded-full p-2 my-1">
                  <PedalBikeIcon className="text-gray-600" />
                </span>
                <div className="pt-3">
                  <h3>Today's Trip</h3>
                  <p className="text-[#283246] text-xl font-bold">06</p>
                </div>
              </div>
              <div className="my-1 bg-white rounded-xl text-center text-base font-semibold p-5 px-3">
                <span className="bg-gray-100 rounded-full p-2 my-1">
                  <CurrencyRupeeIcon className="text-gray-600" />
                </span>
                <div className="pt-3">
                  <h3>Revenue Generated</h3>
                  <p className="text-[#283246] text-xl font-bold">$50</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl text-sm p-3 mt-3">
          <div className="w-full flex rounded-xl p-3 text-lg font-semibold items-center">
            <ToggleButtonGroup
              className="w-96 hover:border-0 hover:outline-0 hover:ring-0 focus:border-0 focus:outline-0 focus:ring-0 !text-red-500 py-1"
              value={toggle}
              exclusive
              onChange={handleToggle}
              aria-label="Platform"
            >
              <ToggleButton
                value="info"
                className={`${
                  toggle === "info" &&
                  "!bg-gradient-to-r from-gray-600 to-[#283246] text-white"
                } !text-red-400 !capitalize w-full !rounded-l-xl hover:border-0 hover:outline-0 hover:ring-0 focus:border-0 focus:outline-0 focus:ring-0`}
              >
                Fleet Information
              </ToggleButton>
              <ToggleButton
                value="setting"
                className={`${
                  toggle === "setting" &&
                  "!bg-gradient-to-r from-gray-600 to-[#283246] text-white"
                } !text-red-400 !capitalize w-full !rounded-r-xl hover:border-0 hover:outline-0 hover:ring-0 focus:border-0 focus:outline-0 focus:ring-0`}
              >
                Advance Settings
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="p-4">
            {toggle === "info" ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-start">
                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder={`${fleet?.name} ${
                      fleet?.type === "Public"
                        ? "Public Fleet"
                        : "Private Fleet"
                    }`}
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Support Email
                  </label>
                  <input
                    type="text"
                    placeholder={fleet?.email}
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Alert Email
                  </label>
                  <input
                    type="text"
                    placeholder={fleet?.email}
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>

                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Fleet Type
                  </label>
                  <select
                    defaultValue={fleet?.type}
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium"
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </select>
                </div>
                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Billing Plan
                  </label>
                  <CustomDropdown
                    options={billingOptions}
                    defaultValue={fleet?.billing}
                  />
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Support Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="9093201390"
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div className="">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Address
                  </label>
                  <textarea
                    placeholder={fleet?.location}
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full resize-none"
                    rows="4"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-start">
                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Parking Requirement
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium"
                    defaultValue="not required"
                  >
                    <option value="not required">Not Required</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Auto end Ride - idele vehicle
                  </label>
                  <input
                    type="text"
                    placeholder="Not Required"
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Auto end Ride - Paused Vehicle
                  </label>
                  <input
                    type="text"
                    placeholder="Required"
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>

                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Auto end Ride - Critical Battery Vehicle
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium"
                    defaultValue="not required"
                  >
                    <option value="not applicable">Not Applicable</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Low Battery Level
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium"
                    defaultValue="50"
                  >
                    <option value="30">30%</option>
                    <option value="50">50%</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Auto Close Vehicle
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium"
                    defaultValue="no"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Distance to Lock & unlock Vehicle
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium"
                    defaultValue="30"
                  >
                    <option value="30">30 meter</option>
                    <option value="50">50 meter</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Paused Ride
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium"
                    defaultValue="no"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            )}

            <div className="mt-8 items-left text-start gap-2 flex">
              <button className="bg-gradient-to-r from-gray-600 to-[#283246] text-white w-40">
                Save Change
              </button>
              <button className="border border-[#283246] rounded-xl text-[#283246] w-40 ">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFleet;