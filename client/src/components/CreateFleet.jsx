import React, { useEffect, useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "../custom/CustomDropDown";
import axios from "axios";
import { toast } from "react-toastify";

const CreateFleet = () => {
  const navigate = useNavigate();

  const billingOptions = [
    { value: "Public", label: "Public Billing Plan" },
    { value: "Private", label: "Private Billing Plan" },
  ];

  const [form, setForm] = useState({
    name: "",
    type: "",
    billing: "",
    location: "",
    email: "",
    createdDate: "",
  });

  // useEffect(()=>{
  //   const res=axios.post("http://localhost:8080/add-fleet",
  //     {
  //       "name": "New Fleet",
  //       "type": "Private",
  //       "billing": "Private",
  //       "location": "New Road",
  //       "email": "newfleet@gmail.com",
  //       "createdDate": "09/01/2024"
  //     }

  //   );
  //   console.log("Res = ",res)
  // },[])

  const addFleet = async (e) => {
    e.preventDefault();
    console.log("form ", form);

    const res = await axios
      .post("http://localhost:8080/add-fleet", form)
      .then((response) => {
        if (response.status === 201) {
        }
        toast.success("Fleet Created Successfully!");
      });
    setTimeout(() => {
      window.history.back();
    }, 2000);
    localStorage.clear();
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
        <form>
          <div className="bg-gray-100 rounded-xl text-sm p-3">
            <div className="w-full flex rounded-xl p-3 text-lg font-semibold items-center">
              <ArrowBackIcon
                onClick={() => navigate("/")}
                className="cursor-pointer"
              />
              <h4 className="ml-1">Create Fleet</h4>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-start">
                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Name<span className="text-red-500 mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                    }}
                    placeholder="Shyamal Cross Road Public Fleet"
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Support Email<span className="text-red-500 mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.email}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, email: e.target.value }));
                    }}
                    placeholder="admin123@gmail.com"
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Alert Email
                    {/* <span className="text-red-500 mx-1">*</span> */}
                  </label>
                  <input
                    type="text"
                    placeholder="super@gmail.com"
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>

                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Fleet Type<span className="text-red-500 mx-1">*</span>
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium"
                    required
                    value={form.type}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, type: e.target.value }));
                    }}
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Billing Plan<span className="text-red-500 mx-1">*</span>
                  </label>
                  <CustomDropdown
                    options={billingOptions}
                    defaultValue="Public"
                  />
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Support Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="9090290001"
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                  />
                </div>

                <div className="">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Address<span className="text-red-500 mx-1">*</span>
                  </label>
                  <textarea
                    required
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full resize-none"
                    rows="4"
                    value={form?.location}
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl text-sm p-3 mt-6">
            <div className="w-full flex rounded-xl p-3 text-lg font-semibold items-center">
              <h4 className="ml-1">Advance Settings</h4>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-start">
                <div className="my-1">
                  <label className="block text-[#283246] font-semibold mb-1">
                    Parking requirement
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
                    Auto end ride - idle vehicle
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
                    {/* <span className="text-red-500 mx-1">*</span> */}
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
                    {/* <span className="text-red-500 mx-1">*</span> */}
                  </label>
                  <select
                    className="border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium"
                    defaultValue="not application"
                  >
                    <option value="not applicable">Not Applicable</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#283246] font-semibold mb-1">
                    Low battery level
                    {/* <span className="text-red-500 mx-1">*</span> */}
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
                    Auto close vehicle
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
                    Distance to lock & unlock vehicle
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
                    Paused ride
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

              <div className="mt-8 items-left text-start gap-2 flex">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-gray-600 to-[#283246] text-white w-40"
                  onClick={(e) => {

                    setForm((prevForm) => {
                      const updatedBilling =
                        localStorage?.billing || prevForm.type;

                      return {
                        ...prevForm,
                        billing: updatedBilling || 'Public',
                      };
                    });

                    form?.billing && addFleet(e);
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="border border-[#283246] rounded-xl text-[#283246] w-40"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFleet;
