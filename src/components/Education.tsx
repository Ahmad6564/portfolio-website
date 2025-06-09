import React from 'react';

const Education: React.FC = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                My academic background and qualifications.
            </p>
            
            <div className="max-w-3xl mx-auto">
                <div className="relative pl-8 border-l-2 border-blue-600 mb-12">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover-card">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="text-xl font-semibold text-blue-600">Bachelor of Computer Engineering</h3>
                            <span className="text-gray-500 dark:text-gray-400">2021 - 2025</span>
                        </div>
                        <p className="text-lg font-medium mb-2">National University of Sciences and Technology, Islamabad</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Final Year Computer Engineering student with a focus on embedded systems, machine learning, and artificial intelligence. Maintained a strong academic record while participating in various research projects and technical competitions.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-semibold shadow">Machine Learning</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-semibold shadow">Digital System Design</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full text-sm font-semibold shadow">Computer System Architecture</span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 rounded-full text-sm font-semibold shadow">Digital Signal Processing</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-sm font-semibold shadow">Data Structure</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-sm font-semibold shadow">Artificial Intelligence</span>
                            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 rounded-full text-sm font-semibold shadow">Computer Vision</span>
                            <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 rounded-full text-sm font-semibold shadow">Software Engineering</span>
                            <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 rounded-full text-sm font-semibold shadow">Computer Networks</span>
                            <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm font-semibold shadow">Digital Image Processing</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover-card">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="text-xl font-semibold text-blue-600">Pre-Engineering</h3>
                            <span className="text-gray-500 dark:text-gray-400">2018 - 2020</span>
                        </div>
                        <p className="text-lg font-medium mb-2">Govt Islamic College Civil Lines, Lahore</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Completed pre-engineering with distinction, focusing on mathematics, physics, and chemistry. Participated in various science and mathematics competitions.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-semibold shadow">Mathematics</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-semibold shadow">Physics</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-sm font-semibold shadow">Chemistry</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education; 