import React, { useState, useEffect } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    github?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, github }) => {
    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.025] hover:border-blue-400 dark:hover:border-blue-600 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-all duration-300 group">
            <div className="p-7 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300 group-hover:text-blue-500 transition-colors">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-5 flex-1">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold shadow-sm hover:scale-110 transition-transform">{tag}</span>
                    ))}
                </div>
                {github && (
                    <div className="mt-auto">
                        <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium group">
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
            title: "FPGA-Based Fast Matrix Multiplication",
            description: "Built a high-speed matrix multiplication system on an FPGA using optimized Verilog algorithms. Implemented UART communication for PC-FPGA data transfer and created a parallelized design for maximum efficiency on the Nexus 3 Spartan-6 FPGA.",
            tags: ["Verilog", "FPGA", "UART", "Hardware Design", "Parallel Computing"],
        },
        {
            title: "A Conditional GAN-Based Approach for Noisy Medical Image Reconstruction",
            description: "Developed a deep learning pipeline using a Pix2Pix cGAN to denoise MRI scans from the BraTS 2020 dataset. The model, built with a U-Net generator and PatchGAN discriminator, reconstructs clean images from noisy inputs using adversarial and pixel-wise loss functions. Achieved significant improvements in image clarity, evaluated via PSNR, LPIPS, and SSIM, enhancing MRI analysis for better diagnosis and tumor segmentation.",
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
        },
        {
            title: "Real-Time Object Tracking System using YOLOv5 and Deep SORT",
            description: "Developed a real-time multi-object tracking system using Python and PyTorch. Integrated YOLOv5 for object detection and Deep SORT for identity-aware tracking.",
            tags: ["Python", "PyTorch", "YOLOv5", "Deep SORT", "Computer Vision", "Real-Time"],
        },
        {
            title: "Astronomical Time-Series Classification – PLAsTiCC (Kaggle Competition)",
            description: "Participated in the PLAsTiCC Kaggle competition to classify astronomical objects based on light curve data from the LSST. Explored and implemented state-of-the-art time-series classification models, including Transformer-based and RNN-based architectures. Handled large-scale, imbalanced datasets with significant missing values; applied data preprocessing, augmentation (GANs), and model evaluation using custom metrics.",
            tags: ["Kaggle", "Time-Series", "Transformers", "RNN", "GANs", "Data Science", "Python"],
        },
        {
            title: "Photo-to-Monet Image Translation using GANs",
            description: "Implemented a CycleGAN from scratch (without using pretrained models) to perform bidirectional image translation between real-world photos and Monet-style paintings. Designed and trained custom Generator and Discriminator architectures for unpaired image-to-image translation using adversarial loss, cycle consistency loss, and identity loss.",
            tags: ["Python", "PyTorch", "CycleGAN", "Image Translation", "Deep Learning", "Computer Vision"],
        },
        {
            title: "Wi-Fi Enabled Occupancy Detection System (FYP)",
            description: "Designed a real-time system using Wi-Fi Channel State Information (CSI) to detect room occupancy. Built ML models to classify occupancy; developed a web dashboard with FastAPI and React.",
            tags: ["Wi-Fi CSI", "Occupancy Detection", "FastAPI", "React", "Machine Learning", "Dashboard"],
        },
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
            <h2 className="text-4xl font-extrabold text-center mb-4 text-blue-700 dark:text-blue-300 tracking-tight drop-shadow-lg">Featured Projects</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-lg">A showcase of my technical work, ranging from machine learning applications to software development projects.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
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
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors shadow-md"
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
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors shadow-md"
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