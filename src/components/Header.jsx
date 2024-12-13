import React, { useState, useEffect } from 'react';

function Header({ isDarkMode, setIsDarkMode, toggleTheme }) {

    return (
        <header
            className={`${isDarkMode ? 'bg-black text-white shadow-white' : 'bg-white text-black '
                } flex  shadow-md py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50`}
        >
            <div className="flex flex-wrap items-center justify-between gap-4 w-full">
                <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2"
                >
                    {/* Logo can be added here */}
                </a>

                <div
                    id="collapseMenu"
                    className={`
            ${isDarkMode ? 'bg-black' : 'bg-white'}
             max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
                >
                    <button
                        id="toggleClose"
                        className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5 fill-black"
                            viewBox="0 0 320.591 320.591"
                        >
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            ></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            ></path>
                        </svg>
                    </button>

                    <ul className={`lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${isDarkMode ? 'max-lg:bg-black' : 'max-lg:bg-white'
                        }`}>
                        <li className={`max-lg:border-b max-lg:py-3 px-3 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className={`hover:text-[#007bff] block font-semibold text-[15px] ${isDarkMode ? 'text-white' : 'text-[#007bff]'
                                    }`}
                            >
                                Home
                            </a>
                        </li>
                        <li className={`max-lg:border-b max-lg:py-3 px-3 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className={`hover:text-[#007bff] block font-semibold text-[15px] ${isDarkMode ? 'text-gray-300' : 'text-[#333]'
                                    }`}
                            >
                                Team
                            </a>
                        </li>
                        <li className={`max-lg:border-b max-lg:py-3 px-3 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className={`hover:text-[#007bff] block font-semibold text-[15px] ${isDarkMode ? 'text-gray-300' : 'text-[#333]'
                                    }`}
                            >
                                Feature
                            </a>
                        </li>
                        <li className={`max-lg:border-b max-lg:py-3 px-3 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className={`hover:text-[#007bff] block font-semibold text-[15px] ${isDarkMode ? 'text-gray-300' : 'text-[#333]'
                                    }`}
                            >
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center ml-auto space-x-6'>
                    <label id="theme-toggle-button">
                        <input type="checkbox" id="toggle" onChange={toggleTheme} />
                        <svg viewBox="0 0 69.667 44" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(3.5 3.5)" data-name="Component 15 – 1">
                                <g filter="url(#container)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
                                    <rect fill="#83cbd8" transform="translate(3.5 3.5)" rx="17.5" height="35" width="60.667" data-name="container" id="container"></rect>
                                </g>
                                <g transform="translate(2.333 2.333)" id="button">
                                    {/* Sun and Moon icon logic */}
                                    <g data-name="sun" id="sun">
                                        <g filter="url(#sun-outer)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
                                            <circle fill="#f8e664" transform="translate(5.83 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="sun-outer" id="sun-outer-2"></circle>
                                        </g>
                                        <g filter="url(#sun)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
                                            <path fill="rgba(246,254,247,0.29)" transform="translate(9.33 9.33)" d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z" data-name="sun" id="sun-3"></path>
                                        </g>
                                        <circle fill="#fcf4b9" transform="translate(8.167 8.167)" r="7" cy="7" cx="7" id="sun-inner"></circle>
                                    </g>

                                    <g data-name="moon" id="moon">
                                        <g filter="url(#moon)" transform="matrix(1, 0, 0, 1, -31.5, -5.83)">
                                            <circle fill="#cce6ee" transform="translate(31.5 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="moon" id="moon-3"></circle>
                                        </g>
                                        <g fill="#a6cad0" transform="translate(-24.415 -1.009)" id="patches">
                                            <circle transform="translate(43.009 4.496)" r="2" cy="2" cx="2"></circle>
                                            <circle transform="translate(39.366 17.952)" r="2" cy="2" cx="2" data-name="patch"></circle>
                                            <circle transform="translate(33.016 8.044)" r="1" cy="1" cx="1" data-name="patch"></circle>
                                            <circle transform="translate(51.081 18.888)" r="1" cy="1" cx="1" data-name="patch"></circle>
                                            <circle transform="translate(33.016 22.503)" r="1" cy="1" cx="1" data-name="patch"></circle>
                                            <circle transform="translate(50.081 10.53)" r="1.5" cy="1.5" cx="1.5" data-name="patch"></circle>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </label>
                </div>
            </div>
        </header>
    );
}

export default Header;
