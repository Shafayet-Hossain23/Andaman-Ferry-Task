import React from 'react';
import Carousel from 'react-grid-carousel';
import StarRatings from 'react-star-ratings';


const Reviews = () => {

    return (
        <div className='mt-7 mb-4'>
            <div className='flex lg:gap-x-2 p-3 bg-[#EDEDED] rounded-md'>
                <div className='px-2 py-1 hover:bg-[#c6c5c5] rounded-full hover:cursor-pointer text-[15px]'>All Reviews</div>
                <div className='px-2 py-1 hover:bg-[#c6c5c5] rounded-full hover:cursor-pointer'>
                    <img className='w-[23px] h-[23px]' src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-google-multicolor.svg" alt="" />
                </div>
                <div className='px-2 py-1 hover:bg-[#c6c5c5] rounded-full hover:cursor-pointer'>
                    <img className='w-[23px] h-[23px]' src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-tripadvisor-multicolor.svg" alt="" />
                </div>
                <div className='px-2 py-1 hover:bg-[#c6c5c5] rounded-full hover:cursor-pointer'>
                    <img className='w-[23px] h-[23px]' src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-facebook-multicolor.svg" alt="" />
                </div>
            </div>
            <div className='mt-3'>
                <Carousel cols={2} rows={1} gap={7} loop

                >
                    <Carousel.Item>
                        <div>
                            <div className='flex gap-3'>
                                <img className='w-[40px] h-[40px]' src="https://lh3.googleusercontent.com/a/AGNmyxZsQEjUZPNgR79laFgF8rmzmRBTeo7U_aSJT-gO=s240-c-c0x00000000-cc-rp-mo-br100" alt="" />
                                <h1 className='font-medium mt-2'>Anil Ramanatha</h1>
                            </div>
                            <div className=' mt-2'>
                                <StarRatings
                                    rating={5}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    starRatedColor="#FCBF02"
                                />
                            </div>
                            <div>
                                <p>Was Quick and Abhilash was really helpful. gave the correct details and helped with booking 5 mins... <br />  <span className='text-[#707070] hover:cursor-pointer hover:border-b border-black'>Read More</span></p>
                            </div>
                            <div className='flex gap-3 mt-3'>
                                <img className='w-[31px] h-[31px] mt-1' src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-google-multicolor.svg" alt="" />
                                <p>
                                    <h1 className='text-[12px] text-[#707070]'>Posted on</h1>
                                    <h1 className='text-blue-500 text-[14px] mt-[-5px]'>Google</h1>
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <div className='flex gap-3'>
                                <img className='w-[40px] h-[40px]' src="https://lh3.googleusercontent.com/a-/ACB-R5TFzVz-sjLlntNusOSBuzDZz-CcZA1IkQRhot9ummg=s240-c-c0x00000000-cc-rp-mo-br100" alt="" />
                                <h1 className='font-medium mt-2'>Shireesh Kahare</h1>
                            </div>
                            <div className=' mt-2'>
                                <StarRatings
                                    rating={5}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    starRatedColor="#FCBF02"
                                />
                            </div>
                            <div>
                                <p>Had great booking experience with the team. Super prompt and helpful. Very easy once you plan with Go2 Andaman ferry... <span className='text-[#707070] hover:cursor-pointer hover:border-b border-black'>Read More</span></p>
                            </div>
                            <div className='flex gap-3 mt-3'>
                                <img className='w-[31px] h-[31px] mt-1' src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-google-multicolor.svg" alt="" />
                                <p>
                                    <h1 className='text-[12px] text-[#707070]'>Posted on</h1>
                                    <h1 className='text-blue-500 text-[14px] mt-[-5px]'>Google</h1>
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <div className='flex gap-3'>
                                <img className='w-[40px] h-[40px]' src="https://lh3.googleusercontent.com/a-/ACB-R5TFzVz-sjLlntNusOSBuzDZz-CcZA1IkQRhot9ummg=s240-c-c0x00000000-cc-rp-mo-br100" alt="" />
                                <h1 className='font-medium mt-2'>Shireesh Kahare</h1>
                            </div>
                            <div className=' mt-2'>
                                <StarRatings
                                    rating={5}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    starRatedColor="#FCBF02"
                                />
                            </div>
                            <div>
                                <p>Had great booking experience with the team. Super prompt and helpful. Very easy once you plan with Go2 Andaman... <span className='text-[#707070] hover:cursor-pointer hover:border-b border-black'>Read More</span></p>
                            </div>
                            <div className='flex gap-3 mt-3'>
                                <img className='w-[31px] h-[31px] mt-1' src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-google-multicolor.svg" alt="" />
                                <p>
                                    <h1 className='text-[12px] text-[#707070]'>Posted on</h1>
                                    <h1 className='text-blue-500 text-[14px] mt-[-5px]'>Google</h1>
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <div className='flex gap-3'>
                                <img className='w-[40px] h-[40px]' src="https://lh3.googleusercontent.com/a-/ACB-R5RY5ZJvLszjO15d_9nrTibyJc7bV_qKO0T_gQMI4g=s240-c-c0x00000000-cc-rp-mo-br100" alt="" />
                                <h1 className='font-medium mt-2'>Suresh Pany</h1>
                            </div>
                            <div className=' mt-2'>
                                <StarRatings
                                    rating={5}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    starRatedColor="#FCBF02"
                                />
                            </div>
                            <div>
                                <p>I must admit that Go2Andamans helped me with my oncoming trip and they also helped me when one of my... <br /> <span className='text-[#707070] hover:cursor-pointer hover:border-b border-black'>Read More</span></p>
                            </div>
                            <div className='flex gap-3 mt-3'>
                                <img className='w-[31px] h-[31px] mt-1' src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-google-multicolor.svg" alt="" />
                                <p>
                                    <h1 className='text-[12px] text-[#707070]'>Posted on</h1>
                                    <h1 className='text-blue-500 text-[14px] mt-[-5px]'>Google</h1>
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <div className='flex gap-3'>
                                <img className='w-[40px] h-[40px]' src="https://lh3.googleusercontent.com/a-/ACB-R5RY5ZJvLszjO15d_9nrTibyJc7bV_qKO0T_gQMI4g=s240-c-c0x00000000-cc-rp-mo-br100" alt="" />
                                <h1 className='font-medium mt-2'>Suresh Pany</h1>
                            </div>
                            <div className=' mt-2'>
                                <StarRatings
                                    rating={5}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    starRatedColor="#FCBF02"
                                />
                            </div>
                            <div>
                                <p>I must admit that Go2Andamans helped me with my oncoming trip and they also helped me when one of my... <br /><span className='text-[#707070] hover:cursor-pointer hover:border-b border-black'>Read More</span></p>
                            </div>
                            <div className='flex gap-3 mt-3'>
                                <img className='w-[31px] h-[31px] mt-1' src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-google-multicolor.svg" alt="" />
                                <p>
                                    <h1 className='text-[12px] text-[#707070]'>Posted on</h1>
                                    <h1 className='text-blue-500 text-[14px] mt-[-5px]'>Google</h1>
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <div className='flex gap-3'>
                                <img className='w-[40px] h-[40px]' src="https://lh3.googleusercontent.com/a-/ACB-R5QfTcDRsHK3yhFScb8S1C1fF1Jjmj7HFt6tUP4s7sc=s240-c-c0x00000000-cc-rp-mo-ba3-br100" alt="" />
                                <h1 className='font-medium mt-2'>Aditya Prashad</h1>
                            </div>
                            <div className=' mt-2'>
                                <StarRatings
                                    rating={5}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    starRatedColor="#FCBF02"
                                />
                            </div>
                            <div>
                                <p>Great website to book Port Blair, Havelock & Neil Island ferries. You can book all big ferry carrier like blue ocean... <span className='text-[#707070] hover:cursor-pointer hover:border-b border-black'>Read More</span></p>
                            </div>
                            <div className='flex gap-3 mt-3'>
                                <img className='w-[31px] h-[31px] mt-1' src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-google-multicolor.svg" alt="" />
                                <p>
                                    <h1 className='text-[12px] text-[#707070]'>Posted on</h1>
                                    <h1 className='text-blue-500 text-[14px] mt-[-5px]'>Google</h1>
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>
            <div className='my-7'>
                <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/09/confirmation-banner_02.jpg?compress=true&quality=90&w=640&dpr=1.5" alt="" />
            </div>
        </div>
    );
};

export default Reviews;