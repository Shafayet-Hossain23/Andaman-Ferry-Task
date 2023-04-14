import React from 'react';
import './Table.css'

const Table = () => {
    return (
        <div className='lg:mt-5 mt-10 '>
            <div className="overflow-x-auto ">
                <table className=" table table-compact w-full">
                    {/* head*/}
                    <thead className='text-white'>
                        <tr>

                            <th className='bg-[#0053B3] text-center'>Ferry Operator</th>
                            <th className='bg-[#0053B3] text-center'>Timings</th>
                            <th className='bg-[#0053B3] text-center'>Open Booking Window</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td className='text-center font-medium text-green-500'>
                                Port Blair to Havelock
                            </td>
                            <td></td>
                        </tr>

                        <tr className='text-center active text-[#0053B9]'>

                            <td>Green Ocean</td>
                            <td>07:00 AM to 09:15 AM</td>
                            <td>30th April 2023</td>
                        </tr>

                        <tr className="text-center text-[#0053B9]">

                            <td>Nautika</td>
                            <td>07.30 AM to 09:00 AM</td>
                            <td>30th June 2023</td>
                        </tr>

                        <tr className='text-center active text-[#0053B9]'>

                            <td>Makruzz</td>
                            <td>08:00 AM to 09:30 AM</td>
                            <td>31st March 2023</td>
                        </tr>
                        <tr className='text-center text-[#0053B9]'>

                            <td>ITT Majestic</td>
                            <td>08:30 AM to 10:00 AM</td>
                            <td>31st March 2023</td>
                        </tr>

                        <tr className='text-center active text-[#0053B9]'>

                            <td>Makruzz</td>
                            <td>10.45 AM to 12.15 PM</td>
                            <td>31st March 2023
                            </td>
                        </tr>
                        <tr className='text-center text-[#0053B9]'>

                            <td>Nautika</td>
                            <td>11:45 AM to 01:15 PM</td>
                            <td>30th June 2023</td>
                        </tr>
                        <tr className='text-center active text-[#0053B9]'>

                            <td>Green Ocean</td>
                            <td>11:45 AM to 01:15 PM</td>
                            <td>30th June 2023</td>
                        </tr>

                        <tr className='text-center text-[#0053B9]'>

                            <td>ITT Majestic</td>
                            <td>01:45 PM to 03:45 PM</td>
                            <td>31st March 2023</td>
                        </tr>

                        <tr className="text-center active text-[#0053B9]">

                            <td>Makruzz</td>
                            <td>102:00 PM to 03.30 PM	</td>
                            <td>31st March 2023

                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='text-center font-medium text-green-500'>
                                Havelock To Neil Island
                            </td>
                            <td></td>
                        </tr>
                        <tr className='text-center active text-[#0053B9]'>

                            <td>Green Ocean</td>
                            <td>07:00 AM to 09:15 AM</td>
                            <td>30th April 2023</td>
                        </tr>

                        <tr className="text-center text-[#0053B9]">

                            <td>Nautika</td>
                            <td>07.30 AM to 09:00 AM</td>
                            <td>30th June 2023</td>
                        </tr>

                        <tr className='text-center active text-[#0053B9]'>

                            <td>Makruzz</td>
                            <td>08:00 AM to 09:30 AM</td>
                            <td>31st March 2023</td>
                        </tr>
                        <tr className='text-center text-[#0053B9]'>

                            <td>ITT Majestic</td>
                            <td>08:30 AM to 10:00 AM</td>
                            <td>31st March 2023</td>
                        </tr>
                        <tr className='active text-center text-[#0053B9]'>

                            <td>ITT Majestic</td>
                            <td>08:30 AM to 10:00 AM</td>
                            <td>31st March 2023</td>
                        </tr>

                        <tr>
                            <td></td>
                            <td className='text-center active font-medium text-green-500'>
                                Neil Island to Port Blair
                            </td>
                            <td></td>
                        </tr>



                        <tr className='text-center active text-[#0053B9]'>

                            <td>Green Ocean</td>
                            <td>07:00 AM to 09:15 AM</td>
                            <td>30th April 2023</td>
                        </tr>

                        <tr className="text-center text-[#0053B9]">

                            <td>Nautika</td>
                            <td>07.30 AM to 09:00 AM</td>
                            <td>30th June 2023</td>
                        </tr>

                        <tr className='text-center active text-[#0053B9]'>

                            <td>Makruzz</td>
                            <td>08:00 AM to 09:30 AM</td>
                            <td>31st March 2023</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='text-center font-medium text-green-500'>
                                Havelock to Port Blair
                            </td>
                            <td></td>
                        </tr>


                        <tr className='text-center active text-[#0053B9]'>

                            <td>Green Ocean</td>
                            <td>07:00 AM to 09:15 AM</td>
                            <td>30th April 2023</td>
                        </tr>

                        <tr className="text-center text-[#0053B9]">

                            <td>Nautika</td>
                            <td>07.30 AM to 09:00 AM</td>
                            <td>30th June 2023</td>
                        </tr>

                        <tr className='text-center active text-[#0053B9]'>

                            <td>Makruzz</td>
                            <td>08:00 AM to 09:30 AM</td>
                            <td>31st March 2023</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='text-center font-medium text-green-500'>
                                Havelock to Port Blair ( via Neil Island )
                            </td>
                            <td></td>
                        </tr>
                        <tr className='active text-center text-[#0053B9]'>

                            <td>ITT Majestic</td>
                            <td>08:30 AM to 10:00 AM</td>
                            <td>31st March 2023</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='text-center font-medium text-green-500'>
                                Port Blair to Neil Island
                            </td>
                            <td></td>
                        </tr>

                        <tr className='text-center active text-[#0053B9]'>

                            <td>Makruzz</td>
                            <td>08:00 AM to 09:30 AM</td>
                            <td>31st March 2023</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;