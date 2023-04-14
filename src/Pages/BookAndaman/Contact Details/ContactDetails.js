import React from 'react';

const ContactDetails = () => {
    return (
        <div className=' bg-[#F9F9F9] pb-24'>
            <div className='flex justify-center py-8 '>

                <div>
                    <h1 className='bg-[#A8B8F7]  rounded-full  text-white font-semibold w-3 pl-1  text-[10px]'>1</h1>
                    <hr className='border-[1.5px] border-[#A8B8F7] mt-1 lg:w-44 w-28' />
                    <h1 className=' lg:text-base text-sm'>Choose Route</h1>
                </div>
                <div>
                    <h1 className='bg-[#01B46C]  rounded-full  text-white font-semibold w-3 pl-1  text-[10px]'>2</h1>
                    <hr className='border-[1.5px] border-[#01B46C] mt-1 lg:w-44 w-28' />
                    <h1 className='lg:font-bold font-semibold lg:text-base text-sm'>Select Ferry</h1>

                </div>
                <div>
                    <h1 className='bg-[#A8B8F7]  rounded-full  text-white font-semibold w-3 pl-1  text-[10px]'>3</h1>
                    <hr className='border-[1.5px] border-[#A8B8F7] mt-1 lg:w-44 w-28' />
                    <h1 className='lg:text-base text-sm'>Checkout</h1>
                </div>
            </div>
            <div className='lg:flex gap-x-10  lg:mx-12 mx-3 mt-1'>
                <div className='lg:w-[68%] '>
                    <h1 className='lg:text-3xl text-xl font-bold mb-3'>Add Traveller(s) Details
                    </h1>
                    <div className='bg-white lg:p-5 p-3 lg:pb-8 pb-8 rounded-md' >
                        <h1 className='font-semibold text-lg my-2'>Adult 1</h1>
                        {/* for pc */}
                        <div className=' lg:flex lg:gap-x-3 hidden'>

                            <label>
                                <span className="text-sm font-medium text-[#8F8F8F]">Title</span>

                                <select name="title" className='w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md' required>
                                    <option value="Select">Select</option>
                                    <option value="Mr">Mr</option>
                                    <option value="Master">Master</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                </select>
                            </label>
                            <label>
                                <span className="text-sm font-medium text-[#8F8F8F]">Full Name</span>

                                <input name='name' type="text" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md" required placeholder='Full Name' />
                            </label>
                            <label>
                                <span className="text-sm font-medium text-[#8F8F8F]">Gender</span>

                                <select name="gender" className='w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md' required>
                                    <option value="Select">Select</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Other">Other</option>

                                </select>
                            </label>
                            <label>
                                <span className="text-sm font-medium text-[#8F8F8F]">Age <span className='text-[10px]'>(Years)</span></span>

                                <input name='age' type="number" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md" required placeholder='Age' />
                            </label>
                            <label>
                                <span className="text-sm font-medium text-[#8F8F8F]">Nationality</span>

                                <select name="gender" className='w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md' required>

                                    <option value="afghan">India</option>
                                    <option value="afghan">Bangladesh</option>
                                    <option value="afghan">Afghan</option>
                                    <option value="albanian">Albanian</option>
                                    <option value="algerian">Algerian</option>
                                    <option value="american">American</option>
                                    <option value="andorran">Andorran</option>
                                    <option value="angolan">Angolan</option>
                                    <option value="antiguans">Antiguans</option>
                                    <option value="argentinean">Argentinean</option>

                                </select>
                            </label>

                        </div>
                        {/* for mobile */}
                        <div className=' lg:hidden block'>

                            <div className='flex gap-x-4'>
                                <label>
                                    <span className="text-sm font-medium text-[#8F8F8F]">Title</span>

                                    <select name="title" className='w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md' required>
                                        <option value="Select">Select</option>
                                        <option value="Mr">Mr</option>
                                        <option value="Master">Master</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                    </select>
                                </label>
                                <label>
                                    <span className="text-sm font-medium text-[#8F8F8F]">Full Name</span>

                                    <input name='name' type="text" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md" required placeholder='Full Name' />
                                </label>
                            </div>
                            <div className='flex gap-x-4 mt-2'>
                                <label>
                                    <span className="text-sm font-medium text-[#8F8F8F]">Gender</span>

                                    <select name="gender" className='w-24 px-2 py-2 hover:shadow focus:outline-none border rounded-md' required>
                                        <option value="Select">Select</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Other">Other</option>

                                    </select>
                                </label>
                                <label>
                                    <span className="text-sm font-medium text-[#8F8F8F]">Age <span className='text-[10px]'>(Years)</span></span>

                                    <input name='age' type="number" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md" required placeholder='Age' />
                                </label>
                                <label>
                                    <span className="text-sm font-medium text-[#8F8F8F]">Nationality</span>

                                    <select name="gender" className='w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md' required>

                                        <option value="afghan">India</option>
                                        <option value="afghan">Bangladesh</option>
                                        <option value="afghan">Afghan</option>
                                        <option value="albanian">Albanian</option>
                                        <option value="algerian">Algerian</option>
                                        <option value="american">American</option>
                                        <option value="andorran">Andorran</option>
                                        <option value="angolan">Angolan</option>
                                        <option value="antiguans">Antiguans</option>
                                        <option value="argentinean">Argentinean</option>

                                    </select>
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className='relative'>
                        <h1 className='lg:text-3xl text-xl font-bold mb-3 lg:mt-14 mt-10'>Add Contact Details
                        </h1>
                        <div className='bg-white lg:p-5 p-3 lg:pb-8 pb-8 rounded-md' >
                            {/* for pc */}
                            <div className='lg:flex hidden gap-x-6'>
                                <div className=''>
                                    <label>
                                        <span className="text-sm font-medium text-[#8F8F8F]">Full Name <span className='text-red-500'>*</span></span>

                                        <input name='name' type="text" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md mt-1 mb-3" required placeholder='Full Name' />
                                    </label>
                                    <label >
                                        <span className="text-sm font-medium text-[#8F8F8F] ">Mobile Number <span className='text-red-500'>*</span></span>
                                        <div className='lg:flex lg:gap-x-2'>
                                            <select name="mobile" className=' px-2 py-2 hover:shadow focus:outline-none border rounded-md w-24 mt-1' required>
                                                <option value="Select">IN +91</option>
                                                <option value="Female">AF +93</option>
                                                <option value="Male">BD +880</option>
                                                <option value="Other">AT +43</option>

                                            </select>
                                            <input name='mobile' type="number" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md mt-1" required placeholder='Mobile No' />
                                        </div>
                                    </label>
                                </div>
                                <div className=''>
                                    <label>
                                        <span className="text-sm font-medium text-[#8F8F8F]">Email <span className='text-red-500'>*</span></span>

                                        <input name='email' type="email" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md mt-1 mb-3" required placeholder='Email' />
                                    </label>
                                    <label>
                                        <span className="text-sm font-medium text-[#8F8F8F] ">Alternate Mobile Number <span className='text-red-500'>*</span></span>
                                        <div className='lg:flex lg:gap-x-2'>
                                            <select name="mobile" className=' px-2 py-2 hover:shadow focus:outline-none border rounded-md w-24 mt-1' required>
                                                <option value="Select">IN +91</option>
                                                <option value="Female">AF +93</option>
                                                <option value="Male">BD +880</option>
                                                <option value="Other">AT +43</option>

                                            </select>
                                            <input name='mobile' type="number" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md mt-1" required placeholder='Mobile No' />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            {/* for mobile */}
                            <div className='lg:hidden '>
                                <div className='flex gap-x-5'>
                                    <label>
                                        <span className="text-sm font-medium text-[#8F8F8F]">Full Name <span className='text-red-500'>*</span></span>

                                        <input name='name' type="text" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md mt-1" required placeholder='Full Name' />
                                    </label>
                                    <label>
                                        <span className="text-sm font-medium text-[#8F8F8F]">Email <span className='text-red-500'>*</span></span>

                                        <input name='email' type="email" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md mt-1" required placeholder='Email' />
                                    </label>

                                </div>
                                <div className='my-3'>
                                    <label >
                                        <span className="text-sm font-medium text-[#8F8F8F] ">Mobile Number <span className='text-red-500'>*</span></span>
                                        <div className='flex gap-x-2'>
                                            <select name="mobile" className=' px-2 py-2 hover:shadow focus:outline-none border rounded-md w-24 mt-1' required>
                                                <option value="Select">IN +91</option>
                                                <option value="Female">AF +93</option>
                                                <option value="Male">BD +880</option>
                                                <option value="Other">AT +43</option>

                                            </select>
                                            <input name='mobile' type="number" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md mt-1" required placeholder='Mobile No' />
                                        </div>
                                    </label>
                                </div>
                                <div className=''>
                                    <label>
                                        <span className="text-sm font-medium text-[#8F8F8F] ">Alternate Mobile Number <span className='text-red-500'>*</span></span>
                                        <div className='flex gap-x-2'>
                                            <select name="mobile" className=' px-2 py-2 hover:shadow focus:outline-none border rounded-md w-24 mt-1' required>
                                                <option value="Select">IN +91</option>
                                                <option value="Female">AF +93</option>
                                                <option value="Male">BD +880</option>
                                                <option value="Other">AT +43</option>

                                            </select>
                                            <input name='mobile' type="number" className="w-full px-2 py-2 hover:shadow focus:outline-none border rounded-md mt-1" required placeholder='Mobile No' />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className='lg:my-7 my-10 flex gap-x-2'>
                                <input type="checkbox" className="checkbox checkbox-success w-5 h-5" />
                                <h1 className='lg:mt-[-3px] mt-[-10px]'><span className='text-[#8F8F8F]'>Agree w/ </span>
                                    <span className='text-[#01B46C]'>terms and conditions </span> <span className='text-[#8F8F8F]'>and the</span><span className='text-[#01B46C]'>cancellation policy</span>.</h1>
                            </div>

                        </div>


                        <div className='flex justify-center '>
                            <button type="submit" className=' border  bottom-[-20px] absolute w-48 py-2 bg-[#01B46C] font-bold text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 '>Search</button>
                        </div>
                    </div>
                </div>
                <div className='lg:block hidden lg:w-[30%]'>
                    <h1 className='text-3xl font-bold mb-3'>Trip Summary
                    </h1>
                    <div className='bg-white pl-3 py-4'>
                        <h1 className='font-semibold'><span className='border-b-[1.5px] border-black pb-3'>Trip 1:</span> <span className='bg-[#D9F4E9]  p-[3px] text-[14px] rounded-sm ml-5'>PORTBLAIR → HAVELOCK</span></h1>
                        <div className='mt-7 ml-5'>
                            <h1 >Date: <span className='font-semibold ml-2'>19 Apr 2023</span></h1>
                            <h1 className='my-3'>Time: <span className='font-semibold ml-2'>6:00 AM - 7:30 AM</span><span><i> (90 Minutes)</i></span></h1>
                            <h1>Ferry: <span className='font-semibold ml-2'>Makruzz Pearl</span> <span><i>(Premium Class)</i></span></h1>
                            <h1 className='my-3'>Total Fare: <span className='font-semibold ml-2'>1 × Adult(₹1,050) = ₹1,050</span></h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactDetails;