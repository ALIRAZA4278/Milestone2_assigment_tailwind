import React from 'react';
import Image from 'next/image';

export default function ProjectPage() {
    return (
        <div className="font-serif">
            <div
                className="relative w-full h-[40vh] bg-cover bg-center"
                style={{ backgroundImage: 'url("/Projects.jpg")' }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 py-8 md:py-16 bg-white rounded-lg">
                <div className="space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2859b6] font-bold">OUR PROJECTS</h1>
                    </div>

                    <p className="text-sm sm:text-xl text-[#2859b6] leading-relaxed sm:px-8 md:px-16 text-center">
                        I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I&apos;m a great place for you to tell a story and let your users know a little more about you.
                    </p>

                    <div className="px-4 py-10">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">

                            {/* Project Card 1 */}
                            <li className="flex flex-col justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/Project1.jpg"
                                    alt="Annual Tech Challenge"
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-48"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h2 className="text-2xl font-bold text-[#2859b6]">Annual Tech Challenge</h2>
                                    <p className="mt-3 text-lg text-gray-700">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                        READ MORE
                                    </button>
                                </div>
                            </li>

                            {/* Project Card 2 */}
                            <li className="flex flex-col justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/Project2.jpg"
                                    alt="Adopt a Student"
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-48"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h2 className="text-2xl font-bold text-[#2859b6]">Adopt a Student</h2>
                                    <p className="mt-3 text-lg text-gray-700">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                        READ MORE
                                    </button>
                                </div>
                            </li>

                            {/* Project Card 3 */}
                            <li className="flex flex-col justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/Project3.jpeg"
                                    alt="Transportation for Youth"
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-48"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h2 className="text-2xl font-bold text-[#2859b6]">Transportation for Youth</h2>
                                    <p className="mt-3 text-lg text-gray-700">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                        READ MORE
                                    </button>
                                </div>
                            </li>

                            {/* Project Card 4 */}
                            <li className="flex flex-col justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/Project4.jpg"
                                    alt="English for All"
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-48"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h2 className="text-2xl font-bold text-[#2859b6]">English for All</h2>
                                    <p className="mt-3 text-lg text-gray-700">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                        READ MORE
                                    </button>
                                </div>
                            </li>

                            {/* Project Card 5 */}
                            <li className="flex flex-col justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/Project5.jpg"
                                    alt="Literacy Development"
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-48"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h2 className="text-2xl font-bold text-[#2859b6]">Literacy Development</h2>
                                    <p className="mt-3 text-lg text-gray-700">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                        READ MORE
                                    </button>
                                </div>
                            </li>

                            {/* Project Card 6 */}
                            <li className="flex flex-col justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/Project6.jpg"
                                    alt="Tolerance and Fair Play"
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-48"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h2 className="text-2xl font-bold text-[#2859b6]">Tolerance and Fair Play</h2>
                                    <p className="mt-3 text-lg text-gray-700">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                        READ MORE
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
