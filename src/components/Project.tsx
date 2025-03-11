import React from 'react';

const Project: React.FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Chat & File Sharing App</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            A real-time chat application with file sharing capabilities using BSD Sockets. Supports multiple users, direct messaging, and secure file transfers.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">C++</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Sockets</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Networking</span>
                        </div>
                        <div className="mt-4">
                            <a href="https://github.com/Ahmad6564/chat-file-sharing-application-using-BSD-sockets" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on GitHub →</a>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">X-ray Image Classification</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Deep learning model for classifying X-ray images using CNNs. Achieves high accuracy in identifying abnormalities in medical imaging data.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Python</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">TensorFlow</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Medical AI</span>
                        </div>
                        <div className="mt-4">
                            <a href="https://github.com/Ahmad6564/Histopathological-Images-Analysis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on GitHub →</a>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Wireless Network Routing Algorithm</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Designed and implemented custom routing algorithms for wireless networks. Optimized for network efficiency and reduced packet loss.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">C++</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Networking</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Algorithms</span>
                        </div>
                        <div className="mt-4">
                            <a href="https://github.com/Ahmad6564/Designing-topology-and-implement-routing-algorithm-of-wireless-Network." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on GitHub →</a>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Portfolio Website</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            This responsive portfolio website built with Next.js and Tailwind CSS. Features dark/light mode, smooth scrolling, and responsive design.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Next.js</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">React</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Tailwind CSS</span>
                        </div>
                        <div className="mt-4">
                            <a href="https://github.com/Ahmad6564/portfolio-website" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on GitHub →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project; 