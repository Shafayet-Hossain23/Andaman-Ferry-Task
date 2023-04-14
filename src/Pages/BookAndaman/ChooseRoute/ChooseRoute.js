import React from 'react';
import { FaFilter } from 'react-icons/fa';
import RouteMiddle from '../RouteMiddle/RouteMiddle';

const ChooseRoute = () => {
    return (
        <div className='bg-[#F9F9F9] pb-24'>
            <div className='flex justify-center py-8'>
                <div>
                    <h1 className='bg-[#01B46C]  rounded-full  text-white font-semibold w-3 pl-1  text-[10px]'>1</h1>
                    <hr className='border-[1.5px] border-[#01B46C] mt-1 lg:w-44 w-28' />
                    <h1 className='lg:font-bold font-semibold lg:text-base text-sm'>Choose Route</h1>

                </div>
                <div>
                    <h1 className='bg-[#A8B8F7]  rounded-full  text-white font-semibold w-3 pl-1  text-[10px]'>2</h1>
                    <hr className='border-[1.5px] border-[#A8B8F7] mt-1 lg:w-44 w-28' />
                    <h1 className=' lg:text-base text-sm'>Select Ferry</h1>
                </div>
                <div>
                    <h1 className='bg-[#A8B8F7]  rounded-full  text-white font-semibold w-3 pl-1  text-[10px]'>3</h1>
                    <hr className='border-[1.5px] border-[#A8B8F7] mt-1 lg:w-44 w-28' />
                    <h1 className='lg:text-base text-sm'>Checkout</h1>
                </div>
            </div>
            <div className='lg:flex gap-x-5 lg:mx-12 mx-3 mt-1'>
                <div className='lg:w-[23%] bg-white px-2 py-3 rounded-md h-full lg:block hidden stickyStyle'>
                    <div className='lg:flex justify-between '>
                        <h1 className='text-xl font-medium'>Filter Your Result</h1>
                        <FaFilter size={25} className='bg-[#01B46C] rounded-lg p-1 text-white mt-1'></FaFilter>
                    </div>
                    <div className='mt-4 ml-3 flex justify-between '>
                        <div>
                            <div className='lg:flex gap-x-2'>
                                <input type="radio" name="radio-5" className="radio radio-success" />
                                <h1 className='text-sm'>Morning To Evening</h1>
                            </div>
                            <div className='lg:flex gap-x-2 mt-3'>
                                <input type="radio" name="radio-5" className="radio radio-success " />
                                <h1 className='text-sm'>Evening To Morning </h1>
                            </div>
                        </div>
                        <div className='text-[#F7772D] text-sm mt-[-8px] cursor-pointer'>
                            Clear Filter
                        </div>
                    </div>
                </div>
                <div className='lg:w-[45%]'>
                    <RouteMiddle></RouteMiddle>
                </div>
                <div className='lg:w-[30%] stickyStyle'>
                    <h1 className='text-3xl font-bold lg:block hidden'>Trip Summary</h1>
                    <p className='bg-[#FFF2EB] p-2 mt-3 rounded-md'> Please select seats to proceed with booking.</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseRoute;