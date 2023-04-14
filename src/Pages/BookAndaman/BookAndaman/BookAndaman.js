import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import RightSideAndaman from '../RightSideAndaman/RightSideAndaman';
import './BookAndaman.css'
import { Link } from 'react-router-dom';

const BookAndaman = () => {
    const [adultsQty, setAdultsQty] = useState(1)
    const [infantsQty, setInfantQty] = useState(0)
    const AdultPlusHandler = () => {
        const qty = adultsQty + 1
        setAdultsQty(qty)
    }
    const AdultMinusHandler = () => {
        if (adultsQty > 1) {
            const qty = adultsQty - 1
            setAdultsQty(qty)
        }
    }
    const infantPlusHandler = () => {
        const qty = infantsQty + 1
        setInfantQty(qty)
    }
    const infantMinusHandler = () => {
        if (infantsQty > 0) {
            const qty = infantsQty - 1
            setInfantQty(qty)
        }
    }
    return (
        <div className=' bg-[#F9F9F9] pb-24 h-full'>
            <div className='lg:mx-12 mx-3 lg:pt-5 pt-7'>
                <div className='lg:flex lg:gap-x-7'>
                    <div className='stickyStyle'>
                        <h1 className='text-3xl font-semibold lg:mt-3 lg:mb-5 mb-8 '>Book Your Andaman Ferry</h1>
                        <div className='lg:hidden mb-14'>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/09/banner_01.jpg?compress=true&quality=90&w=400&dpr=1.5" alt="" />
                        </div>
                        <div className='relative bg-white p-3 shadow-md rounded-md '>
                            <div className='lg:flex lg:gap-x-12 hidden '>
                                <div >
                                    <h1 className='font-[500] inline'>Select Passangers</h1>

                                </div>
                                <div>
                                    <h1 className='font-[500] text-[#B4B4B4]'>Adults(Above 1 Year) </h1>
                                    <div className='flex lg:my-3 font-semibold border-[1.5px] rounded-md '>
                                        <div onClick={AdultMinusHandler} className='bg-[#F0F0F0] lg:py-3 lg:px-4 cursor-pointer text-[#B4B4B4] hover:text-black'>
                                            <AiOutlineMinus />
                                        </div>
                                        <div className='mt-[-4px] lg:py-3 lg:px-6'>
                                            {adultsQty}
                                        </div>
                                        <div onClick={AdultPlusHandler} className='bg-[#F0F0F0] lg:py-3 lg:px-4 cursor-pointer text-[#B4B4B4] hover:text-black'>
                                            <AiOutlinePlus />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-[500] text-[#B4B4B4]'>Infants (Below 12 months)</h1>
                                    <div className='flex lg:my-3 font-semibold border-[1.5px] rounded-md lg:mx-4'>
                                        <div onClick={infantMinusHandler} className='bg-[#F0F0F0] lg:py-3 lg:px-4 cursor-pointer text-[#B4B4B4] hover:text-black'>
                                            <AiOutlineMinus />
                                        </div>
                                        <div className='mt-[-4px] lg:py-3 lg:px-7'>
                                            {infantsQty}
                                        </div>
                                        <div onClick={infantPlusHandler} className='bg-[#F0F0F0] lg:py-3 lg:px-4 cursor-pointer text-[#B4B4B4] hover:text-black'>
                                            <AiOutlinePlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* small device */}
                            <div className='lg:hidden  '>
                                <div >
                                    <h1 className='font-[500]'>Select Passangers</h1>

                                </div>
                                <div className='flex justify-between mt-1'>
                                    <div>
                                        <h1 className='text-[10px] font-[400] text-[#B4B4B4] '>Adults(Above 1 Year) </h1>
                                        <div className='flex my-3 font-semibold border rounded-md '>
                                            <div onClick={AdultMinusHandler} className='bg-[#F0F0F0] py-3 px-3 cursor-pointer text-[#B4B4B4] hover:text-black'>
                                                <AiOutlineMinus />
                                            </div>
                                            <div className='mt-[-4px] py-3 px-5'>
                                                {adultsQty}
                                            </div>
                                            <div onClick={AdultPlusHandler} className='bg-[#F0F0F0] py-3 px-3 cursor-pointer text-[#B4B4B4] hover:text-black'>
                                                <AiOutlinePlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className=' text-[10px] font-[400] text-[#B4B4B4]'>Infants (Below 12 months)</h1>
                                        <div className='flex my-3 font-semibold border rounded-md '>
                                            <div onClick={infantMinusHandler} className='bg-[#F0F0F0] py-3 px-3 cursor-pointer text-[#B4B4B4] hover:text-black'>
                                                <AiOutlineMinus />
                                            </div>
                                            <div className='mt-[-4px] py-3 px-5'>
                                                {infantsQty}
                                            </div>
                                            <div onClick={infantPlusHandler} className='bg-[#F0F0F0] py-3 px-3 cursor-pointer text-[#B4B4B4] hover:text-black'>
                                                <AiOutlinePlus />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='' />
                            <h1 className='mt-3 font-[500]'>Select Trip(s)</h1>
                            <form className='ml-3 mt-3'>
                                <h1 className='font-[500]'>Trip 1</h1>
                                <hr className='ml-10 border-[0.5px]' />
                                <div className='mt-2 lg:flex gap-x-5 '>
                                    <div className='lg:w-[33%]'>
                                        <h1 className='text-[#B4B4B4]'>From</h1>
                                        <select name="" id="" className='mt-2 border  py-3 px-2 w-full rounded-md hover:shadow focus:outline-none'>
                                            <option value="PORT BLAIR">Port Blair</option>
                                            <option value=" Neil Island (Shaheed Dweep)"> Neil Island (Shaheed Dweep)</option>
                                        </select>
                                    </div>
                                    <div className='lg:w-[33%]'>
                                        <h1 className='text-[#B4B4B4]'>To</h1>
                                        <select name="" id="" className='mt-2 border  py-3 px-2 w-full rounded-md hover:shadow focus:outline-none'>
                                            <option value="PORT BLAIR">Port Blair</option>
                                            <option selected value="Havelock (Swaraj Dweep)">Havelock (Swaraj Dweep)</option>
                                        </select>
                                    </div>
                                    <div className='lg:w-[33%]'>
                                        <h1 className='text-[#B4B4B4]'>Date of Journey</h1>
                                        <input type='date' className='mt-2 border  py-3 px-2 w-full rounded-md hover:shadow focus:outline-none' required />
                                    </div>
                                </div>
                                <div className='mb-10 mt-7 flex justify-center'>
                                    <p className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 '>
                                        <AiOutlinePlus size={20} className='rounded-full bg-[#01B46C]  text-white inline' /> <span className='text-[#01B46C] font-semibold '>ADD ROUND TRIP</span>
                                    </p>
                                </div>
                                <Link to='/chooseRoute' className='flex justify-center'>
                                    <button type="submit" className=' border bottom-[-20px]  absolute w-48 py-2 bg-[#01B46C] font-bold text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 '>Search</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                    <div>
                        <RightSideAndaman></RightSideAndaman>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default BookAndaman;