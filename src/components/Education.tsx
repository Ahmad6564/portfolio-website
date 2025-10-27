import React from 'react';

const Education: React.FC = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">Education</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                My academic background and qualifications.
            </p>
            
            <div className="max-w-3xl mx-auto">
                <div className="relative pl-8 border-l-2 border-gray-400 dark:border-gray-600 mb-12">
                    <div className="absolute w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full -left-[9px] top-1"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 hover-card">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Bachelor of Computer Engineering</h3>
                            <span className="text-gray-500 dark:text-gray-400">2021 - 2025</span>
                        </div>
                        <p className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">National University of Sciences and Technology, Islamabad</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Final Year Computer Engineering student with a focus on embedded systems, machine learning, and artificial intelligence. Maintained a strong academic record while participating in various research projects and technical competitions.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Machine Learning</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Digital System Design</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Computer System Architecture</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Digital Signal Processing</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Data Structure</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Artificial Intelligence</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Computer Vision</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Software Engineering</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Computer Networks</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Digital Image Processing</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative pl-8 border-l-2 border-gray-400 dark:border-gray-600">
                    <div className="absolute w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full -left-[9px] top-1"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 hover-card">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Pre-Engineering</h3>
                            <span className="text-gray-500 dark:text-gray-400">2018 - 2020</span>
                        </div>
                        <p className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Govt Islamic College Civil Lines, Lahore</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Completed pre-engineering with distinction, focusing on mathematics, physics, and chemistry. Participated in various science and mathematics competitions.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Mathematics</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Physics</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow">Chemistry</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education; 