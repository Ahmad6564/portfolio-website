import React, { useEffect } from 'react';

const Main: React.FC = () => {
    // Animation effect on load
    useEffect(() => {
        const animateOnLoad = () => {
            const leftContent = document.querySelector('#left-content');
            const rightContent = document.querySelector('#right-content');
            
            if (leftContent) {
                leftContent.classList.add('animate-in');
            }
            
            if (rightContent) {
                rightContent.classList.add('animate-in');
            }
        };
        
        // Run animation after a slight delay
        setTimeout(animateOnLoad, 300);
    }, []);
    
    return (
        <section id="home" className="w-full max-w-screen-xl mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left side - Introduction */}
                <div id="left-content" className="md:w-1/2 text-left opacity-0 transition-all duration-1000 transform translate-x-[-20px]">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                        Hi, I&apos;m <span className="relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:h-1 after:rounded after:w-full after:bg-blue-500/20 after:transition-all after:duration-300 hover:after:h-[40%] hover:after:bg-blue-500/30">Muhammad Ahmad</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-700 dark:text-gray-300">
                        Computer Engineering Student & ML Engineer
                    </h2>
                    
                    <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#contact"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 transform hover:translate-y-1 shadow-md hover:shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            Contact Me
                        </a>
                        <a
                            href="https://docs.google.com/document/d/1X-Ut3vZhDUrJnM3OZFYm_xFPmd5geGgx/edit?usp=sharing&ouid=115684314747029939501&rtpof=true&sd=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-600 transition-all duration-300 transform hover:translate-y-1 shadow-md hover:shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Resume
                        </a>
                    </div>
                </div>
                
                {/* Right side - About Me Card */}
                <div id="right-content" className="md:w-1/2 opacity-0 transition-all duration-1000 transform translate-x-[20px]">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">About Me</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            I&apos;m a Computer Engineering senior at NUST, Islamabad, passionate about embedded systems, 
                            machine learning, and AI. I build efficient, real-time solutions—ranging from FPGA-based 
                            matrix multiplication using Verilog to smart, data-driven applications with Python, FastAPI, 
                            and React.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                            I actively share my insights on ML and AI through articles on Medium, continually pushing 
                            the boundaries of technology.
                        </p>
                        
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm transform transition-transform hover:scale-110">Machine Learning</span>
                            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm transform transition-transform hover:scale-110">Artificial Intelligence</span>
                            <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm transform transition-transform hover:scale-110">Deep Learning</span>
                            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full text-sm transform transition-transform hover:scale-110">CNN</span>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm transform transition-transform hover:scale-110">FPGA</span>
                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm transform transition-transform hover:scale-110">Python</span>
                            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm transform transition-transform hover:scale-110">C++</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm transform transition-transform hover:scale-110">Assembly</span>
                            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm transform transition-transform hover:scale-110">React</span>
                            <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm transform transition-transform hover:scale-110">FastAPI</span>
                            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm transform transition-transform hover:scale-110">Verilog</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main; 