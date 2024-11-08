import React from 'react';
import Image from 'next/image';

export default function NewsPage() {
    return (
        <div className="font-serif">

            <div
                className="relative w-full h-[40vh] bg-cover bg-center"
                style={{ backgroundImage: 'url("/News.jpg")' }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 py-8 md:py-16 bg-white rounded-lg">
                <div className="space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2859b6] font-bold">News & Updates</h1>
                    </div>

                    <p className="text-sm sm:text-xl text-[#2859b6] leading-relaxed sm:px-8 md:px-16 text-center">
                        Explore the latest stories, updates, and events from our community. Stay informed with what matters most.
                    </p>

                    <div className="px-4 py-10">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">

                            {/* News Card 1 */}
                            <li className="relative bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex flex-col sm:flex-row">
                                    
                                    <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
                                        <Image
                                            src="/News1.jpg"
                                            alt="Annual Tech Challenge"
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
                                    </div>

                                    
                                    <div className="flex flex-col justify-between p-6 sm:w-1/2 bg-white">
                                        <div className="text-left">
                                            <h6 className="text-sm font-semibold text-gray-500 mb-2">
                                                Jun 1, 2023
                                            </h6>
                                            <h2 className="text-2xl font-bold text-[#2859b6] mb-3">
                                                10 Reasons Why School Uniforms Matter
                                            </h2>
                                            <p className="text-lg text-gray-700">
                                                Discover how school uniforms can contribute to discipline, equality, and a focused learning environment.
                                            </p>
                                        </div>
                                        <div className="mt-4 text-left">
                                            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* News Card 2 */}
                            <li className="relative bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex flex-col sm:flex-row">
                                    
                                    <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
                                        <Image
                                            src="/News2.jpg"
                                            alt="Adopt a Student"
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
                                    </div>

                                    
                                    <div className="flex flex-col justify-between p-6 sm:w-1/2 bg-white">
                                        <div className="text-left">
                                            <h6 className="text-sm font-semibold text-gray-500 mb-2">
                                                Nov 1, 2023
                                            </h6>
                                            <h2 className="text-2xl font-bold text-[#2859b6] mb-3">
                                                The Role of Sports in the Education System
                                            </h2>
                                            <p className="text-lg text-gray-700">
                                                How sports programs enhance learning, foster teamwork, and contribute to student well-being.
                                            </p>
                                        </div>
                                        <div className="mt-4 text-left">
                                            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* News Card 3 */}
                            <li className="relative bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex flex-col sm:flex-row">
                                    
                                    <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
                                        <Image
                                            src="/News3.jpg"
                                            alt="Transportation for Youth"
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
                                    </div>

                                    
                                    <div className="flex flex-col justify-between p-6 sm:w-1/2 bg-white">
                                        <div className="text-left">
                                            <h6 className="text-sm font-semibold text-gray-500 mb-2">
                                                Oct 1, 2023
                                            </h6>
                                            <h2 className="text-2xl font-bold text-[#2859b6] mb-3">
                                                Protecting Our Children's Privacy
                                            </h2>
                                            <p className="text-lg text-gray-700">
                                                Learn how we can ensure children’s safety online in a rapidly changing digital world.
                                            </p>
                                        </div>
                                        <div className="mt-4 text-left">
                                            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* News Card 4 */}
                            <li className="relative bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex flex-col sm:flex-row">
                                    
                                    <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
                                        <Image
                                            src="/News4.jpg"
                                            alt="English for All"
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
                                    </div>

                                    
                                    <div className="flex flex-col justify-between p-6 sm:w-1/2 bg-white">
                                        <div className="text-left">
                                            <h6 className="text-sm font-semibold text-gray-500 mb-2">
                                                May 1, 2023
                                            </h6>
                                            <h2 className="text-2xl font-bold text-[#2859b6] mb-3">
                                                Spring 2023 High School Curriculum
                                            </h2>
                                            <p className="text-lg text-gray-700">
                                                Take a look at the Spring 2023 curriculum update for high school students.
                                            </p>
                                        </div>
                                        <div className="mt-4 text-left">
                                            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* News Card 5 */}
                            <li className="relative bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex flex-col sm:flex-row">
                                    
                                    <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
                                        <Image
                                            src="/News5.jpg"
                                            alt="English for All"
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
                                    </div>

                                    
                                    <div className="flex flex-col justify-between p-6 sm:w-1/2 bg-white">
                                        <div className="text-left">
                                            <h6 className="text-sm font-semibold text-gray-500 mb-2">
                                                Aug 1, 2023
                                            </h6>
                                            <h2 className="text-2xl font-bold text-[#2859b6] mb-3">
                                            Recent Classrooms Renovations
                                            </h2>
                                            <p className="text-lg text-gray-700">
                                                Take a look at the Spring 2023 curriculum update for high school students.
                                            </p>
                                        </div>
                                        <div className="mt-4 text-left">
                                            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* News Card 6 */}
                            <li className="relative bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex flex-col sm:flex-row">
                                    
                                    <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
                                        <Image
                                            src="/News6.jpg"
                                            alt="English for All"
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
                                    </div>

                                    
                                    <div className="flex flex-col justify-between p-6 sm:w-1/2 bg-white">
                                        <div className="text-left">
                                            <h6 className="text-sm font-semibold text-gray-500 mb-2">
                                                Jul 1, 2023
                                            </h6>
                                            <h2 className="text-2xl font-bold text-[#2859b6] mb-3">
                                            New Auditorium Launched in Luanda
                                            </h2>
                                            <p className="text-lg text-gray-700">
                                                Take a look at the Spring 2023 curriculum update for high school students.
                                            </p>
                                        </div>
                                        <div className="mt-4 text-left">
                                            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
