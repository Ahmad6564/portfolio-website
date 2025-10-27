import React from 'react';

const Expertise: React.FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">My Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-all hover:border-gray-400 dark:hover:border-gray-500">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Full Stack Development</h3>
                    <p className="text-gray-700 dark:text-gray-300">Experience with React, Next.js, Node.js, and modern web technologies to build responsive and scalable applications.</p>
                </div>
                <div className="p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-all hover:border-gray-400 dark:hover:border-gray-500">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Computer Engineering</h3>
                    <p className="text-gray-700 dark:text-gray-300">Strong background in hardware design, embedded systems, and FPGA programming for efficient computing solutions.</p>
                </div>
                <div className="p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-all hover:border-gray-400 dark:hover:border-gray-500">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Machine Learning</h3>
                    <p className="text-gray-700 dark:text-gray-300">Proficient in Python, TensorFlow, and data analysis techniques for building AI-powered applications and insights.</p>
                </div>
            </div>
        </div>
    );
};

export default Expertise; 