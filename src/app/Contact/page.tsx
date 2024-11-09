import React from 'react';

export default function ContactPage() {
    return (
        <div className="font-serif">
            <div
                className="relative w-full h-[40vh] bg-cover bg-center"
                style={{ backgroundImage: 'url("/Contacts.jpg")' }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 py-8 md:py-16 bg-white rounded-lg">
                <div className="space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2859b6] font-bold">Contact Us</h1>
                        <p className="mt-4 text-lg text-[#2859b6] ">
                            We&apos;d love to hear from you! Please choose how you&apos;d like to get involved.
                        </p>
                    </div>

                    {/* Volunteer Form */}
                    <div className="px-4 py-10" id="volunteer-form text-black">
                        <h2 className="text-2xl font-bold mb-4 text-black">Volunteer with Us</h2>
                        <form className="space-y-4 text-black">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <input
                                type="tel"
                                placeholder="Your Phone Number"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <textarea
                                placeholder="Why do you want to volunteer with us?"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <textarea
                                placeholder="Availability (Days/Times)"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-md"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Partner Form */}
                    <div className="px-4 py-10" id="partner-form">
                        <h2 className="text-2xl font-bold mb-4 text-black">Partner with Us</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Organization Name"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Contact Name"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <textarea
                                placeholder="Tell us about your partnership proposal"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-md"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Contribute Form */}
                    <div className="px-4 py-10" id="contribute-form">
                        <h2 className="text-2xl font-bold mb-4 text-black">Make a Donation</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <input
                                type="number"
                                placeholder="Donation Amount"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <textarea
                                placeholder="Additional Comments (Optional)"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-md"
                            >
                                Donate
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
