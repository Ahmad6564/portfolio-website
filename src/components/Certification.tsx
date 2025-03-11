import React from 'react';

const Certification: React.FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
            
            <div className="max-w-4xl mx-auto">
                {/* Featured Certification - Deep Learning */}
                <div className="mb-12 p-6 border-2 border-blue-600 rounded-lg shadow-md bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-800/50">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                                <span className="inline-flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    Deep Learning Specialization
                                </span>
                            </h3>
                            <p className="text-lg font-medium mb-1">Coursera | deeplearning.ai</p>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Comprehensive five-course specialization by Andrew Ng covering the foundations 
                                of deep learning, neural networks, and AI applications.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">Neural Networks</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">CNNs</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">RNNs</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">Computer Vision</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">NLP</span>
                            </div>
                            <a 
                                href="https://www.coursera.org/account/accomplishments/specialization/xxxxxxxx" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                View Certificate
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Other Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Machine Learning</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Stanford University | Coursera</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Foundation course covering machine learning algorithms and techniques including 
                            supervised learning, unsupervised learning, and best practices.
                        </p>
                        <a 
                            href="https://www.coursera.org/account/accomplishments/verify/xxxxxxxx" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:underline inline-flex items-center"
                        >
                            View Certificate
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                    
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">TensorFlow Developer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Google | Coursera</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Professional certification for building and training neural network models using TensorFlow,
                            covering computer vision, NLP, and time series analysis.
                        </p>
                        <a 
                            href="https://www.coursera.org/account/accomplishments/professional-cert/xxxxxxxx" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:underline inline-flex items-center"
                        >
                            View Certificate
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certification; 