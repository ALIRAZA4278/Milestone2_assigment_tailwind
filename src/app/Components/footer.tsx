import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between bg-white shadow-md rounded-lg">

        {/* Left Section (Contact Info) */}
        <div className="w-full md:w-[70%] bg-[#2859b6] p-4 rounded-lg mb-6 md:mb-0">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2 text-white">CONTACT US</h1>
            <p className="text-sm text-zinc-200">I'm a paragraph. Click here to add your own text and edit me.</p>
            <p className="text-sm text-zinc-200 mt-2">Registered Charity: 12345-67</p>
            <hr className="my-4" />
            <p className="text-sm text-zinc-200">Af912923@gmail.com</p>
          </div>

          <div>
            <p className="text-sm text-zinc-200 mb-2">500 Terry Francine Street, San Francisco, CA 94158</p>
            <p className="text-sm text-gray-700 mb-2">Phone: 123-456-7890</p>
            <hr className="my-4" />
            <h6 className="font-semibold text-zinc-200">Terms & Conditions</h6>
            <p className="text-sm text-zinc-200">Privacy Policy</p>
            <p className="text-sm text-zinc-200">Refund Policy</p>
            <hr className="my-4" />

            <div className="flex justify-center space-x-6 mt-6">
              {/* Twitter Icon */}
              <Link href="https://x.com/AliFaro45370063" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/Twtiier.svg"
                  alt="Twitter"
                  width={30}
                  height={30}
                />
              </Link>

              {/* Facebook Icon */}
              <Link href="https://www.facebook.com/ali.farooq.1447342/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
              </Link>

              {/* Instagram Icon */}
              <Link href="https://www.instagram.com/its_zyrox_x/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/Instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </Link>

              {/* LinkedIn Icon */}
              <Link href="https://www.linkedin.com/in/ali-raza-4a5762282/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/Linkedin.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </div>

          </div>
        </div>

        <div className="w-full md:w-[30%] bg-white p-4 rounded-lg border-2 border-gray-300 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">BE THE FIRST TO KNOW</h2>
          <p className="text-sm mb-6">Sign up to our newsletter to stay informed</p>

          <div className="mb-4">
            <label htmlFor="Email" className="block text-sm font-medium mb-2">Email:</label>
            <input
              type="email"
              id="Email"
              name="Email"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center mb-6">
            <input type="checkbox" id="checkbox" className="mr-2" />
            <label htmlFor="checkbox" className="text-sm">Yes, subscribe me to your newsletter.</label>
          </div>

          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Subscribe
          </button>
        </div>
        <div className="bg-gray-800 text-white py-4 mt-16">

        </div>
      </div>
      <div className="bg-gray-300 text-white py-4 mt-16">
        <div className="text-center flex flex-col items-center">
          {/* Logo centered */}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={72}
            height={16}
            className="" // Margin below the logo for spacing
          />

          {/* Copyright Text */}
          <p className="text-sm text-black">
            &copy; {` ${new Date().getFullYear()}`} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>

  )
}
