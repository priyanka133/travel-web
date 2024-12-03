"use client"
import Image, { StaticImageData } from "next/image";
import { AiOutlineStar, AiOutlineHeart, AiOutlineCar } from "react-icons/ai";
import { Button } from "@/components/ui/button"; 
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";



import img1 from "@/Assets/car1.jpg";
import img2 from "@/Assets/car2.jpg";
import img3 from "@/Assets/car3.jpg";
import { useState } from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Navbar from "@/components/navbar";
import img5 from "@/Assets/mountains.jpg";
import Link from "next/link";

type Image = StaticImageData | string;

export default function CarDetails() {
  const images = [img1, img2, img3, img2, img2];

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };
  





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
            GMC Yukon 4dr SUV
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
                GMC Yukon 4dr SUV
                </Breadcrumb>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>


    
    <div className="container mx-auto px-4 py-8">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="col-span-2">
          {/* Main Image */}
          <div>
      {/* Main Image */}
      <div className="relative">
      {selectedImage && (
  <Image
    src={selectedImage}
    alt="Car Interior"
    width={800}
    height={600}
    className="w-full h-auto rounded-lg shadow-lg"
  />
)}

        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          <AiOutlineHeart className="text-gray-600 text-xl hover:text-red-500 cursor-pointer" />
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex space-x-4 mt-4 overflow-x-auto">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Gallery image ${index + 1}`}
            width={100}
            height={100}
            className="w-20 h-20 object-cover rounded-lg shadow cursor-pointer hover:ring-2 hover:ring-blue-500"
            onClick={() => handleImageClick(img)} // Set the selected image on click
          />
        ))}
      </div>
    </div>

          {/* About the Car */}
          <div className="mt-8 space-y-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 border">
  <h2 className="text-xl font-semibold text-gray-800">About this car</h2>
  <p className="text-gray-600 leading-relaxed mt-4">
    The company continued to work at its regular pace. In 1972, the P250 Urraco, the 400 GT Jarama, the 400 GT Espada, and the P400 Miura SV were in full production.
  </p>
  <p className="text-gray-600 leading-relaxed mt-4">
    The Espada was further modified in October 1972, marking a decisive peak in the evolution of this outstanding four-seater.
  </p>
</div>



            {/* Car Features */}
            <div className="max-w-4xl mx-auto space-y-6">
  {/* Car Features Card */}
  <div className="bg-white rounded-lg shadow-lg p-6 border">
    <h2 className="text-xl font-semibold text-gray-800">Car Features</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 mt-4">
      {["Airbag", "FM Radio", "Power Windows", "Sensor", "Speed Km", "Steering Wheel"].map((feature, index) => (
        <div key={index} className="flex items-center space-x-2">
          <AiOutlineCar className="text-blue-600 text-xl" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Brands Card */}
  <div className="bg-white rounded-lg shadow-lg p-6 border">
    <h2 className="text-xl font-semibold text-gray-800">Brands</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 mt-4">
      {["Honda", "Mitsubishi", "Outlander"].map((brand, index) => (
        <div key={index} className="flex items-center space-x-2">
          <AiOutlineCar className="text-green-600 text-xl" />
          <span>{brand}</span>
        </div>
      ))}
    </div>
  </div>
</div>

<section>
              <h2 className="text-lg font-bold mb-4"> car Location</h2>
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

          {/* Reviews Section */}
          <div className="mt-12 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <AiOutlineStar className="text-yellow-500 text-2xl" />
                  <span className="text-xl font-semibold text-gray-700">0/5 Not Rated</span>
                </div>
                <span className="text-gray-500 text-sm">(0 review)</span>
              </div>
            </div>

            {/* Write a Review */}
            <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Leave a Review</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="text" placeholder="Your Name" className="w-full" />
                  <Input type="email" placeholder="Your Email" className="w-full" />
                </div>
                <Input type="text" placeholder="Title *" className="w-full" />
                <Textarea placeholder="Write your review here..." className="w-full" />
                <Button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Post Review
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Section: Booking Form */}
        <div className="p-6 bg-white rounded-lg shadow-lg border h-[400px]"> {/* Set a fixed height */}
  <div className="flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <AiOutlineStar className="text-yellow-500 text-lg" />
      <span className="text-sm">(No Review)</span>
    </div>
    <span className="text-sm text-gray-500">Virginia</span>
  </div>
  <p className="text-lg font-bold mt-4">
    From: <span className="text-blue-600">₹90.00</span> / day
  </p>
  <form className="space-y-4 mt-6">
    <Input type="text" placeholder="Location" />
    <Input type="date" placeholder="Pick-up" />
    <Input type="date" placeholder="Drop-off" />

  <Link href="/checkout" passHref>
  <Button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-4">
    Book now
  </Button>
</Link>

  </form>
</div>

      </div>


    </div>
    </>
  );
}
