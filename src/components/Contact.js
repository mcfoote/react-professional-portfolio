import React from 'react';

export default function Contact() {

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe 
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{ filter: "opacity(0.7)" }} 
                        src=""
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                Address:
                            </h2>
                            <p className="mt-1">

                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                Email:
                            </h2>
                            <p className="mt-1">

                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                Phone:
                            </h2>
                            <p className="mt-1">

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}