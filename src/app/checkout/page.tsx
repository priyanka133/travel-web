import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Navbar from "@/components/navbar";
import img5 from "@/Assets/mountains.jpg";


const Checkout = () => {
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
            CheckOut
            </h1>

            {/* Breadcrumb Section */}
            <div className="st-breadcrumb hidden sm:block mt-2">
              <Breadcrumb className="text-gray-600 flex space-x-2">
                <Breadcrumb className="text-white hover:text-blue-800">
                  Home
                </Breadcrumb>
                <span>/</span>
                <Breadcrumb className="text-white hover:text-blue-800">
                  CheckOut
                </Breadcrumb>
                <span>/</span>
                
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Booking Submission Form */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Booking Submission</h2>
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>First Name *</Label>
                <Input type="text" placeholder="First Name" />
              </div>
              <div>
                <Label>Last Name *</Label>
                <Input type="text" placeholder="Last Name" />
              </div>
            </div>
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Email *</Label>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Label>Phone *</Label>
                <Input type="text" placeholder="Phone" />
              </div>
            </div>
            {/* Address Fields */}
            <div>
              <Label>Address Line 1</Label>
              <Input type="text" placeholder="Your Address Line 1" />
            </div>
            <div>
              <Label>Address Line 2</Label>
              <Input type="text" placeholder="Your Address Line 2" />
            </div>
            {/* City, ZIP Code, State */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>City</Label>
                <Input type="text" placeholder="Your City" />
              </div>
              <div>
                <Label>ZIP Code</Label>
                <Input type="text" placeholder="ZIP code/Postal code" />
              </div>
              <div>
                <Label>State/Province</Label>
                <Input type="text" placeholder="State/Province/Region" />
              </div>
            </div>
            {/* Country and Special Requirements */}
            <div>
              <Label>Country</Label>
              <Input type="text" placeholder="Country" />
            </div>
            <div>
              <Label>Special Requirements</Label>
              <Textarea placeholder="Special Requirements" />
            </div>


  <div>
              <Label>Select Payment Method</Label>
              <select className="border rounded-md  ml-2 p-4 text-sm font-medium text-gray-700 bg-white">
      <option value="" disabled selected>Select a payment method</option>
      <option value="visa">Visa</option>
      <option value="mastercard">MasterCard</option>
      <option value="paypal">PayPal</option>
    </select>
            </div>

            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Submit</Button>

          
          </form>
        </div>

        {/* Booking Summary */}
        <div className=" rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Your Booking</h2>
          <div className="border rounded-lg p-4 space-y-4">
  {/* Card Header with image on the left and text on the right */}
  <CardHeader className="flex items-center p-4">
    {/* Image Section */}
    <Image
      src={img5} // Replace with the correct image path
      alt="Studio Allston Hotel"
      width={80}
      height={80}
      className="rounded-lg"
    />

    {/* Text Section */}
    <div className="ml-4"> {/* Adds space between image and text */}
      <h2 className="text-lg font-bold">Studio Allston Hotel</h2>
      <p className="text-sm text-gray-500">California</p>
      <p className="text-sm text-gray-500">
        Room type: <span className="font-medium">Queen Room</span>
      </p>
    </div>
  </CardHeader>

  {/* Card Content */}
  <CardContent className="p-4 space-y-4">
    {/* Your Trip Section */}
    <div>
      <h3 className="font-medium text-gray-600">Your trip</h3>
      <div className="text-sm text-gray-700">
        <p>
          <span className="font-medium">Date:</span> 29/11/2024 - 30/11/2024{" "}
          <span className="text-blue-600 font-medium cursor-pointer">Edit</span>
        </p>
        <div className="mt-2">
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer">Detail</summary>
            <ul className="ml-4 mt-2 list-disc">
              <li>Number of Night: 1</li>
              <li>Adults: 1</li>
              <li>Room: 1</li>
            </ul>
          </details>
        </div>
      </div>
    </div>

    {/* Coupon Code Section */}
    <div>
      <h3 className="font-medium text-gray-600">Coupon Code</h3>
      <div className="flex items-center gap-2 mt-2">
        <Input placeholder="Enter coupon code" className="flex-1" />
        <Button className="bg-blue-600 text-white hover:bg-blue-700">APPLY</Button>
      </div>
    </div>

    {/* Price Details Section */}
    <div>
      <h3 className="font-medium text-gray-600">Price details</h3>
      <div className="text-sm text-gray-700 space-y-1">
        <p>
          <span>1 night:</span> <span className="float-right">₹178.00</span>
        </p>
        <p>
          <span>Subtotal:</span> <span className="float-right">₹178.00</span>
        </p>
        <p className="font-bold text-black">
          <span>Pay Amount:</span> <span className="float-right">₹178.00</span>
        </p>
      </div>
    </div>
  </CardContent>
</div>

        </div>
      </div>





       {/* Payment Method */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
    <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
      <div className="lg:col-span-1">
      <Card className="rounded-lg shadow-md">
        <CardHeader className="text-center">
          <h2 className="text-lg text-start font-semibold mb-2">Bank Transfer</h2>
        </CardHeader>
        <CardContent className="space-y-6">
  {/* Bank Transfer Details */}
  <div className="text-sm text-gray-600">
    <p className="font-medium text-gray-700">Bank Account Information:</p>
    <p className="mt-2">
      <span className="font-medium">Account Name:</span> Nguyen Jack
    </p>
    <p className="mt-2">
      <span className="font-medium">Account Number:</span> 0123458741254
    </p>
    <p className="mt-2">
      <span className="font-medium">Bank Name:</span> HSBC Private International Bank
    </p>
    <p className="mt-2">
      <span className="font-medium">SWIFT Code:</span> 12312
    </p>
    <p className="italic text-gray-500 mt-2">
      Please contact the admin for payment confirmation!
    </p>
  </div>
</CardContent>

        <CardFooter>
        </CardFooter>
      </Card>
    </div>
    
    </div>
    

   
    </div>
    </div>
    </>
  );
};

export default Checkout;
