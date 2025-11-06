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
                        Junior AI Engineer | Generative AI & LLM Specialist
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Transforming AI research into production-ready solutions
                    </p>
                    
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
                            href="https://drive.google.com/file/d/1j2git2hwS3SboihGkG2at9E1B2W2mSw4/view?usp=sharing"
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
                            Computer Engineering professional specializing in Machine Learning, Generative AI, and NLP. As a Junior AI Engineer, I transform cutting-edge AI research into scalable, production-ready solutions that drive real business value. Expert in building and fine-tuning Large Language Models (GPT, BERT, LLaMA), developing intelligent chatbots with advanced prompt engineering, and designing Retrieval-Augmented Generation (RAG) pipelines. Certified in IBM Generative AI Engineering and proficient with PyTorch, TensorFlow, LangChain, and Hugging Face Transformers. My expertise spans end-to-end AI deployment across cloud platforms, FPGA-optimized computations, and transformer-based systems for computer vision and time series classification.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transform transition-transform hover:scale-110">Generative AI</span>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transform transition-transform hover:scale-110">Large Language Models</span>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transform transition-transform hover:scale-110">NLP</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">RAG Systems</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">LangChain</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">Hugging Face</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">PyTorch</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">TensorFlow</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">Transformers</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">Prompt Engineering</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">Python</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">C++</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">FastAPI</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">Flask</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">React.js</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">MLOps</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">Computer Vision</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">FPGA</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">MongoDB</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform transition-transform hover:scale-110">MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main; 