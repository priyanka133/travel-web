"use client"
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import img1 from "@/Assets/house1.jpg";
import img2 from "@/Assets/house2.jpg";
import img3 from "@/Assets/house1.jpg";
import { Calendar } from "@/components/ui/calendar";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { format } from "date-fns";
import img4 from "@/Assets/travel.jpg";

import "react-datepicker/dist/react-datepicker.css";
const hotelData = [
  {
    id:1,
    name: "Castello Casole Hotel",
    location: "New York City",
    rating: 5,
    reviews: 3,
    price: 150,
    image: img1,
  },
  {
    id:2,

    name: "Hotel WBF Hommachi",
    location: "Los Angeles",
    rating: 5,
    reviews: 3,
    price: 200,
    image: img2,
  },
  {
    id:3,

    name: "Vnahomes Aparthotel",
    location: "San Francisco",
    rating: 5,
    reviews: 4,
    price: 150,
    image: img3,
  },
  {
    id:4,

    name: "Hotel WBF Hommachi",
    location: "Los Angeles",
    rating: 5,
    reviews: 3,
    price: 200,
    image: img2,
  },
  {
    id:5,

    name: "Vnahomes Aparthotel",
    location: "San Francisco",
    rating: 5,
    reviews: 4,
    price: 150,
    image: img3,
  },
  {
    id:6,

    name: "Hotel WBF Hommachi",
    location: "Los Angeles",
    rating: 4,
    reviews: 3,
    price: 200,
    image: img2,
  },
  {
    id:7,

    name: "Vnahomes Aparthotel",
    location: "San Francisco",
    rating: 2,
    reviews: 4,
    price: 150,
    image: img3,
  },
];

export default function Page() {
  const [pickupTime, setPickupTime] = useState<string>(""); // New state for time
  const [showFilters, setShowFilters] = useState(false);


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
      {dropoffDate
        ? `${format(dropoffDate, "MM/dd/yyyy")} ${dropoffTime || "Select Time"}`

        : "Add date, Add time"}

    </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-0">
        <Calendar
  mode="single"
  selected={pickupDate}
  onSelect={(date: Date | undefined) => {
    if (date) setPickupDate(date); // Update the state with the selected date
  }}
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


      
<div className="container mx-auto p-4">
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
    <h1 className="text-2xl font-bold">24 hotels found</h1>
    <Button variant="outline" className="lg:self-end mt-4 lg:mt-0">Sort</Button>
  </div>

  {/* Mobile Filter Toggle Button */}
  <div className="lg:hidden mb-4">
    <Button onClick={() => setShowFilters(!showFilters)} className="w-full">
      {showFilters ? "Hide Filters" : "Show Filters"}
    </Button>
  </div>

  <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-6">
    {/* Filters Section */}
    <div className={`w-full lg:w-1/4 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
      <Card>
        <CardHeader>
          <CardTitle>Filter Price</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider defaultValue={[100]} max={254} step={1} />
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-2">
              <Input type="number" placeholder="Min price" defaultValue="100.00" className="w-full sm:w-auto" />
              <Input type="number" placeholder="Max price" defaultValue="254.00" className="w-full sm:w-auto" />
            </div>
            <Button className="w-full sm:w-auto">Apply</Button>
            <Button variant="link" className="w-full sm:w-auto">Clear</Button>
          </div>
        </CardContent>
      </Card>

      {/* Other Filters */}
      <div className="space-y-6">
        {/* Review Score */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Review Score</h3>
          {["Excellent", "Very Good", "Average", "Poor", "Terrible"].map((score) => (
            <div key={score} className="flex items-center space-x-2">
              <Checkbox id={score} />
              <label htmlFor={score} className="text-sm">
                {score}
              </label>
            </div>
          ))}
        </div>

        {/* Hotel Star */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Hotel Star</h3>
          {[5, 4, 3, 2].map((stars) => (
            <div key={stars} className="flex items-center space-x-2">
              <Checkbox id={`${stars}-stars`} />
              <label htmlFor={`${stars}-stars`} className="text-sm flex items-center">
                {Array.from({ length: stars }, (_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Accordion Filters */}
      <Accordion type="multiple">
        <AccordionItem value="facilities">
          <AccordionTrigger>Facilities</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Best value", "Boutique", "Budget", "Business"].map((facility) => (
                <div key={facility} className="flex items-center space-x-2">
                  <Checkbox id={facility} />
                  <label htmlFor={facility} className="text-sm">
                    {facility}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="hotel-theme">
          <AccordionTrigger>Hotel Theme</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Best value", "Boutique", "Budget", "Business", "Charming", "Classic", "Green", "Luxury"].map((theme) => (
                <div key={theme} className="flex items-center space-x-2">
                  <Checkbox id={theme} />
                  <label htmlFor={theme} className="text-sm">
                    {theme}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex space-x-2">
        <Button className="w-full sm:w-auto">Apply</Button>
        <Button variant="outline" className="w-full sm:w-auto">Reset</Button>
      </div>
    </div>

    {/* Hotel Cards Section */}
    <div className="flex-1 mt-6 lg:mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotelData.map((hotel) => (
          <div key={hotel.id}>
            <Link href={`/hotel/${hotel.id}`}>
              <Card key={hotel.name}>
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  className="rounded-t-md w-full h-48 object-cover"
                  width={300}
                  height={200}
                />
                <CardContent>
                  <h2 className="font-bold text-lg">{hotel.name}</h2>
                  <p className="text-sm text-gray-500">{hotel.location}</p>
                  <div className="flex items-center my-2">
                    <span className="text-yellow-500 mr-2">
                      {"★".repeat(hotel.rating)}
                    </span>
                    <span className="text-sm">{hotel.reviews} Reviews</span>
                  </div>
                  <p className="text-lg font-bold">From: €{hotel.price}/night</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </>
  );
}
