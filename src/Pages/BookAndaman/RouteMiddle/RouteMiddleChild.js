import React, { useState } from 'react';
import Carousel from 'react-grid-carousel';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const RouteMiddleChild = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='my-5'>
            <div className='border p-3 rounded-md hover:bg-[#F9F9F9]'>
                <div className='flex justify-between'>
                    <div>
                        <h1><span className='text-[15px]'>Ferry:</span>  <span className='text-[#2D54AF] font-semibold lg:text-base text-sm'>Makruzz Pearl</span></h1>
                        <div className='flex gap-x-7 my-3 lg:text-base text-sm'>
                            <div>
                                <h1><i>Departure</i></h1>
                                <h1 className='text-[#F7772D] font-semibold'>6:00 am</h1>
                            </div>
                            <div>
                                <BsArrowRight size={25} color='#afafaf' className='mt-4' />
                            </div>
                            <div>
                                <h1><i>Arrival</i></h1>
                                <h1 className='text-[#F7772D] font-semibold'>7:30 am</h1>
                            </div>
                        </div>
                        <h1 className='font-[500] lg:text-[14px] text-[12px]'>PORTBLAIR → HAVELOCK</h1>
                    </div>
                    <div>
                        <div className='flex justify-end'>
                            <h1 className='text-xs'>Top Rated</h1>

                            <img className='w-2  ml-2' src="https://g2a.wordpoets.com/wp-content/uploads/2021/03/Energy_light.svg" alt="" />
                            <img className='w-2 ' src="https://g2a.wordpoets.com/wp-content/uploads/2021/03/Energy-1.svg" alt="" />
                            <img className='w-2 ' src="https://g2a.wordpoets.com/wp-content/uploads/2021/03/Energy-1.svg" alt="" />

                        </div>
                        <h1 className={`text-right font-semibold mt-2 text-[#F7772D] ${open ? 'hidden' : 'block'}`}>₹1,050</h1>
                        <button onClick={() => setOpen(true)} className={`mt-5 border  lg:py-[6px] py-[4px] lg:px-4 px-2 bg-[#01B46C] font-semibold text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 lg:text-base text-sm hover:shadow-md ${open ? 'hidden' : 'block'}`}>Select Ferry</button>
                    </div>

                </div>
                <div className={`${open ? 'block' : 'hidden'}`}>
                    <div className='mt-4'>
                        <Carousel cols={1} rows={1} loop>
                            <Carousel.Item>
                                <img width="100%" src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/CD7189F0-53C7-4C46-A935-11B3133D6FB4_4_5005_c.jpeg?dpr=1.0&q=70&compress=true&quality=90&w=576" alt='' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/1DD36AC9-E6EA-4450-BDFA-8BD805AB81F0_4_5005_c.jpeg?dpr=1.0&q=70&compress=true&quality=90&w=576" alt='' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/B425E232-B068-48D0-88C2-8254523A9CF1_4_5005_c.jpeg?dpr=1.0&q=70&compress=true&quality=90&w=576" alt='' />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div>
                        <div className='flex justify-center mt-3'>
                            <div className='text-center'>
                                <h1>Select your Seat types</h1>
                                <input type="radio" name="radio-5" className="radio radio-success my-2" checked />
                                <div className='bg-[#01B46C] px-2  py-3 rounded-sm w-20  mx-auto text-white'>
                                    <div>
                                        <h1 className='font-semibold'>₹1,050</h1>
                                        <p>Premium</p>
                                    </div>
                                </div>
                                <div className='bg-[#D3DBF9] px-[2px]  py-1 rounded-sm w-20  mx-auto text-black mt-1'>
                                    <div>
                                        <p className='text-[10px]'>recommended</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F1F1F1] mt-4 p-3'>
                        <div className='flex gap-2'>
                            <img src="https://www.go2andaman.com/wp-content/themes/monomyth-enterprise-master/images/icons/lace.svg" alt="" />
                            <h1 className='font-medium lg:text-base text-sm'>Amenities - <span className='text-[#01B46C]'> <i>Premium</i>  </span></h1>
                        </div>
                        <hr className='my-3 border-[1px]' />
                        <div className='flex lg:gap-x-[30%] gap-x-[10%]'>
                            <div>
                                <div className='flex gap-x-2'>
                                    <img src="https://www.go2andaman.com/wp-content/themes/monomyth-enterprise-master/images/icons/confirmation-active.svg" alt="" />
                                    <h1 className='text-xs text-[#2D54AF]'>High-Speed Ferry</h1>
                                </div>
                                <div className='flex gap-x-2 my-1'>
                                    <img src="https://www.go2andaman.com/wp-content/themes/monomyth-enterprise-master/images/icons/confirmation-active.svg" alt="" />
                                    <h1 className='text-xs text-[#2D54AF]'>Air Conditioned</h1>
                                </div>
                                <div className='flex gap-x-2'>
                                    <img src="https://www.go2andaman.com/wp-content/themes/monomyth-enterprise-master/images/icons/confirmation-active.svg" alt="" />
                                    <h1 className='text-xs text-[#2D54AF]'>Cafeteria</h1>
                                </div>
                                <div className='flex gap-x-2 my-1'>
                                    <img src="https://www.go2andaman.com/wp-content/themes/monomyth-enterprise-master/images/icons/confirmation-active.svg" alt="" />
                                    <h1 className='text-xs text-[#2D54AF]'>Premium Seating</h1>
                                </div>
                                <div className='flex gap-x-2'>
                                    <img src="https://ocean.go2andaman.com/wp-content/themes/monomyth-enterprise-master/images/icons/confirmation.png?quality=90&compress=true" alt="" />
                                    <h1 className='text-xs text-[#9b9b9b]'>Open Deck Access</h1>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-x-2'>
                                    <img src="https://ocean.go2andaman.com/wp-content/themes/monomyth-enterprise-master/images/icons/confirmation.png?quality=90&compress=true" alt="" />
                                    <h1 className='text-xs text-[#9b9b9b]'>Extra Leg Space</h1>
                                </div>
                                <div className='flex gap-x-2 my-1'>
                                    <img src="https://ocean.go2andaman.com/wp-content/themes/monomyth-enterprise-master/images/icons/confirmation.png?quality=90&compress=true" alt="" />
                                    <h1 className='text-xs text-[#9b9b9b]'>Exclusive Cabin</h1>
                                </div>
                                <div className='flex gap-x-2'>
                                    <img src="https://ocean.go2andaman.com/wp-content/themes/monomyth-enterprise-master/images/icons/confirmation.png?quality=90&compress=true" alt="" />
                                    <h1 className='text-xs text-[#9b9b9b]'>Snacks Included</h1>
                                </div>
                                <div className='flex gap-x-2 my-1'>
                                    <img src="https://ocean.go2andaman.com/wp-content/themes/monomyth-enterprise-master/images/icons/confirmation.png?quality=90&compress=true" alt="" />
                                    <h1 className='text-xs text-[#9b9b9b]'>Meal Included</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div className='flex justify-center gap-4 my-5'>
                            <div>
                                <button onClick={() => setOpen(false)} className=' border  py-[4px] px-10  font-semibold text-[#9b9b9b] rounded-sm  bg-[#E5E5E5]'>Close</button>
                            </div>

                            <Link to="/contact-details">
                                <button className=' border  py-[6px] px-4 bg-[#01B46C] font-semibold text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-md text-sm '>Proceed With Premium</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouteMiddleChild;