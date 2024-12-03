"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AiOutlineHeart, AiOutlineUser, AiOutlineCar, AiFillTool, AiOutlineInbox } from "react-icons/ai";
import img1 from "@/Assets/car1.jpg";
import img2 from "@/Assets/car2.jpg";
import img4 from "@/Assets/travel.jpg";

import img3 from "@/Assets/car3.jpg";
import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { format } from "date-fns";
import Navbar from "@/components/navbar";
import Link from "next/link";

const categories = [
  "Convertibles",
  "Coupes",
  "Hatchbacks",
  "Minivans",
  "Sedan",
  "SUVs",
  "Trucks",
  "Wagons",
];

const cars = [
  {
    id: 1,
    image: img1,
    title: "Toyota Sequoia 4dr SUV",
    category: "Convertibles",
    price: "72.00",
    discount: "-10%",
    features: {
      seats: 4,
      transmission: "manual",
      doors: 4,
      luggage: 4,
    },
  },
  {
    id: 2,
    image: img2,
    title: "Hyundai Accent Sedan",
    category: "Convertibles",
    price: "23.40",
    discount: "-10%",
    features: {
      seats: 4,
      transmission: "manual",
      doors: 4,
      luggage: 4,
    },
  },
  {
    id: 3,
    image: img3,
    title: "Honda Ridgeline Sport",
    category: "Convertibles",
    price: "26.00",
    discount: "-10%",
    features: {
      seats: 4,
      transmission: "manual",
      doors: 4,
      luggage: 4,
    },
  },
  {
    id: 4,
    image:img2,
    title: "Hyundai Santa Cruz",
    category: "Convertibles",
    price: "32.00",
    discount: null,
    features: {
      seats: 4,
      transmission: "manual",
      doors: 4,
      luggage: 4,
    },
  },

  {
    id: 1,
    image: img1,
    title: "Toyota Sequoia 4dr SUV",
    category: "Convertibles",
    price: "72.00",
    discount: "-10%",
    features: {
      seats: 4,
      transmission: "manual",
      doors: 4,
      luggage: 4,
    },
  },
  {
    id: 2,
    image: img2,
    title: "Hyundai Accent Sedan",
    category: "Convertibles",
    price: "23.40",
    discount: "-10%",
    features: {
      seats: 4,
      transmission: "manual",
      doors: 4,
      luggage: 4,
    },
  },
  {
    id: 3,
    image: img3,
    title: "Honda Ridgeline Sport",
    category: "Convertibles",
    price: "26.00",
    discount: "-10%",
    features: {
      seats: 4,
      transmission: "manual",
      doors: 4,
      luggage: 4,
    },
  },

  {
    id: 1,
    image: img1,
    title: "Toyota Sequoia 4dr SUV",
    category: "Convertibles",
    price: "72.00",
    discount: "-10%",
    features: {
      seats: 4,
      transmission: "manual",
      doors: 4,
      luggage: 4,
    },
  },


];

export default function CarGrid() {
  const [showCategories, setShowCategories] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [pickupTime, setPickupTime] = useState<string>(""); 


  const [pickupDate, setPickupDate] = useState<Date | undefined>();
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>();
  const [dropoffTime, setDropoffTime] = useState<string>("");
  return (
    <>
<Navbar/>

<div className="relative h-[400px] w-full flex justify-center items-center">
  <Image
    src={img4}
    alt="Background"
    layout="fill"
    objectFit="cover"
    quality={100}
    className="absolute z-0"
  />

  <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-4xl bg-white rounded-xl shadow-md px-4 py-3 mt-16 space-y-4 md:space-y-0 md:space-x-4">
    <div className="flex-1">
      <p className="text-sm text-gray-500 font-medium">Location</p>
      <input
        type="text"
        placeholder="Where are you going?"
        className="w-full border-none focus:ring-0 text-gray-800 placeholder-gray-400"
      />
    </div>

    <div className="h-[1px] md:h-10 w-full md:w-[1px] bg-gray-200" />

    <div className="flex-1">
      <p className="text-sm text-gray-500 font-medium">Pick-up</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full text-left font-normal">
            {pickupDate
              ? `${format(pickupDate, "MM/dd/yyyy")} ${pickupTime || "Select Time"}`
              : "Add date, Add time"}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-0">
          <Calendar
            mode="single"
            selected={pickupDate}
            onSelect={(date) => date && setPickupDate(date)}
            className="rounded-md"
          />
          <div className="p-2">
            <label className="block text-sm text-gray-500 font-medium mb-1">Time</label>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-1 focus:ring-black focus:border-black"
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <div className="text-gray-400 font-bold">→</div>

    <div className="flex-1">
      <p className="text-sm text-gray-500 font-medium">Drop-off</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full text-left font-normal">
            {dropoffDate
              ? `${format(dropoffDate, "MM/dd/yyyy")} ${dropoffTime || "Select Time"}`
              : "Add date, Add time"}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-0">
         




<Calendar
            mode="single"
            selected={dropoffDate}
            onSelect={(date: Date | undefined) => setDropoffDate(date)}
            className="rounded-md"
          />
          <div className="p-2">
            <label className="block text-sm text-gray-500 font-medium mb-1">Time</label>
            <input
              type="time"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-1 focus:ring-black focus:border-black"
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <Button className="px-6 py-2 bg-black text-white rounded-full hover:bg-black mt-4 md:mt-0">
      <span className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
          />
        </svg>
        Search
      </span>
    </Button>
  </div>
</div>


      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setShowPriceFilter(!showPriceFilter)}
            >
              Filter Price
            </Button>
            {showPriceFilter && (
              <div className="absolute z-10 bg-white shadow-lg rounded-lg w-64 mt-2 p-4">
                <h4 className="text-sm font-semibold mb-2">Price Range</h4>
                <input
                  type="range"
                  min="10"
                  max="100"
                  className="w-full h-2 bg-gray-200 rounded-lg"
                />
                <div className="flex justify-between text-sm mt-2">
                  <span>₹10</span>
                  <span>₹100</span>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setShowCategories(!showCategories)}
            >
              Categories
            </Button>
            {showCategories && (
              <div className="absolute z-10 bg-white shadow-lg rounded-lg w-64 mt-2 p-4">
                <h4 className="text-sm font-semibold mb-2">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-700"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600 rounded"
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Button variant="outline">Sort</Button>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {cars.map((car) => (

    <div
      key={car.id}
      className="relative bg-white shadow-md rounded-lg border hover:shadow-lg overflow-hidden"
    >
    <Link  href={`/car/${car.id}`}>

      {car.discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          Featured
        </div>
      )}
      {car.discount && (
        <div className="absolute top-10 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {car.discount}
        </div>
      )}

      <div className="absolute top-2 right-2">
        <AiOutlineHeart className="text-gray-500 hover:text-red-500 text-xl cursor-pointer" />
      </div>

      <div className="relative w-full h-40">
        <Image
          src={car.image}
          alt={car.title}
          width={300}
          height={200}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500">{car.category}</p>
        <h3 className="text-lg font-semibold text-gray-800">{car.title}</h3>
      </div>

      <div className="flex justify-between text-sm text-gray-600 mt-4 px-4">
        <div className="flex items-center space-x-1">
          <AiOutlineUser className="text-gray-700" />
          <span>{car.features.seats}</span>
        </div>
        <div className="flex items-center space-x-1">
          <AiOutlineCar className="text-gray-700" />
          <span>{car.features.doors}</span>
        </div>
        <div className="flex items-center space-x-1">
          <AiFillTool className="text-gray-700" />
          <span>{car.features.transmission === "manual" ? "M" : "A"}</span>
        </div>
        <div className="flex items-center space-x-1">
          <AiOutlineInbox className="text-gray-700" />
          <span>{car.features.luggage}</span>
        </div>
      </div>

      <div className="mt-4 px-4 pb-4">
        <p className="text-xl font-bold text-gray-800">
          ₹{car.price}
          <span className="text-sm font-normal text-gray-500"> / day</span>
        </p>
      </div>
      </Link>
    </div>
    
  ))}
  
</div>

      </div>
      
    </>
  );
}
