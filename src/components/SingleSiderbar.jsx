import React from 'react';
import Img from '../assets/Gall/backimg.png';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
const SingleSidebar = () =>
{
 return(
    <div>
        <section  className="h-screen bg-cover bg-center flex flex-col items-start objecr-content lg:items-center mt-10 py-20 "
              style={{ backgroundImage: `url(${Img})` }}>
                <div>
                    <p className='text-white font-bold justify-center items-center text-4xl mt-70'>Letting your true  beauty shine</p>
                </div>
                    <button className='border  w-20 h-7 text-white hover:bg-[#b31898] transition-100 -ml-107 mt-4'> Book now
                    </button>
                     <div className='mr-305 -mt-40'>
            < IoIosArrowBack className=' text-black hover:text-[#b21858] cursor-pointer text-xl' />
        </div>
                   <div className='ml-305  '>
            < IoIosArrowForward className=' text-black hover:text-[#b21858] cursor-pointer text-xl' />
        </div>
        </section>

    </div>
 );
};
export default SingleSidebar;