import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const Expertise: React.FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
                Professional Experience
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Building production-ready AI solutions in healthcare technology
            </p>

            {/* Experience Card */}
            <div className="max-w-5xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 p-6 text-white">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                                    <FaBriefcase className="text-white" />
                                    Junior AI Engineer
                                </h3>
                                <p className="text-lg font-semibold text-blue-100">CareCloud</p>
                            </div>
                            <div className="flex flex-col gap-2 text-sm md:text-base">
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-blue-200" />
                                    <span className="font-medium">July 2025 – Present</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-blue-200" />
                                    <span className="font-medium">New Jersey, United States</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8">
                        {/* Project Title */}
                        <div className="mb-6">
                            <h4 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                                Healthcare Revenue Cycle Management (RCM) AI Project
                            </h4>
                            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                        </div>

                        {/* Key Achievements */}
                        <div className="space-y-4">
                            <div className="flex gap-3 group">
                                <FaCheckCircle className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-gray-900 dark:text-white">Leading AI-Powered Claims Classification:</span> Developed system processing <span className="font-bold text-blue-600 dark:text-blue-400">1M+ medical claims</span> with <span className="font-bold text-green-600 dark:text-green-400">95% accuracy</span>, revolutionizing healthcare claim processing
                                </p>
                            </div>

                            <div className="flex gap-3 group">
                                <FaCheckCircle className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-gray-900 dark:text-white">Advanced EDI 837 Parser:</span> Built comprehensive parser extracting patient demographics, CPT/ICD-10 codes, modifiers, and diagnosis pointers from complex healthcare data formats
                                </p>
                            </div>

                            <div className="flex gap-3 group">
                                <FaCheckCircle className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-gray-900 dark:text-white">Machine Learning Implementation:</span> Deployed XGBoost binary classification model on balanced dataset of accepted/rejected claims with advanced feature engineering techniques
                                </p>
                            </div>

                            <div className="flex gap-3 group">
                                <FaCheckCircle className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-gray-900 dark:text-white">GPT-4 Intelligent Agent System:</span> Engineered LangChain/LangGraph-powered agent providing detailed rejection reasoning and actionable recommendations for claims optimization
                                </p>
                            </div>

                            <div className="flex gap-3 group">
                                <FaCheckCircle className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-gray-900 dark:text-white">Full-Stack Integration:</span> Designed and deployed FastAPI backend seamlessly integrating ML models with database systems for real-time claim processing at scale
                                </p>
                            </div>
                        </div>

                        {/* Impact & Leadership */}
                        <div className="mt-8 grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
                                <h5 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                    <span className="text-blue-600 dark:text-blue-400">💡</span> Business Impact
                                </h5>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Streamlined claims processing, reduced manual intervention, and significantly improved first-pass submission rates across healthcare operations
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-600 dark:border-green-400">
                                <h5 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                    <span className="text-green-600 dark:text-green-400">👥</span> Team Leadership
                                </h5>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Collaborating in 5-member cross-functional team on critical healthcare infrastructure, driving AI innovation in RCM space
                                </p>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-8">
                            <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies & Tools:</h5>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">GPT-4</span>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">LangChain</span>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">LangGraph</span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">XGBoost</span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">FastAPI</span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">Python</span>
                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">EDI 837</span>
                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">Healthcare RCM</span>
                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">ML Engineering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise; 