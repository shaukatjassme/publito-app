import React from 'react';
import Image from 'next/image';

export const Header = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-gray-900">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image
                            src="/images/publitio_logo_130x49.png"
                            alt="Logo"
                            width={150}
                            height={150}
                        />
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5  text-white font-bold">Solutions</a>
                        <a className="mr-5  text-white font-bold">Pricing</a>
                        <a className="mr-5  text-white font-bold">Community</a>
                        <a className="mr-5  text-white font-bold">Developers</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 trail-button">Start Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
}
