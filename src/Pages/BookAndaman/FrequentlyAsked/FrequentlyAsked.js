import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


const FrequentlyAsked = () => {
    return (
        <div className='lg:my-10 '>
            <h1 className='lg:text-3xl text-[20px] font-semibold lg:my-7 my-10  text-[#707070] lg:ml-2 lg:text-left text-center'>Frequenty Asked Questions</h1>
            <div>
                <Accordion allowZeroExpanded={true}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How to book a ferry from Port Blair?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                The best way to book ferries is to do it online on a platform like Go2andaman, so you arrive with a ticket in hand and have a hassle-free travel experience. If you’re already there on the islands and the internet is not working well, you could book a private ferry by visiting the Ferry Operator’s office. It can be a tedious task to find an operator’s office since different ferries have offices at different places. Moreover, you may end up losing precious time.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What is the distance between Port Blair airport and the jetty?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                We recommend that you reach the jetty at-least 45 mins prior to the departing time so you have sufficient time for boarding. If travelling with children or senior citizens, 1 hour prior would be ideal. The boarding gates close 30 mins before departure.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What is the distance between Port Blair airport and the jetty?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                The distance between Port Blair airport and Haddo jetty (private ferry boarding point) is 5 – 6 km. It takes about 15-20 mins via auto/taxi to get there. If travelling by government ferry, go to the Phoenix Bay jetty and this should be about a 10-15 minute ride. <br /> <br />
                                Note: Port of boarding for ferries sometimes change, so please verify the jetty for boarding a day prior to your travel date.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='my-5 flex justify-end'>
                <h1 className='text-red-500 hover:cursor-pointer hover:text-green-500'>View All</h1>
            </div>
            <div className='mt-5 bg-[#ECF5F2]  lg:px-7 px-4 lg:py-7 py-8 rounded-md'>
                <h1 className='font-semibold text-[20px] text-[#707070]'>We provide ferry tickets for all hi-speed ferry companies in Andaman</h1>
                <div className='flex lg:gap-7 gap-3 lg:mt-8 mt-10'>
                    <div>
                        <img className='lg:w-[120px] lg:h-[110px] w-[70px] h-[70px]' src="https://ocean.go2andaman.com/wp-content/uploads/2022/02/Makruzz-Logos.png?compress=true&quality=90&w=1300&dpr=1.5" alt="" />
                        <h1 className='font-semibold lg:text-[18px]  text-[14px]  text-center'>Makruzz</h1>
                    </div>
                    <div>
                        <img className='lg:w-[120px] lg:h-[110px] w-[70px] h-[70px]' src="https://ocean.go2andaman.com/wp-content/uploads/2022/02/SL-Logos.png?compress=true&quality=90&w=1300&dpr=1.5" alt="" />
                        <h1 className='font-semibold lg:text-[18px]  text-[14px]  text-center'>Nautika</h1>
                    </div>
                    <div>
                        <img className='lg:w-[120px] lg:h-[110px] w-[70px] h-[70px]' src="https://ocean.go2andaman.com/wp-content/uploads/2022/02/GO-Logos.png?compress=true&quality=90&w=1300&dpr=1.5" alt="" />
                        <h1 className='font-semibold lg:text-[18px]  text-[14px]  text-center'>Green Ocean
                        </h1>
                    </div>
                    <div>
                        <img className='lg:w-[120px] lg:h-[110px] w-[70px] h-[70px]' src="https://ocean.go2andaman.com/wp-content/uploads/2022/02/ITT-Logos.png?compress=true&quality=90&w=1300&dpr=1.5" alt="" />
                        <h1 className='font-semibold lg:text-[18px]  text-[14px] text-center'>ITT Majestic
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='lg:text-3xl text-[20px] font-semibold lg:my-7 my-10  text-[#707070] lg:ml-2 lg:text-left text-center'>Why Book Ferries with Go2andaman
                </h1>
                <div className='flex gap-3 ml-3'>
                    <p className='bg-[#F9EAEC] border-2 border-[#F66F82] rounded-full px-3 lg:py-1 py-1 lg:h-auto h-[36px] text-[#F66F82] font-bold'>1</p>
                    <h1 className='text-[#4A4A4A] lg:mt-[1px] mt-[-7px] text-lg'>Pay in Full only after receiving Confirmed Tickets</h1>
                </div>
                <hr className='my-4 ml-3 border-b-[1px]' />
                <div className='flex gap-3 ml-3'>
                    <p className='bg-[#F9EAEC] border-2 border-[#F66F82] rounded-full px-3 lg:py-1 py-1  lg:h-auto h-[36px] text-[#F66F82] font-bold'>2</p>
                    <h1 className='text-[#4A4A4A] mt-[1px] text-lg'>Simplest Ferry Booking Experience</h1>
                </div>
                <hr className='my-4 ml-3 border-b-[1px]' />
                <div className='flex gap-3 ml-3'>
                    <p className='bg-[#F9EAEC] border-2 border-[#F66F82] rounded-full px-3 py-1 text-[#F66F82] font-bold'>3</p>
                    <h1 className='text-[#4A4A4A] mt-[1px] text-lg'>Easy Refunds</h1>
                </div>
                <hr className='my-4 ml-3 border-b-[1px]' />
                <div className='flex gap-3 ml-3'>
                    <p className='bg-[#F9EAEC] border-2 border-[#F66F82] rounded-full px-3 lg:py-1 py-1  lg:h-auto h-[36px] text-[#F66F82] font-bold'>4</p>
                    <h1 className='text-[#4A4A4A] mt-[1px] text-lg'>Great Email & Phone Support</h1>
                </div>
                <hr className='my-4 ml-3 border-b-[1px]' />
                <div className='flex gap-3 ml-3'>
                    <p className='bg-[#F9EAEC] border-2 border-[#F66F82] rounded-full px-3 py-1 lg:h-auto h-[36px] text-[#F66F82] font-bold'>5</p>
                    <h1 className='text-[#4A4A4A] lg:mt-[1px] mt-[-7px] text-lg'>International & Domestic Payments Accepted</h1>
                </div>
                <hr className='my-4 ml-3 border-b-[1px]' />
                <div className='flex gap-3 ml-3'>
                    <p className='bg-[#F9EAEC] border-2 border-[#F66F82] rounded-full px-3 py-1 text-[#F66F82] font-bold'>6</p>
                    <h1 className='text-[#4A4A4A] mt-[1px] text-lg'>Money Safe Guarantee</h1>
                </div>

            </div>
        </div>
    );
};

export default FrequentlyAsked;