import React from 'react';
import HeroImage from '../assets/Logo/Hero.jpg';
import HeroIcon from '../assets/Logo/HeroIcon.png';
import { FaSearch } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-start lg:items-center py-10 px-6 lg:px-20"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className=" bg-opacity-50 p-10 rounded-lg max-w-2xl text-white mt-16 lg:mt-0">
        <div className="flex items-center gap-3 mb-4">
          <img src={HeroIcon} alt="Service Icon" className="w-7 h-7" />
          <span className="text-sm lg:text-lg font-medium uppercase text-[#FBF2E0]">
            Hair Salon , Beauty , Masseur
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#FBF2E0] font-bold leading-tight mb-4">
          Find a Service<br /> Close to You
        </h1>
        <p className="text-base sm:text-md mb-6  text-[#FBF2E0] leading-relaxed">
          There are many variations of passages available <br/> majority have suffered alteration in some form.
        </p>

    <div className="flex flex-col sm:flex-row items-end gap-5 bg-white p-1  px-6 w-150 max-w-5xl rounded-full text-black">
  <div className="flex flex-col w-full sm:w-1/3 relative">
    <label className="text-sm font-semibold mb-1">Service Name</label>
    <input
      type="text"
      placeholder="Book your service..."
      className="border-0 border-b-2  text-sm outline-none pr-10"
    />
    <FaSearch className="absolute right-2 bottom-2 text-xl text-gray-500" />
  </div>
  <div className="flex flex-col w-full sm:w-1/3 relative">
    <label className="text-sm font-semibold mb-1">Address</label>
    <input
      type="text"
      placeholder="Where"
      className="border-0 border-b-2 outline-none text-sm pr-10"
    />
    <MdLocationOn className="absolute right-2 bottom-2 text-2xl text-gray-500" />
  </div>
  <div className="flex w-full sm:w-auto  ml-10 mb-1 pt-1">
    <button
      className="bg-[#ba7894] hover:bg-[#b21858] text-white flex items-center justify-center gap-x-2 w-full sm:w-28 h-10 text-sm rounded-full transition"
    >
      Search
      <FaSearch className="text-sm" />
    </button>
  </div>
</div>

      </div>
    </section>
  );
}
