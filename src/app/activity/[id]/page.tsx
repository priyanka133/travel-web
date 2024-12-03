"use client";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import img1 from "@/Assets/act.jpg";
import img2 from "@/Assets/activity1.jpg";
import img3 from "@/Assets/activity2.jpg";
import { useRef, useState } from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Navbar from "@/components/navbar";
import img5 from "@/Assets/mountains.jpg";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaHeart } from "react-icons/fa";

export default function CarDetails() {
//   const images = [img1, img2, img3, img2, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

//   const [selectedImage, setSelectedImage] = useState(images[0]);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

//   const handleImageClick = (images) => {
//     setSelectedImage(images);
//   };
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (index:number) => {
    setCurrentIndex(index);
    const { current } = scrollRef;
    if (current) {
      current.scrollTo({
        left: index * 300, // Adjust scroll distance to match card width
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0) handleScroll(currentIndex - 1);
  };

  const scrollRight = () => {
    if (currentIndex < cards.length - 1) handleScroll(currentIndex + 1);
  };
  const cards = [
    {
      id: 1,
      image: img1, // Replace with your image path
      location: "New York City",
      title: "Moonshine Cabin Escape Game in Fort Lauderdale",
      discount: "10%",
      oldPrice: "₹1000.00",
      newPrice: "₹900.00",
      reviews: "5",
      reviewCount: "3",
      duration: "10 hours",
    },
    {
      id: 2,
      image: img2, // Replace with your image path
      location: "Wilmington",
      title: "Boat Tour of San Francisco Bay",
      newPrice: "₹800.00",
      reviews: "5",
      reviewCount: "3",
      duration: "10 hours",
    },
    {
      id: 3,
      image: img3,
      location: "Nevada",
      title: "New York Gossip Girl Sites Tour",
      newPrice: "₹640.00",
      reviews: "5",
      reviewCount: "2",
      duration: "8 hours",
    },
    {
      id: 4,
      image: img1,
      location: "San Francisco",
      title: "Empire State Building Admission",
      newPrice: "₹600.00",
      reviews: "5",
      reviewCount: "2",
      duration: "3 days",
    },
    {
      id: 5,
      image: img3,
      location: "Wilmington",
      title: "Boat Tour of San Francisco Bay",
      newPrice: "₹800.00",
      reviews: "5",
      reviewCount: "3",
      duration: "10 hours",
    },
    {
      id: 6,
      image: img1,
      location: "New York City",
      title: "Moonshine Cabin Escape Game in Fort Lauderdale",
      discount: "10%",
      oldPrice: "₹1000.00",
      newPrice: "₹900.00",
      reviews: "5",
      reviewCount: "3",
      duration: "10 hours",
    },
  ];


  const imagess = [
    { src: img1, alt: "Hotel view 1" },
    { src: img2, alt: "Hotel view 2" },
    { src: img3, alt: "Hotel view 3" },
    { src: img3, alt: "Hotel view 5" },
    { src: img2, alt: "Hotel view 6" },
    { src: img2, alt: "Hotel view 6" },
  ];

  return (
    <>
      <Navbar />
      <div className="relative h-[380px] w-full flex justify-center items-center">
        <Image
          src={img5}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />

        <div className="relative z-10 flex  w-full max-w-4xl px-4 py-3 space-x-4">
          <div className="container mx-auto px-4 py-6">
            <div className="st-banner-search-form style_2">
              <h1 className=" text-4xl font-semibold text-white">
                GMC Yukon 4dr SUV
              </h1>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {imagess.map((image, index) => (
          <Card
            key={index}
            className="relative w-full h-64 overflow-hidden shadow-md rounded-md"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </Card>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className=" bg-gray-50 min-h-screen">
              <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-full sm:w-auto space-y-1">
                      <p className="text-lg font-semibold">Duration</p>
                      <p>5 hours</p>
                    </div>
                    <div className="w-full sm:w-auto space-y-1">
                      <p className="text-lg font-semibold">Cancellation</p>
                      <p>No Cancel</p>
                    </div>
                    <div className="w-full sm:w-auto space-y-1">
                      <p className="text-lg font-semibold">Group Size</p>
                      <p>10 people</p>
                    </div>
                    <div className="w-full sm:w-auto space-y-1">
                      <p className="text-lg font-semibold">Languages</p>
                      <p>English, Español</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t">
                  <h2 className="text-2xl font-semibold mb-4">
                    About this activity
                  </h2>
                  <p className="text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                </div>

                <div className="p-6 border-t">
                  <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      <span>
                        Discover Hollywood and celebrate its iconic landmarks
                        such as the Walk of Fame.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      <span>
                        Soak in the views of the ever vibrant City of Angels.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      <span>
                        Marvel at the spectacular Hollywood Sign, the
                        quintessential symbol of Los Angeles.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 border-t">
                  <h2 className="text-2xl font-semibold mb-4">
                    Included/Excluded
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Specialized bilingual guide</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Private Transport</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>
                          Entrance fees (Cable and car and Moon Valley)
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✔</span>
                        <span>Box lunch water, banana apple and chocolate</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-red-500 mr-2">✘</span>
                        <span>Additional Services</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-500 mr-2">✘</span>
                        <span>Insurance</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-500 mr-2">✘</span>
                        <span>Drink</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-500 mr-2">✘</span>
                        <span>Tickets</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className=" bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                    <Accordion type="single" collapsible>
                      {["08:00", "10:00", "12:00", "14:00"].map(
                        (time, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{time}</AccordionTrigger>
                            <AccordionContent>
                              This is the detailed information for the itinerary
                              at {time}.
                            </AccordionContent>
                          </AccordionItem>
                        )
                      )}
                    </Accordion>
                  </div>

                  <div className=" border-b">
                    <h2 className="text-2xl font-semibold mb-4 ml-4">
                      Durations
                    </h2>
                    <div className="flex flex-wrap gap-4 ml-4">
                      {["3 – 5 hours", "5 – 7 hours", "Fullday (+7 hours)"].map(
                        (duration, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-gray-100 p-3 rounded-md shadow-sm w-fit"
                          >
                            {/* <HiOutlineLocationMarker className="text-blue-500" /> */}
                            <span>{duration}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Language</h2>
                    <div className="flex flex-wrap gap-4">
                      {["English", "Español"].map((language, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-gray-100 p-3 rounded-md shadow-sm w-fit"
                        >
                          {/* <HiOutlineLocationMarker className="text-blue-500" /> */}
                          <span>{language}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>

            <div className=" bg-gray-50 min-h-screen ">
              <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-semibold mb-4">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible>
                    {[
                      {
                        question: "Do you arrange airport transfers?",
                        answer:
                          "Airport transfers are not included in the price of this tour, however, you can book for an arrival transfer in advance. To arrange this, please contact our customer service team once you have a confirmed booking.",
                      },
                      {
                        question: "When and where does the tour start?",
                        answer:
                          "The tour starts at the main entrance of Palm Beach Marina at 08:00 AM. Please arrive 15 minutes earlier for check-in.",
                      },
                      {
                        question: "When and where does the tour end?",
                        answer:
                          "The tour ends back at Palm Beach Marina at approximately 4:00 PM. Drop-offs can be arranged upon request.",
                      },
                    ].map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    Activity&apos;s Location
                  </h2>
                  <div className="rounded-lg overflow-hidden shadow-md">
  <iframe
    className="w-full h-64"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508617!2d144.96305791531913!3d-37.816279742021284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775b36f9fd2d5b!2sMelbourne%20Central%20Shopping%20Centre!5e0!3m2!1sen!2sau!4v1699862236468!5m2!1sen!2sau"
    allowFullScreen={true} // Use true instead of an empty string
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <AiOutlineStar className="text-yellow-500 text-2xl" />
                    <span className="text-xl font-semibold text-gray-700">
                      0/5 Not Rated
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">(0 review)</span>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Leave a Review
                </h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="w-full"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="w-full"
                    />
                  </div>
                  <Input type="text" placeholder="Title *" className="w-full" />
                  <Textarea
                    placeholder="Write your review here..."
                    className="w-full"
                  />
                  <Button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Post Review
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col items-center space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">
                  From: <span className="text-blue-600">₹400.00</span>
                </p>
                <p className="text-yellow-500 font-medium flex items-center">
                  ★ 5 <span className="ml-2 text-gray-500">(3 Reviews)</span>
                </p>
              </div>

              <div className="flex flex-col space-y-4 mt-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                  Book
                </Button>
                <Button
                  onClick={() => setShowInquiryForm((prev) => !prev)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-full"
                >
                  Inquiry
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                  Explore
                </Button>
              </div>

              {showInquiryForm && (
                <div className="mt-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Name (*)
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        E-mail (*)
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your phone"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Note
                      </label>
                      <textarea
                        placeholder="Enter your message"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
            </div>

            <div className="bg-white shadow-md rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col items-center mt-4">
              <Image
                src={img1}
                alt="User"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="text-center mt-4">
                <p className="font-semibold text-lg">modmix</p>
                <p className="text-gray-500 text-sm">Member Since 2022</p>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white mt-4 mb-4">
                Ask a Question
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Explore other options</h2>
            <div className="flex space-x-2">
              <button
                onClick={scrollLeft}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full shadow-md"
              >
                &larr;
              </button>
              <button
                onClick={scrollRight}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full shadow-md"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto sm:overflow-x-hidden relative"
            style={{ scrollBehavior: "smooth" }}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`bg-white shadow-md rounded-lg w-72 sm:w-80 md:w-96 lg:w-72 xl:w-80 shrink-0 transform transition-transform ${
                  currentIndex === index ? "scale-100" : "scale-95 opacity-75"
                }`}
              >
                <div className="relative w-full h-40">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  {card.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      -{card.discount}
                    </span>
                  )}
                  <FaHeart className="absolute top-2 right-2 text-white bg-gray-800 p-1 rounded-full w-6 h-6 cursor-pointer hover:text-red-500" />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <p className="text-sm text-gray-500">{card.location}</p>
                  <h3 className="text-md font-semibold">{card.title}</h3>
                  {card.oldPrice && (
                    <div className="flex items-center space-x-2 mt-2">
                      <p className="text-sm line-through text-gray-400">
                        {card.oldPrice}
                      </p>
                      <p className="text-sm font-bold text-blue-600">
                        {card.newPrice}
                      </p>
                    </div>
                  )}
                  {!card.oldPrice && (
                    <p className="text-sm font-bold text-blue-600 mt-2">
                      {card.newPrice}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-4">
                    <p className="text-yellow-500 text-sm flex items-center">
                      ★ {card.reviews}{" "}
                      <span className="text-gray-500 ml-1">
                        ({card.reviewCount} Reviews)
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">{card.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleScroll(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
