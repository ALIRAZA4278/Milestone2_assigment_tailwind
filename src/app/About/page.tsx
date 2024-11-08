import React from 'react';
import Image from 'next/image';


export default function AboutPage() {
    return (
        <div className="font-serif">

            <div
                className="relative w-full h-[50vh] bg-cover bg-center"
                style={{ backgroundImage: 'url("/About.jpg")' }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div> 
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 py-8 md:py-16 bg-white rounded-lg">
                <div className="space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2859b6] font-bold">
                            About ChoosEquality
                        </h1>
                    </div>

                    <p className="text-lg sm:text-xl text-[#2859b6] leading-relaxed sm:px-8 md:px-16">
                        ChoosEquality is committed to providing education that is both free and accessible to everyone, regardless of background, race, or location. We believe that education is a fundamental right and are passionate about breaking down the barriers that prevent individuals from receiving the quality education they deserve.
                    </p>

                    <p className="text-lg sm:text-xl text-[#2859b6] leading-relaxed sm:px-8 md:px-16">
                        Our team is dedicated to creating innovative educational solutions that reach people in every corner of the world. We offer a range of resources and support services to ensure that no one is left behind. Whether you’re a student, teacher, or community leader, we’re here to help you access the tools and knowledge you need to succeed.
                    </p>

                    <p className="text-lg sm:text-xl text-[#2859b6] leading-relaxed sm:px-8 md:px-16">
                        We are driven by a vision of a more equitable and inclusive world, where education is available to all. Join us in making this vision a reality—together, we can create an environment where learning knows no bounds.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
                    <button className="bg-[#2859b6] text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                        2035 Financial Statement
                    </button>
                    <button className="bg-[#2859b6] text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                        Certification Registry
                    </button>
                </div>

                <div className="max-w-screen-xl mx-auto py-16 px-4 text-center">
                    <h2 className="text-3xl md:text-4xl text-[#2859b6] font-bold mb-8">OUR GOALS</h2>

                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[#2859b6] gap-40">

                        <li className="p-4 mb-4 flex justify-center items-center">
                            <div className="text-center flex flex-col justify-center items-center">
                                <Image src="/AboutGoal1.svg" alt="Logo" width={200} height={200} />
                                <p className="mt-2 text-xl font-bold">Spread empathy <br />through education</p>
                            </div>
                        </li>

                        <li className=" p-4 mb-4 flex justify-center items-center">
                            <div className="text-center flex flex-col justify-center items-center">
                                <Image src="/AboutGoal2.svg" alt="Logo" width={200} height={200} />
                                <p className="mt-2 text-xl font-bold">Increase donations equally across 24 countries</p>
                            </div>
                        </li>

                        <li className="p-4 mb-4 flex justify-center items-center">
                            <div className="text-center flex flex-col justify-center items-center">
                                <Image src="/AboutGoal3.svg" alt="Logo" width={200} height={200} />
                                <p className="mt-2 text-xl font-bold">Help more children and teens graduate from high school</p>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="max-w-screen-xl mx-auto py-16 px-4 text-center">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <div className="w-full h-full object-cover" ><Image src="/About1.jpg" alt="Aboutimg" width={500} height={500} /></div>
                        <div className="w-full h-full object-cover" ><Image src="/About3.jpg" alt="Aboutimg" width={500} height={500} /></div>
                        <div className="w-full h-full object-cover" ><Image src="/About4.jpg" alt="Aboutimg" width={500} height={500} /></div>
                        <div className="w-full h-full object-cover" ><Image src="/About5.jpg" alt="Aboutimg" width={500} height={500} /></div>
                        <div className="w-full h-full object-cover" ><Image src="/About6.jpg" alt="Aboutimg" width={500} height={500} /></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
