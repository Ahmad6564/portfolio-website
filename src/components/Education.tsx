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
                        <p className="text-lg font-medium mb-2">Govt Islamic College Civil Lines, Lahore</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Final Year Computer Engineering student with a focus on embedded systems, machine learning,
                            and artificial intelligence. Maintained a strong academic record while participating in 
                            various research projects and technical competitions.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">Machine Learning</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">Embedded Systems</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">Computer Architecture</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">Digital Signal Processing</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover-card">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="text-xl font-semibold text-blue-600">Higher Secondary Education</h3>
                            <span className="text-gray-500 dark:text-gray-400">2018 - 2020</span>
                        </div>
                        <p className="text-lg font-medium mb-2">Pre-Engineering, Punjab College</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Completed pre-engineering with distinction, focusing on mathematics, physics, and computer science.
                            Participated in various science and mathematics competitions.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">Mathematics</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">Physics</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">Computer Science</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education; 