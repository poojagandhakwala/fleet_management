import React, { useState } from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import CustomDropdown from '../custom/CustomDropDown';


const AddFleet = () => {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const billingOptions = [
        { value: 'Public', label: 'Public Billing Plan' },
        { value: 'Private', label: 'Private Billing Plan' }
    ];
 

    return (
        <div>
            <div className='flex flex-col w-full mx-3'>
                <div className='py-2 text-white flex justify-between'>
                    <h5 className='text-lg font-bold text-start'>Fleet</h5>
                    <div className='flex items-center'>
                        <HelpOutlineIcon className='mx-2' />
                        <NotificationsIcon className='mx-2' />
                        <p className='mx-2 bg-red-400 border border-white rounded-full px-2 py-1.5 text-center'>CE</p>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-xl text-sm p-3'>
                    <div className="w-full flex rounded-xl p-3 text-lg font-semibold items-center">
                        <ArrowBackIcon onClick={() => navigate("/")} className='cursor-pointer' />
                        <h4 className='ml-1'>Create Fleet</h4>
                    </div>
                    <div className='p-4'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 text-start'>
                            <div className='my-1'>
                                <label className='block text-[#283246] font-semibold mb-1'>Name<span className='text-red-500 mx-1'>*</span></label>
                                <input type="text" placeholder='Shyamal Cross Road Public Fleet' className='border border-gray-300 bg-white rounded-xl p-2 w-full' value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <div>
                                <label className='block text-[#283246] font-semibold mb-1'>Support Email<span className='text-red-500 mx-1'>*</span></label>
                                <input type="text" placeholder='admin123@gmail.com' className='border border-gray-300 bg-white rounded-xl p-2 w-full' value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <div>
                                <label className='block text-[#283246] font-semibold mb-1'>Alert Email<span className='text-red-500 mx-1'>*</span></label>
                                <input type="text" placeholder='super@gmail.com' className='border border-gray-300 bg-white rounded-xl p-2 w-full' value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>

                            <div className='my-1'>
                                <label className='block text-[#283246] font-semibold mb-1'>Fleet Type<span className='text-red-500 mx-1'>*</span></label>
                                <select className='border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium' defaultValue="not required">
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                            </div>
                            <div>


                                <label className='block text-[#283246] font-semibold mb-1'>Billing Plan<span className='text-red-500 mx-1'>*</span></label>
                                <CustomDropdown options={billingOptions} />
                            </div>
                            <div>
                                <label className='block text-[#283246] font-semibold mb-1'>Support Phone Number</label>
                                <input type="text" placeholder='9090290001' className='border border-gray-300 bg-white rounded-xl p-2 w-full' value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>

                            <div className=''>
                                <label className='block text-[#283246] font-semibold mb-1'>Address<span className='text-red-500 mx-1'>*</span></label>
                                <textarea className='border border-gray-300 bg-white rounded-xl p-2 w-full resize-none' rows="4" />
                            </div>
                        </div>
                    </div>


                </div>



                <div className='bg-gray-100 rounded-xl text-sm p-3 mt-6'>
                    <div className="w-full flex rounded-xl p-3 text-lg font-semibold items-center">
                        <h4 className='ml-1'>Advance Settings</h4>
                    </div>
                    <div className='p-4'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 text-start'>
                            <div className='my-1'>
                                <label className='block text-[#283246] font-semibold mb-1'>Parking Requirement</label>
                                <select className='border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium' defaultValue="not required">
                                    <option value="not required">Not Required</option>
                                </select>
                            </div>
                            <div>
                                <label className='block text-[#283246] font-semibold mb-1'>Auto end Ride - idele vehicle</label>
                                <input type="text" placeholder='Not Required' className='border border-gray-300 bg-white rounded-xl p-2 w-full' />
                            </div>
                            <div>
                                <label className='block text-[#283246] font-semibold mb-1'>Auto end Ride - Paused Vehicle<span className='text-red-500 mx-1'>*</span></label>
                                <input type="text" placeholder='Required' className='border border-gray-300 bg-white rounded-xl p-2 w-full' />
                            </div>

                            <div className='my-1'>
                                <label className='block text-[#283246] font-semibold mb-1'>Auto end Ride - Critical Battery Vehicle<span className='text-red-500 mx-1'>*</span></label>
                                <select className='border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium' defaultValue="not required">
                                    <option value="not applicable">Not Applicable</option>
                                </select>
                            </div>
                            <div>
                                <label className='block text-[#283246] font-semibold mb-1'>Low Battery Level<span className='text-red-500 mx-1'>*</span></label>
                                <select className='border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium' defaultValue="50">
                                    <option value="30">30%</option>
                                    <option value="50">50%</option>
                                </select>
                            </div>
                            <div>
                                <label className='block text-[#283246] font-semibold mb-1'>Auto Close Vehicle</label>
                                <select className='border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium' defaultValue="no">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select> 
                                </div>

                            <div className=''>
                                <label className='block text-[#283246] font-semibold mb-1'>Distance to Lock & unlock Vehicle</label>
                                <select className='border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium' defaultValue="30">
                                    <option value="30">30 meter</option>
                                    <option value="50">50 meter</option>
                                </select> 
                            </div>
                            <div>
                                <label className='block text-[#283246] font-semibold mb-1'>Paused Ride</label>
                                <select className='border border-gray-300 bg-white rounded-xl p-2 w-full text-gray-400 font-medium' defaultValue="no">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select> 
                            </div>
                        </div>

                        <div className='mt-8 items-left text-start gap-2 flex'>
                            <button className='bg-gradient-to-r from-gray-600 to-[#283246] text-white w-40'>Save</button>
                            <button className='border border-[#283246] rounded-xl text-[#283246] w-40'>Cancel</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AddFleet