import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineBars } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import './Header.css'



const Header = () => {
    const [open, setOpen] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    return (
        <div className=''>
            <div className=' lg:flex justify-between lg:px-14 shadow-lg hidden mb-2'>
                <div>
                    <img src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg" alt="" />
                </div>
                <div>
                    <ul className='lg:flex lg:gap-x-10  lg:py-6 text-[15px]'>
                        <li>
                            <Link to="#" className='hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]'>Plan Your Trip</Link>
                        </li>
                        <li>
                            <Link to="#" className='hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]'>Book Experiences</Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]'>Book Andaman Ferry</Link>
                        </li>
                        <li>
                            <Link to="#" className='hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]'>Travel Blog</Link>
                        </li>
                        <li>
                            <Link to="#" className='hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]'>Contact Us</Link>
                        </li>

                        <li className='lg:block hidden'>
                            <div className={``}>
                                <p onClick={() => setOpenSearch(true)} className='lg:flex justify-end '>
                                    {
                                        openSearch ? <>
                                            <input type="text" className='outline-0 border-b border-black w-36 pl-2' placeholder='search here' />
                                            <AiOutlineSearch className='cursor-pointer border-b border-black' size={25} />
                                        </> :
                                            <><AiOutlineSearch className='cursor-pointer hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]' size={25} /> </>
                                    }
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='lg:hidden block px-4 shadow-md mb-2 '>
                <div className='flex justify-between'>
                    <div onClick={() => setOpen(!open)} className='pt-6 pb-5'>
                        {
                            open ? <RxCross1 className='cursor-pointer' size={35} /> :
                                <AiOutlineBars className='cursor-pointer' size={35} />
                        }
                    </div>
                    <div className='mr-[32%]'>
                        <div>
                            <img src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg" alt="" />
                        </div>
                    </div>
                </div>
                {
                    open && <div className='pb-5'>
                        <ul className='pl-[4%] pt-2 text-[15px] '>
                            <li className='py-4'>
                                <Link to="#" className='hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550] '>Plan Your Trip</Link>

                            </li>
                            <hr className='border-t border-black ' />
                            <li className='py-4'>
                                <Link to="#" className='hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]'>Book Experiences</Link>
                            </li>
                            <hr className='border-t border-black ' />
                            <li className='py-4'>
                                <Link to="/" className='hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]'>Book Andaman Ferry</Link>
                            </li>
                            <hr className='border-t border-black ' />
                            <li className='py-4'>
                                <Link to="#" className='hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]'>Travel Blog</Link>
                            </li>
                            <hr className='border-t border-black ' />
                            <li className='py-4'>
                                <Link to="#" className='hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]'>Contact Us</Link>
                            </li>
                            <hr className='border-t border-black ' />

                            <li className='py-14  flex justify-center'>

                                <input type="text" className='pl-2 py-1 border border-black w-[80%] rounded-full' placeholder='search' />
                                <AiOutlineSearch size={36} className='ml-3 cursor-pointer hover:text-[#01B46C] hover:transition duration-[1500ms] ease-in-out font-[550]' />

                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div >
    );
};

export default Header;