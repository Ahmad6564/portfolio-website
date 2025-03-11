import React, { useState } from 'react';

interface NavigationProps {
    parentToChild: {
        mode: string;
    };
    modeChange: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ parentToChild, modeChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white tracking-tight">
                        <span className="text-blue-600">A</span>hmad<span className="text-blue-600">K</span>halid
                    </span>
                </a>
                
                {/* Theme Toggle Button - Always Visible */}
                <div className="flex md:order-last">
                    <button
                        onClick={modeChange}
                        aria-label="Toggle Dark Mode"
                        className="p-2.5 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 transition-all duration-300"
                    >
                        {parentToChild.mode === 'dark' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                        )}
                    </button>
                </div>
                
                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button 
                        onClick={toggleMenu}
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600"
                        aria-controls="navbar-menu" 
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}/>
                        </svg>
                    </button>
                </div>
                
                {/* Navigation Links */}
                <div 
                    className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto transition-all duration-300 ease-in-out`} 
                    id="navbar-menu"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-200 rounded-lg bg-white/90 dark:bg-gray-800/90 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:md:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="#main" onClick={() => setIsMenuOpen(false)} className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-500 md:p-0 transition-colors duration-200">Home</a>
                        </li>
                        <li>
                            <a href="#expertise" onClick={() => setIsMenuOpen(false)} className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-500 md:p-0 transition-colors duration-200">Expertise</a>
                        </li>
                        <li>
                            <a href="#certification" onClick={() => setIsMenuOpen(false)} className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-500 md:p-0 transition-colors duration-200">
                                <span className="relative">
                                    Certifications
                                    <span className="absolute -top-1 -right-2 flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#timeline" onClick={() => setIsMenuOpen(false)} className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-500 md:p-0 transition-colors duration-200">Timeline</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-500 md:p-0 transition-colors duration-200">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-500 md:p-0 transition-colors duration-200">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation; 