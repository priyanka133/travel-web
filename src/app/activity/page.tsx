"use client"
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import img1 from "@/Assets/act.jpg";
import img2 from "@/Assets/activity1.jpg";
import img3 from "@/Assets/activity2.jpg";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import img4 from "@/Assets/travel.jpg";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { Calendar } from "@/components/ui/calendar"
import { Heart, MapPin, Star } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";



const activities = [
  {
    id:1,
    image: img1, 
    location: "Palm Beach",
    title: "One-Hour Waverunner Rental in Palm Beach",
    price: "₹400.00",
    rating: 5,
    reviews: 3,
    duration: "5 hours",
    featured: true,
  },
  {
    id:2,

    image: img2,
    location: "Delaware",
    title: "Treasure of the Nation Escape Game in Irvine",
    price: "₹300.00",
    rating: 5,
    reviews: 3,
    duration: "3 days",
    featured: true,
  },
  {
    id:3,

    image: img3,
    location: "California",
    title: "Greenbar Distillery Tour & Tasting in Los Angeles",
    price: "₹200.00",
    rating: 5,
    reviews: 3,
    duration: "Multi days",
    featured: true,
  },
];

export default function Page() {
  const [pickupTime, setPickupTime] = useState<string>(""); 


  // const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);


  const [pickupDate, setPickupDate] = useState<Date | undefined>();
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>();
  const [dropoffTime, setDropoffTime] = useState<string>("");
  return (
    <>
<div>
  <Navbar />

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
</div>




<div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">24 hotels found</h1>
        <Button variant="outline">Sort</Button>
      </div>
      
      {/* Show Filters Toggle for Mobile */}
      <div className="lg:hidden mb-4">
        <Button onClick={() => setShowFilters(!showFilters)} className="w-full">
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <div className="flex space-x-6">
        {/* Filter Panel */}
        <div className={`w-full sm:w-3/4 lg:w-1/4 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
  <Card>
    <CardHeader>
      <CardTitle>Filter Price</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <Slider defaultValue={[100]} max={254} step={1} />
        <div className="flex flex-wrap sm:flex-nowrap space-x-2">
          <Input type="number" placeholder="Min price" defaultValue="100.00" className="w-full sm:w-1/2" />
          <Input type="number" placeholder="Max price" defaultValue="254.00" className="w-full sm:w-1/2" />
        </div>
        <Button className="w-full sm:w-auto">Apply</Button>
        <Button variant="link" className="w-full sm:w-auto">Clear</Button>
      </div>
    </CardContent>
  </Card>

  <div className="space-y-6">
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Review Score</h3>
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

  <Accordion type="multiple">
    <AccordionItem value="facilities">
      <AccordionTrigger>Languages</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          {["English", "Español", "Français", "Japanese"].map((language) => (
            <div key={language} className="flex items-center space-x-2">
              <Checkbox id={language} />
              <label htmlFor={language} className="text-sm">
                {language}
              </label>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="attractions">
      <AccordionTrigger>Attractions</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          {[
            "Food & Nightlife",
            "Outdoors",
            "Workshops",
            "Sightseeing Tours",
            "Multi Day"
          ].map((attraction) => (
            <div key={attraction} className="flex items-center space-x-2">
              <Checkbox id={attraction} />
              <label htmlFor={attraction} className="text-sm">
                {attraction}
              </label>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="duration">
      <AccordionTrigger>Duration</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          {[
            "0-3 hours",
            "3-5 hours",
            "5-7 hours",
            "Full Day",
            "Multi Day"
          ].map((duration) => (
            <div key={duration} className="flex items-center space-x-2">
              <Checkbox id={duration} />
              <label htmlFor={duration} className="text-sm">
                {duration}
              </label>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>

  {/* Apply and Reset Buttons */}
  <div className="flex flex-wrap space-x-2">
    <Button className="w-full sm:w-auto">Apply</Button>
    <Button variant="outline" className="w-full sm:w-auto">Reset</Button>
  </div>
</div>


        

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div key={activity.id}>
              <Link href={`/activity/${activity.id}`}>
                <Card className="relative rounded-lg shadow-md overflow-hidden w-64 h-96">
                  {activity.featured && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-md">
                      Featured
                    </span>
                  )}
                  <Heart className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-red-500" />
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                    width={400}
                    height={200}
                  />
                  <CardContent className="p-4">
                    <div className="text-gray-500 text-sm flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {activity.location}
                    </div>
                    <h2 className="font-semibold text-lg leading-tight mt-1">{activity.title}</h2>
                    <div className="flex items-center mt-2">
                      {Array.from({ length: activity.rating }, (_, i) => (
                        <Star key={i} className="text-yellow-400 h-4 w-4" />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">{`(${activity.reviews} Reviews)`}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-bold text-lg">{`From ${activity.price}`}</p>
                      <p className="text-gray-500 text-sm">{activity.duration}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
