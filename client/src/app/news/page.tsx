"use client";

import { useState, useEffect } from "react";
import "@fontsource/asap-condensed";
import "@fontsource/albert-sans";
import "@fontsource/asap-condensed";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import QuickEnquiry from "@/components/QuickEnquiry";
import { NEWSDATA } from "@/lib/constant";

export default function NewsPage() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div>
      <div className="bg-white hidden md:block">
        <h1 className="text-5xl font-bold mb-4 text-center text-[#3b4f84] mt-10">
          Stay Updated with the Latest Immigration & Visa News
        </h1>
        <p className="text-2xl text-black font-albert mb-6 text-center">
          Your go-to source for the latest visa policies, immigration updates,
          and travel regulations worldwide.
        </p>

        <div className="relative flex w-full h-[80%] px-10 py-8">
          {/* Custom Cursor */}
          <div
            className={`fixed w-24 h-24 z-30 flex items-center justify-center bg-black text-white text-xs uppercase font-bold rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 ${
              cursorVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          >
            Read More
          </div>

          <div className="w-2/3 h-full overflow-y-auto pr-6">
            <div className="grid grid-cols-2 gap-6 my-8">
              {NEWSDATA.map((news) => (
                <div
                  key={news.id}
                  className="group bg-gray-100 font-albert shadow-md rounded-xl p-5 transform transition duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-between h-full relative cursor-pointer"
                  onMouseEnter={() => setCursorVisible(true)}
                  onMouseLeave={() => setCursorVisible(false)}
                >
                  <div>
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={500}
                        height={300}
                        className="w-full h-52 object-cover transform transition duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <h2 className="text-lg font-semibold mt-3 text-[#3b4f84]">
                      {news.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{news.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 h-fit sticky top-8">
            <div className="w-full h-2/3 mt-8 top-8 bg-gray-100 ml-4 shadow-md rounded-xl p-6">
              <h2 className="text-xl text-center font-bold mb-4 text-[#3b4f84] font-albert">
                Quick Enquiry
              </h2>
              <QuickEnquiry btncss="w-full bg-[#3b4f84] text-white py-3 text-lg font-albert hover:text-[#3b4f84] hover:bg-white hover:border-2 hover:border-[#3b4f84] transition duration-700" />
            </div>

            <div className="mt-8 text-center sticky">
              <h3 className="text-4xl font-bold text-[#3b4f84] font-asap">
                Connect with Us
              </h3>
              <div className="flex justify-center space-x-12 mt-10">
                <a
                  href="#"
                  className="text-[#3b4f84] text-6xl hover:text-gray-600 transition rounded-xl"
                >
                  <FaFacebookF className="p-3 bg-blue-600 text-white rounded-xl" />
                </a>
                <a
                  href="#"
                  className="text-[#3b4f84] text-6xl hover:text-gray-600 transition "
                >
                  <FaInstagram className="p-3 bg-pink-500 text-white rounded-xl" />
                </a>
                <a
                  href="#"
                  className="text-[#3b4f84] text-6xl hover:text-gray-600 transition "
                >
                  <FaWhatsapp className="p-3 bg-green-500 text-white rounded-xl" />
                </a>
                <a
                  href="#"
                  className="text-[#3b4f84] text-6xl hover:text-gray-600 transition "
                >
                  <FaLinkedinIn className="p-3 bg-blue-700 text-white rounded-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white block md:hidden">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#3b4f84] mt-10 px-4">
          Stay Updated with the Latest Immigration & Visa News
        </h1>
        <p className="text-lg md:text-2xl text-black font-albert mb-6 text-center px-4">
          Your go-to source for the latest visa policies, immigration updates,
          and travel regulations worldwide.
        </p>

        <div className="relative flex flex-col md:flex-row w-full px-4 md:px-10 py-8">
          <div
            className={`fixed w-24 h-24 z-30 flex items-center justify-center bg-black text-white text-xs uppercase font-bold rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 ${
              cursorVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          >
            Read More
          </div>

          <div className="w-full md:w-2/3 overflow-y-auto pr-0 md:pr-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
              {NEWSDATA.map((news) => (
                <div
                  key={news.id}
                  className="group bg-gray-100 font-albert shadow-md rounded-xl p-5 transform transition duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-between h-full relative cursor-pointer"
                  onMouseEnter={() => setCursorVisible(true)}
                  onMouseLeave={() => setCursorVisible(false)}
                >
                  <div>
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={500}
                        height={300}
                        className="w-full h-52 object-cover transform transition duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <h2 className="text-lg font-semibold mt-3 text-[#3b4f84]">
                      {news.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{news.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block w-1/3 h-fit sticky top-8">
            <div className="w-full bg-gray-100 ml-4 shadow-md rounded-xl p-6">
              <h2 className="text-xl text-center font-bold mb-4 text-[#3b4f84] font-albert">
                Quick Enquiry
              </h2>
              <Button className="w-full bg-[#3b4f84] text-white py-3 text-lg font-albert">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>

        <div className=" text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-[#3b4f84] font-asap">
            Connect with Us
          </h3>
          <div className="flex justify-center space-x-6 md:space-x-12 mt-6 md:mt-10">
            <a
              href="#"
              className="text-[#3b4f84] text-4xl md:text-6xl hover:text-gray-600 transition rounded-xl"
            >
              <FaFacebookF className="p-3 bg-blue-600 text-white rounded-xl" />
            </a>
            <a
              href="#"
              className="text-[#3b4f84] text-4xl md:text-6xl hover:text-gray-600 transition"
            >
              <FaInstagram className="p-3 bg-pink-500 text-white rounded-xl" />
            </a>
            <a
              href="#"
              className="text-[#3b4f84] text-4xl md:text-6xl hover:text-gray-600 transition"
            >
              <FaWhatsapp className="p-3 bg-green-500 text-white rounded-xl" />
            </a>
            <a
              href="#"
              className="text-[#3b4f84] text-4xl md:text-6xl hover:text-gray-600 transition"
            >
              <FaLinkedinIn className="p-3 bg-blue-700 text-white rounded-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
