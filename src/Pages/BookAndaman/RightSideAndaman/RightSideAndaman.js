import React from 'react';
import Reviews from '../Reviews/Reviews';
import FrequentlyAsked from '../FrequentlyAsked/FrequentlyAsked';
import Table from '../Table/Table';


const RightSideAndaman = () => {
    return (
        <div className='pt-3 '>
            <div className='lg:block hidden'>
                <img className='rounded-md' src="https://ocean.go2andaman.com/wp-content/uploads/2021/09/banner_01.jpg?compress=true&quality=90&w=1300&dpr=1.5" alt="" />
            </div>
            <div>
                <h1 className='lg:text-3xl text-[20px] font-semibold lg:my-7 my-14  text-[#707070] lg:ml-2 lg:text-left text-center'>Andaman Ferry Booking Process</h1>
                <div className='grid lg:grid-cols-7 grid-cols-2  lg:gap-0 gap-10 lg:mx-2 mx-[15%]'>
                    <div className=''>
                        <img className='' src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/research.svg?compress=true&quality=90&w=128&dpr=1.5" alt="" />
                        <h1 className='text-[#F7792D] font-medium text-[20px] my-3'>Search</h1>
                        <p className='lg:text-[14px] text-[13px]  '>and compare ferries from a large selection</p>
                    </div>
                    <div className='lg:block hidden'>
                        <img className='' src="https://ocean.go2andaman.com/wp-content/uploads/2021/10/Group-2072.png?quality=90&compress=true" alt="" />
                    </div>
                    <div className=''>
                        <img className='' src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/ticket-1.svg?compress=true&quality=90&w=128&dpr=1.5" alt="" />
                        <h1 className='text-[#F65E73] font-medium text-[20px] my-3'>Order</h1>
                        <p className='lg:text-[14px] text-[13px]  '>tickets by paying only ₹ 200 per ticket
                        </p>
                    </div>
                    <div className='lg:block hidden'>
                        <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/10/Group-2072.png?quality=90&compress=true" alt="" />
                    </div>
                    <div className=''>
                        <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/ticket.svg?compress=true&quality=90&w=128&dpr=1.5" alt="" />
                        <h1 className='text-[#5E7CF6] font-medium text-[20px] my-3'>Receive</h1>
                        <p className='lg:text-[14px] text-[13px]  '>your confirmed ticket in 3-4 hours</p>
                    </div>
                    <div className='lg:block hidden'>
                        <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/10/Group-2072.png?quality=90&compress=true" alt="" />
                    </div>
                    <div className=''>
                        <img className='mt-2' src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/pay.svg?compress=true&quality=90&w=128&dpr=1.5" alt="" />
                        <h1 className='text-[#01B46C] font-medium text-[20px] my-3'>Payment</h1>
                        <p className='lg:text-[14px] text-[13px] '>balance money in 24 hours & enjoy trip
                        </p>
                    </div>

                </div>
            </div>
            <div className='lg:mt-12 mt-10'>
                <img src="https://ocean.go2andaman.com/wp-content/uploads/2022/05/MobiKwik-Promo.png?compress=true&quality=90&w=640&dpr=1.5" alt="" />
            </div>
            <Reviews></Reviews>
            <div>
                <FrequentlyAsked></FrequentlyAsked>
            </div>
            <div>
                <Table></Table>
            </div>

        </div >
    );
};

export default RightSideAndaman;