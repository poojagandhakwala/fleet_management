import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CustomDropdown from "../custom/CustomDropDown";

const ViewFleet = ({ fleet, setSelectedFleet }) => {
  return (
    <div>
      View Fleet
      {
        //   selectedFleet !== null &&
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white flex flex-col h-88 w-[48rem] items-center justify-center text-center rounded-xl py-3 px-6">
            <div className="flex w-full justify-between pb-2">
              <CloseIcon
                className="absolute right-3 cursor-pointer"
                onClick={() => setSelectedFleet(null)}
              />
              <h4 className="text-lg font-semibold">{fleet?.name} Fleet</h4>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-start w-full">
              <div className="my-1">
                <label className="block text-[#283246] font-semibold mb-1">
                  Fleet Type<span className="text-red-500 mx-1">*</span>
                </label>
                <select
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
                <input
                  type="text"
                  defaultValue={fleet?.billing}
                  className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                />
                {/* <CustomDropdown
                  options={billingOptions}
                  defaultValue={fleet?.billing}
                /> */}
              </div>
              <div>
                <label className="block text-[#283246] font-semibold mb-1">
                  Support Email<span className="text-red-500 mx-1">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={fleet.email}
                  placeholder={fleet?.email}
                  className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                />
              </div>

              <div>
                <label className="block text-[#283246] font-semibold mb-1">
                  Created Date<span className="text-red-500 mx-1">*</span>
                </label>
                <input
                  defaultValue={fleet?.createdDate}
                  className="border border-gray-300 bg-white rounded-xl p-2 w-full"
                />
              </div>

              <div className="">
                <label className="block text-[#283246] font-semibold mb-1">
                  Address
                </label>
                <textarea
                  defaultValue={fleet.location}
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
          </div>
        </div>
      }
    </div>
  );
};

export default ViewFleet;
