import React from 'react';
import Image from 'next/image';


export default function Teampage() {
    return (
        <div className="font-serif">

            <div
                className="relative w-full h-[40vh] bg-cover bg-center"
                style={{ backgroundImage: 'url("/Team.jpg")' }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 py-8 md:py-16 bg-white rounded-lg">
                <div className="space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2859b6] font-bold">
                            OUR TEAM
                        </h1>
                    </div>

                    <p className="text-sm sm:text-xl text-[#2859b6] leading-relaxed sm:px-8 md:px-16 text-center">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>

                    <div className="px-4 py-10">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                            {/* TEAM Card 1 */}
                            <li className="flex flex-col justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/Team1.jpg"
                                    alt="Annual Tech Challenge"
                                    width={150}
                                    height={150}
                                    className="object-cover w-32 h-32 rounded-full border-4 border-blue-600"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h2 className="text-xl font-bold text-[#2859b6]">James Hogan</h2>
                                    <p className="mt-2 text-md text-gray-700">
                                        James Hogan
                                        This item is connected to a text field in your content collection. Double click to add your own content.</p>
                                    <button className="mt-4 px-4 py-2 bg text-black font-semibold rounded-lg  ">
                                        af912923@gmail.com
                                    </button>
                                </div>
                            </li>

                            {/* TEAM Card 2 */}
                            <li className="flex flex-col justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/Team6.jpg"
                                    alt="Adopt a Student"
                                    width={150}
                                    height={150}
                                    className="object-cover w-32 h-32 rounded-full border-4 border-blue-600"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h2 className="text-xl font-bold text-[#2859b6]">Nitin Chet</h2>
                                    <p className="mt-2 text-md text-gray-700">
                                        James Hogan
                                        This item is connected to a text field in your content collection. Double click to add your own content.</p>
                                    <button className="mt-4 px-4 py-2 bg text-black font-semibold rounded-lg  ">
                                        af912923@gmail.com
                                    </button>
                                </div>
                            </li>

                            {/* TEAM Card 3 */}
                            <li className="flex flex-col justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/Team3.jpg"
                                    alt="Transportation for Youth"
                                    width={150}
                                    height={150}
                                    className="object-cover w-32 h-32 rounded-full border-4 border-blue-600"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h2 className="text-xl font-bold text-[#2859b6]">Jeanette Dhay</h2>
                                    <p className="mt-2 text-md text-gray-700">
                                        James Hogan
                                        This item is connected to a text field in your content collection. Double click to add your own content.</p>
                                    <button className="mt-4 px-4 py-2 bg text-black font-semibold rounded-lg  ">
                                        af912923@gmail.com
                                    </button>
                                </div>
                            </li>

                            {/* TEAM Card 4 */}
                            <li className="flex flex-col justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/Team4.jpg"
                                    alt="English for All"
                                    width={150}
                                    height={150}
                                    className="object-cover w-32 h-32 rounded-full border-4 border-blue-600"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h2 className="text-xl font-bold text-[#2859b6]">
                                    Katie Franklin
                                    </h2>
                                    <p className="mt-2 text-md text-gray-700">
                                        James Hogan
                                        This item is connected to a text field in your content collection. Double click to add your own content.</p>
                                    <button className="mt-4 px-4 py-2 bg text-black font-semibold rounded-lg  ">
                                        af912923@gmail.com
                                    </button>
                                </div>
                            </li>

                        </ul>
                    </div>





                </div>
            </div>

        </div>
    );
}
