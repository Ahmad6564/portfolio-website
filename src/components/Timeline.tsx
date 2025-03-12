import React from 'react';

const Timeline: React.FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Experience Timeline</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
                <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-xl font-semibold">Wi-Fi Enabled Occupancy Detection System</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">National University of Sciences and Technology</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">September 2024 - Present</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">Developed a smart system for real-time room occupancy detection using Wi-Fi CSI. Built machine learning models for binary classification and designed an interactive dashboard using FastAPI and React.js.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-xl font-semibold">FPGA-Based Fast Matrix Multiplication</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">December 2024 - January 2025</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">Implemented a parallelized matrix multiplication system on FPGA using Verilog. Integrated UART communication for data transfer and optimized the design for efficiency on the Nexus 3 Spartan-6 FPGA.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-xl font-semibold">A Conditional GAN-Based Approach for Noisy Medical Image Reconstruction</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AI Course Project</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">December 2024</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">Designed a Pix2Pix-based cGAN to denoise MRI scans from the BraTS 2020 dataset. Improved image quality using PSNR, LPIPS, and SSIM metrics with a U-Net generator and PatchGAN discriminator architecture.</p>
                </div>
            </div>
        </div>
    );
};

export default Timeline; 