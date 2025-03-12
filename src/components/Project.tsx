import React, { useState, useEffect } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    github?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, github }) => {
    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover-card hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-gray-800 transition-all duration-300">
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm transform transition-transform hover:scale-105">
                            {tag}
                        </span>
                    ))}
                </div>
                {github && (
                    <div className="mt-4">
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                            View on GitHub 
                            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

const Project: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 4;
    
    const projects: ProjectCardProps[] = [
        {
            title: "A Conditional GAN-Based Approach for Noisy Medical Image Reconstruction",
            description: "Developed a deep learning pipeline using a Pix2Pix cGAN to denoise MRI scans from the BraTS 2020 dataset. The model, built with a U-Net generator and PatchGAN discriminator, reconstructs clean images from noisy inputs using adversarial and pixel-wise loss functions. Achieved significant improvements in image clarity, evaluated via PSNR, LPIPS, and SSIM.",
            tags: ["Python", "PyTorch", "GANs", "U-Net", "Medical Imaging", "Computer Vision"],
        },
        {
            title: "Chat & File Sharing App",
            description: "A real-time chat application with file sharing capabilities using BSD Sockets. Supports multiple users, direct messaging, and secure file transfers.",
            tags: ["C++", "Sockets", "Networking"],
            github: "https://github.com/Ahmad6564/chat-file-sharing-application-using-BSD-sockets"
        },
        {
            title: "X-Rays Image Classification Using CNN and Image Processing Techniques",
            description: "Deep learning model for classifying X-ray images using CNNs and advanced image processing. Achieves high accuracy in identifying abnormalities in medical imaging data.",
            tags: ["Python", "TensorFlow", "CNN", "Medical AI"],
            github: "https://github.com/Ahmad6564/Histopathological-Images-Analysis"
        },
        {
            title: "Library Management System",
            description: "Comprehensive library management solution with SQL database backend and C++ frontend. Features book tracking, member management, borrowing system, and reporting.",
            tags: ["C++", "SQL", "Database Design", "DBMS"]
        },
        {
            title: "Wireless Network Routing Algorithm",
            description: "Designed and implemented custom routing algorithms for wireless networks. Optimized for network efficiency and reduced packet loss.",
            tags: ["C++", "Networking", "Algorithms"],
            github: "https://github.com/Ahmad6564/Designing-topology-and-implement-routing-algorithm-of-wireless-Network."
        },
        {
            title: "Portfolio Website",
            description: "This responsive portfolio website built with Next.js and Tailwind CSS. Features dark/light mode, smooth scrolling, and responsive design.",
            tags: ["Next.js", "React", "Tailwind CSS"],
            github: "https://github.com/Ahmad6564/portfolio-website"
        }
    ];

    const totalPages = Math.ceil(projects.length / projectsPerPage);
    
    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };
    
    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };
    
    // Auto-rotate projects every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages);
        }, 10000);
        
        return () => clearInterval(interval);
    }, [totalPages]);
    
    const currentProjects = projects.slice(
        currentPage * projectsPerPage, 
        (currentPage + 1) * projectsPerPage
    );

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                A showcase of my technical work, ranging from machine learning applications to software development projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {currentProjects.map((project, idx) => (
                    <ProjectCard 
                        key={idx}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        github={project.github}
                    />
                ))}
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button 
                    onClick={prevPage}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    aria-label="Previous page"
                >
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                
                {/* Page Indicators */}
                <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentPage(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                idx === currentPage 
                                    ? 'bg-blue-600 w-5' 
                                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-700'
                            }`}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>
                
                <button 
                    onClick={nextPage}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    aria-label="Next page"
                >
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Project; 