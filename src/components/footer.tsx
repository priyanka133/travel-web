import { FaInstagram, FaTwitter, FaFacebook, FaTiktok, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Mission */}
        <div>
          <h3 className="text-xl font-bold mb-2">Horizone</h3>
          <p className="text-sm text-gray-400">
            Our mission is to equip modern explorers with cutting-edge, functional, and stylish bags that elevate every adventure.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            ©2024 Horizone. All rights reserved.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">About</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Career</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Return</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Get Updates */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Get Updates</h4>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300 transition duration-300">
              Subscribe
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaDiscord /></a>
            <a href="#" className="hover:text-white"><FaTiktok /></a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 border-t border-gray-800 pt-4 text-sm text-gray-500 flex justify-between">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
}
 