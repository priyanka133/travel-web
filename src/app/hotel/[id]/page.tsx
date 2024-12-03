"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Assets
import img1 from "@/Assets/house1.jpg";
import img2 from "@/Assets/house2.jpg";
import img3 from "@/Assets/house1.jpg";
import img4 from "@/Assets/house3.jpg";
import img5 from "@/Assets/mountains.jpg";

import { FaHeart, FaArrowLeft, FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { Breadcrumb } from "@/components/ui/breadcrumb"; // for named imports
import Navbar from "@/components/navbar";

const images = [
  { src: img1, alt: "Hotel view 1" },
  { src: img2, alt: "Hotel view 2" },
  { src: img3, alt: "Hotel view 3" },
  { src: img4, alt: "Hotel view 4" },
  { src: img3, alt: "Hotel view 5" },
  { src: img2, alt: "Hotel view 6" },
];

const facilities = [
  { icon: "🌬️", name: "Air Conditioning" },
  { icon: "🚗", name: "Airport Transport" },
  { icon: "📺", name: "Flat TV" },
  { icon: "🔥", name: "Heater" },
  { icon: "🍴", name: "Restaurant" },
  { icon: "🧖‍♀️", name: "Spa & Sauna" },
  { icon: "🧺", name: "Washer & Dryer" },
];

export default function HotelGallery() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  const toggleSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };
  const searchParams = useSearchParams();

  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") || "29/11/2024");
  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") || "30/11/2024");
  const [guests, setGuests] = useState(searchParams.get("guests") || "1 guest, 1 room");

  useEffect(() => {
    const newCheckIn = searchParams.get("checkIn");
    const newCheckOut = searchParams.get("checkOut");
    const newGuests = searchParams.get("guests");

    if (newCheckIn) setCheckIn(newCheckIn);
    if (newCheckOut) setCheckOut(newCheckOut);
    if (newGuests) setGuests(newGuests);
  }, [searchParams]);

  return (
    <>
    <Navbar/>
    <div className="relative h-[380px] w-full flex justify-center items-center">
      {/* Background Image */}
      <Image
        src={img5}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />

      {/* Search Bar */}
      <div className="relative z-10 flex  w-full max-w-4xl px-4 py-3 space-x-4">
        {/* Location Input */}
        <div className="container mx-auto px-4 py-6">
          <div className="st-banner-search-form style_2">
            <h1 className=" text-4xl font-semibold text-white">
              Castello Casole Hotel
            </h1>

            {/* Breadcrumb Section */}
            <div className="st-breadcrumb hidden sm:block mt-2">
              <Breadcrumb className="text-gray-600 flex space-x-2">
                <Breadcrumb className="text-white hover:text-blue-800">
                  Home
                </Breadcrumb>
                <span>/</span>
                <Breadcrumb className="text-white hover:text-blue-800">
                  United States
                </Breadcrumb>
                <span>/</span>
                <Breadcrumb className="text-white">
                  Castello Casole Hotel
                </Breadcrumb>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto p-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  {images.map((image, index) => (
    <Card key={index} className="relative w-full h-64 overflow-hidden shadow-md rounded-md">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
      />
    </Card>
  ))}
</div>


<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Left Section */}
  <div className="lg:col-span-2 space-y-6">
    {/* Review Card */}
    <div className="relative">
  <Card className="w-full lg:w-[820px] shadow-md">
    <CardContent className="flex flex-col items-center justify-center space-y-4">
      {/* Rating Section */}
      <div className="flex flex-col items-center gap-2">
        <div className="text-2xl font-semibold text-blue-600">5/5</div>
        <div className="text-center">
          <h2 className="text-lg font-semibold">Excellent</h2>
          <p className="text-sm text-gray-500">(3 reviews) • New York City</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-6 mt-4">
        {/* Heart Icon */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
          <FaHeart className="w-5 h-5" />
          <span>Like</span>
        </button>

        {/* Share Icon */}
        <button
          onClick={toggleSocialIcons}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
        >
          <FaArrowLeft className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </CardContent>
  </Card>

  {/* Social Icons List */}
  {showSocialIcons && (
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 p-4 bg-white shadow-lg rounded-md w-[250px]">
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 shadow">
        <FaFacebookF className="text-blue-600" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 shadow">
        <FaTwitter className="text-blue-400" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 shadow">
        <FaPinterestP className="text-red-500" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 shadow">
        <FaLinkedinIn className="text-blue-700" />
      </button>
    </div>
  )}
</div>


    {/* About Section */}
    <Card>
  <CardContent className="p-4"> 
    <h3 className="text-xl font-semibold  text-left">About this hotel</h3>
    <p className="text-gray-700 leading-relaxed text-left">
      Whether you&apos;re a tourist or traveling on business, Hotel WBF Kitasemba WEST is a
      great choice for accommodation when visiting Osaka. The excitement of the city center
      is only a short distance away. With its convenient location, the property offers easy
      access to the city&apos;s must-see destinations.
    </p>
    <p className="mt-4 text-gray-700 leading-relaxed text-left">
      Hotel WBF is renowned for its quality services and friendly staff. Facilities like
      free Wi-Fi in all rooms, 24-hour security, daily housekeeping, laundromat, and taxi
      service are readily available for the convenience of each guest.
    </p>
  </CardContent>
</Card>
<div className="max-w-6xl mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-4">
          <div className="space-y-4">
            <section>
              <h2 className="text-lg font-bold mb-4">Hotel Facilities</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {facilities.map((facility, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition"
                  >
                    <span className="text-2xl">{facility.icon}</span>
                    <span className="text-sm font-medium">{facility.name}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4">Rules</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold">Check In</p>
                  <p className="text-gray-600">12:00 pm</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Check Out</p>
                  <p className="text-gray-600">12:00 pm</p>
                </div>
              </div>
            </section>
          </div>


        </div>
      </div>

  </div>

  {/* Right Section */}
  <div>
    <Card>
      <CardContent className="space-y-4 p-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">From €150.00 / night</span>
          <span className="text-sm text-gray-500">5 (3 reviews)</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Check In</span>
            <span>{checkIn}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Check Out</span>
            <span>{checkOut}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Guests</span>
            <span>{guests}</span>
          </div>
        </div>

        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
          Check availability
        </Button>
      </CardContent>
    </Card>
    <div className="space-y-4 mt-4">
            <div className="overflow-hidden rounded-md shadow-md">
              <Image
              width={123}
              height={123}
                src={img4}
                alt="Hotel"
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
            <section>
              <h2 className="text-lg font-bold mb-4">Location</h2>
              <div className="relative overflow-hidden rounded-md shadow-md">
                <iframe
                  className="w-full h-64 rounded-md"
                  src="https://maps.google.com/maps?q=location_name&z=15&output=embed"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </section>
          </div>
  </div>

 
</div>


      
    </div>
    </>
  );
}
