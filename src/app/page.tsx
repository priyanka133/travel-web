"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import img9 from "@/Assets/plane.jpg";
import img10 from "@/Assets/car1.jpg";
import img11 from "@/Assets/plane.jpg";
import img1 from "@/Assets/house1.jpg";
import img2 from "@/Assets/house2.jpg";
import img3 from "@/Assets/house1.jpg";
import img4 from "@/Assets/house3.jpg";

import banner from "@/Assets/bannr2.jpg";
import banner1 from "@/Assets/banner4.jpg";
import banner2 from "@/Assets/banner3.jpg";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaRegStar } from "react-icons/fa";
import Slider from "react-slick";
import { FC } from "react";

import { IoLocationOutline } from "react-icons/io5";
import Footer from "@/components/footer";
import { FaArrowRight } from "react-icons/fa6";

interface CustomNextArrowProps {
  className: string;  // className should be a string
  onClick: () => void;  // onClick should be a function that takes no arguments and returns void
}

const CustomNextArrow: FC<CustomNextArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={`${className} CustomNextArrow z-10 bg-black text-black p-2 rounded-full cursor-pointer hover:bg-blue-900`}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

  const CustomPrevArrow: FC<CustomNextArrowProps> = ({ className, onClick }) => {

  return (
    <div
      className={`${className}  CustomNextArrow z-10 bg-black text-black p-2 rounded-full cursor-pointer hover:bg-blue-900`}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};
export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [guestRoom, setGuestRoom] = useState("");

  const deals = [
    {
      id: 1,
      title: "Exclusive Flight Deals Just For You!",
      discount: "50%",
      validity: "Valid only on 2 Jan - 9 Jan 2024",
      imageSrc: img9,
    },
    {
      id: 2,
      title: "Exclusive Rental Deals Just For You!",
      discount: "25%",
      validity: "Valid only on 12 Jan - 19 Jan 2024",
      imageSrc: img10,
    },
    {
      id: 3,
      title: "Exclusive Hotel Deals!",
      discount: "40%",
      validity: "Valid only on 15 Jan - 20 Jan 2024",
      imageSrc: img11,
    },
    {
      id: 4,
      title: "Exclusive Train Deals!",
      discount: "30%",
      validity: "Valid only on 10 Jan - 25 Jan 2024",
      imageSrc: img9,
    },
    {
      id: 5,
      title: "Exclusive Travel Deals!",
      discount: "20%",
      validity: "Valid only on 18 Jan - 30 Jan 2024",
      imageSrc: img11,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <CustomNextArrow className={""} onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />,
    prevArrow: <CustomPrevArrow className={""} onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const villas = [
    {
      id: 1,
      name: "Villa Santai Indah",
      location: "Jawa Barat",
      price: "₹180",
      originalPrice: null,
      rating: 4.8,
      reviews: "2,345 Reviews",
      image: img1,
    },
    {
      id: 2,
      name: "Puri Alam Villas",
      location: "Jawa Tengah",
      price: "₹240",
      originalPrice: "$320",
      rating: 4.8,
      reviews: "1,236 Reviews",
      image: img2,
    },
    {
      id: 3,
      name: "Serene Bali Retreat",
      location: "Bali",
      price: "₹420",
      originalPrice: null,
      rating: 4.7,
      reviews: "1,586 Reviews",
      image: img3,
    },
    {
      id: 4,
      name: "Lombok Bliss Residences",
      location: "Lombok",
      price: "₹500",
      originalPrice: "$650",
      rating: 4.9,
      reviews: "2,954 Reviews",
      image: img4,
    },
  ];

  return (
    <>
      <div>
        <Navbar />

        <section className="relative bg-cover bg-center h-[900px] bg-custom-image">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 pt-28 md:pt-56">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Your Next Great Adventure
            </h1>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mb-12 mx-4">
              Immerse yourself in the extraordinary with us, as we take you on a
              journey to uncover the world&apos;s hidden gems.
            </p>
          </div>

          <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-full px-6 sm:px-12 md:px-20 lg:px-40 z-20">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Explore your journey
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
                <div className="relative">
                  <label className="text-gray-600 font-semibold">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 bg-white"
                  >
                    <option value="" disabled>
                      Select location
                    </option>
                    <option value="New York">New York</option>
                    <option value="Paris">Paris</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="London">London</option>
                    <option value="Sydney">Sydney</option>
                  </select>
                </div>

                <div className="relative">
                  <label className="text-gray-600 font-semibold">
                    Check-in and Check-out Date
                  </label>
                  <div className="flex space-x-2">
                    <DatePicker
                      selected={startDate}
                      onChange={(date: Date | null) => setStartDate(date)} // Handle nullable types
                      placeholderText="Check-in"
                      className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date: Date | null) => setEndDate(date)}
                      placeholderText="Check-out"
                      className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 font-semibold">
                    Guests and Rooms
                  </label>
                  <select
                    value={guestRoom}
                    onChange={(e) => setGuestRoom(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 bg-white"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="1 Guest, 1 Room">1 Guest, 1 Room</option>
                    <option value="2 Guests, 1 Room">2 Guests, 1 Room</option>
                    <option value="2 Guests, 2 Rooms">2 Guests, 2 Rooms</option>
                    <option value="3+ Guests, 2+ Rooms">
                      3+ Guests, 2+ Rooms
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide mb-4">
                <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md border hover:bg-gray-200">
                  Hotels
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md border hover:bg-gray-200">
                  Villas
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md border hover:bg-gray-200">
                  Apartments
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md border hover:bg-gray-200">
                  Resorts
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md border hover:bg-gray-200">
                  Cottages
                </button>
              </div>

              <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
                Search ➜
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left">
              Exclusive deals just for you!
            </h2>
            <button className="mt-4 sm:mt-0 px-4 py-2 text-black border border-black rounded-md hover:bg-black hover:text-white transition duration-300">
              See All →
            </button>
          </div>

          <Slider
            {...settings}
            className="overflow-hidden" // Ensure proper spacing for carousel items
          >
            {deals.map((deal) => (
              <div key={deal.id} className="px-2">
                <div className="relative rounded-lg overflow-hidden h-48 sm:h-56 md:h-64 shadow-lg">
                  <Image
                    src={deal.imageSrc}
                    alt={deal.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-3 sm:p-4 text-white">
                    <div className="flex justify-between items-center">
                      <div className="bg-yellow-500 text-black px-2 py-1 text-xs rounded-full flex items-center space-x-1">
                        <span>Deal</span>
                      </div>
                      <span className="bg-gray-800 px-2 py-1 text-xs rounded-lg">
                        {deal.validity}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-lg font-semibold">
                        {deal.title}
                      </h3>
                      <p className="text-2xl sm:text-4xl font-bold mt-2">
                        {deal.discount}
                      </p>
                      <p className="text-xs mt-1">*with Terms and Conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <section>
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Top trending villas worldwide
              </h2>
              <p className="text-gray-600 sm:text-lg">
                Discover the most trending villas worldwide for an unforgettable
                experience.
              </p>
            </div>

            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="flex flex-wrap space-x-4 mb-4 sm:mb-0">
                {["Indonesia", "France", "Malaysia", "Australia"].map(
                  (country) => (
                    <button
                      key={country}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2 sm:mb-0"
                    >
                      {country}
                    </button>
                  )
                )}
              </div>

              <button className="px-4 py-2 text-black border border-black rounded-md hover:bg-black hover:text-white transition duration-300">
                See All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {villas.map((villa) => (
                <div
                  key={villa.id}
                  className="overflow-hidden group rounded-lg shadow-lg"
                >
                  <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
                    <Image
                      src={villa.image}
                      alt={villa.name}
                      fill
                      className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h5 className="font-semibold text-lg">{villa.name}</h5>
                    <div className="flex items-center space-x-2">
                      <IoLocationOutline className="text-black" />
                      <p className="text-gray-500 text-sm">{villa.location}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-black">
                      <FaRegStar />
                      <span className="text-sm text-gray-800">
                        {villa.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({villa.reviews})
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-xl font-bold">{villa.price}</span>
                      {villa.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">
                          {villa.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Includes taxes & fees
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-4">
              <div className="relative bg-black text-white rounded-lg overflow-hidden shadow-md h-72">
                <Image
                  src={banner2}
                  alt="Explore more"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent z-10" />
                <div className="relative z-20 p-6">
                  <h2 className="text-xl font-bold">
                    Explore more to get your comfort zone
                  </h2>
                  <p className="mt-2 text-sm">
                    Book your perfect stay with us.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-white text-black rounded-md flex items-center space-x-2 hover:bg-black hover:text-white border transition">
                    <span>Booking Now</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <div className="relative bg-black text-white rounded-lg overflow-hidden shadow-md h-52">
                <Image
                  src={banner1}
                  alt="Destinations"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="relative z-20 p-6">
                  <h3 className="text-lg font-semibold">
                    Destinations Available
                  </h3>
                  <p className="text-4xl font-bold">1,242</p>
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-2 bg-black text-white rounded-lg overflow-hidden shadow-md h-72 lg:h-full">
              <Image
                src={banner}
                alt="Beyond accommodation"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h2 className="text-2xl lg:text-4xl font-bold text-center">
                  Beyond accommodation, creating memories of a lifetime
                </h2>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
