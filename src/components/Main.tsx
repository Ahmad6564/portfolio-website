import React from 'react';

const Main: React.FC = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I&apos;m <span className="text-blue-600">Ahmad Khalid</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                Computer Engineering Student & Full Stack Developer
            </p>
            <div className="flex justify-center gap-4">
                <a
                    href="#contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Contact Me
                </a>
                <a
                    href="#projects"
                    className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                    View Projects
                </a>
            </div>
        </div>
    );
};

export default Main; 