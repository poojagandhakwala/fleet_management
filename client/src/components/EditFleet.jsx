import React, { useEffect, useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CustomDropdown from "../custom/CustomDropDown";
import axios from "axios";

const EditFleet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { fleet } = location.state;
  const [toggle, setToggle] = useState("info");

  const [form, setForm] = useState({
    type: "",
    billing: "",
    location: "",
    email: "",
  });

  const handleToggle = (event, newToggle) => {
    if (newToggle !== null) {
      setToggle(newToggle);
    }
  };

  const billingOptions = [
    { value: "Public", label: "Public Billing Plan" },
    { value: "Private", label: "Private Billing Plan" },
  ];

  useEffect(() => {
    setForm({
      type: fleet?.type,
      location: fleet?.location,
      email: fleet?.email,
    });
  }, []);

  const updateFleet = () => {
    console.log(localStorage);
    if (localStorage.billing)
      setForm((prev) => ({ ...prev, billing: localStorage?.billing }));

    const res = axios
      .put(`http://localhost:8080/fleets/${fleet?.name}`, form)
      .then(() => {
        if (res.status === 201) {
        }
        toast.success("Fleet Updated Successfully!");
      });
  };

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
                    Name<span className="text-red-500 mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={fleet?.name.concat(
                      fleet?.type === "Public"
                        ? " Public Fleet"
                        : " Private Fleet"
                    )}
                    // placeholder={`${fleet?.name} ${
                    //   fleet?.type === "Public"
                    //     ? "Public Fleet"
                    //     : "Private Fleet"
                    // }`}
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Support Email<span className="text-red-500 mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.email}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, email: e.target.value }));
                    }}
                    placeholder={fleet?.email}
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Alert Email<span className="text-red-500 mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={fleet?.email}
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>

                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Fleet Type<span className="text-red-500 mx-1">*</span>
                  </label>
                  <select
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, type: e.target.value }));
                    }}
                    value={form?.type}
                    defaultValue={fleet?.type}
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </select>
                </div>
                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Billing Plan<span className="text-red-500 mx-1">*</span>
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
                  />
                </div>

                <div className="">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Address
                  </label>
                  <textarea
                    value={form.location}
                    onChange={(e) => {
                      setForm((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }));
                    }}
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
                    Parking requirement
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                    defaultValue="not required"
                  >
                    <option value="not required">Not Required</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Auto end ride - idle vehicle
                    <span className="text-red-500 mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Not Required"
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Auto end ride - paused vehicle
                    <span className="text-red-500 mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Required"
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>

                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Auto end ride - critical battery vehicle
                    <span className="text-red-500 mx-1">*</span>
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                    defaultValue="not application"
                  >
                    <option value="not applicable">Not Applicable</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Low battery level
                    <span className="text-red-500 mx-1">*</span>
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                    defaultValue="50"
                  >
                    <option value="30">30%</option>
                    <option value="50">50%</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Auto close vehicle
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                    defaultValue="no"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Distance to lock & unlock vehicle
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                    defaultValue="30"
                  >
                    <option value="30">30 meter</option>
                    <option value="50">50 meter</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Paused ride
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                    defaultValue="no"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            )}

            <div className="mt-8 items-left text-start gap-2 flex">
              <button
                className="bg-gradient-to-r from-gray-600 to-[#283246] text-white w-40"
                onClick={() => updateFleet()}
              >
                Save Change
              </button>
              <button
                className="border border-[#283246] rounded-xl text-[#283246] w-40"
                onClick={() => navigate("/")}
              >
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
