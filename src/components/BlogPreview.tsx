import React, { useState } from 'react';

interface BlogPost {
    title: string;
    description: string;
    date: string;
    image?: string;
    url: string;
    tags: string[];
}

const BlogPreview: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    
    // Hardcoded blog posts since we don't have direct API access
    const blogPosts: BlogPost[] = [
        {
            title: "Understanding Overfitting, Underfitting, Bias, and Variance in Machine Learning",
            description: "Machine learning models aim to generalize well to unseen data, but achieving this balance is often challenging. Two common pitfalls that can hinder model performance are...",
            date: "February 1, 2024",
            url: "https://medium.com/@ahmadkhalid6564/understanding-overfitting-underfitting-bias-and-variance-in-machine-learning-41b1c918e6d",
            tags: ["Machine Learning", "Data Science", "Model Training"]
        },
        {
            title: "Convexifying Neural Networks: Enhancing Optimization and Performance",
            description: "Neural networks have revolutionized the field of artificial intelligence, providing significant breakthroughs in areas such as image recognition, natural language processing, and more...",
            date: "January 30, 2024",
            url: "https://medium.com/@ahmadkhalid6564/convexifying-neural-networks-enhancing-optimization-and-performance-d4a3dcba38b8",
            tags: ["Neural Networks", "Deep Learning", "Optimization"]
        },
        {
            title: "WiFi-Enabled Occupancy Detection System Using Machine Learning",
            description: "This article explores the implementation of a Wi-Fi-based occupancy detection system using machine learning techniques...",
            date: "February 26, 2024",
            url: "https://medium.com/@ahmadkhalid6564/wifi-enabled-occupancy-detection-system-using-machine-learning-a87d34f0c01f",
            tags: ["IoT", "Machine Learning", "Wi-Fi Sensing"]
        },
        {
            title: "A Deep Dive into Random Forest and SVM Models",
            description: "In the exciting world of machine learning, Random Forest and Support Vector Machines (SVM) are two superstar algorithms known for their performance...",
            date: "February 26, 2024",
            url: "https://medium.com/@ahmadkhalid6564/a-deep-dive-into-random-forest-and-svm-models-3aa35ef8d533",
            tags: ["Machine Learning", "Random Forest", "SVM"]
        },
    ];

    return (
        <section className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">From My Blog</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                I write about machine learning, deep learning, and artificial intelligence on Medium.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {blogPosts.map((post, index) => (
                    <a 
                        key={index}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 h-full transform transition-all duration-300 hover-card hover:border-blue-300 dark:hover:border-blue-700">
                            <div className="p-6">
                                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {post.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex} 
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300 font-medium">
                                    Read article
                                    <svg 
                                        className={`w-5 h-5 ml-1 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-1' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            
            <div className="text-center">
                <a 
                    href="https://medium.com/@ahmadkhalid6564" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-300"
                >
                    View All Articles
                </a>
            </div>
        </section>
    );
};

export default BlogPreview; 