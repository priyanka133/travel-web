"use client"

import DatePicker from "react-datepicker";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SearchBar() {
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guestRoom, setGuestRoom] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);

  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <section className="relative bg-cover bg-center h-[400px] bg-custom-image">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 pt-56">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Your Next Great Adventure
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-12">
              Immerse yourself in the extraordinary with us, as we take you on a
              journey to uncover the world&apos;s hidden gems.
            </p>
          </div>

          <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-full  px-6 md:px-20 lg:px-40 z-20">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Explore your journey
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
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
                      onChange={(date) => setStartDate(date)}
                      placeholderText="Check-in"
                      className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
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

              <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 ">
                Search ➜
              </button>
            </div>
          </div>
        </section>
  );
}
