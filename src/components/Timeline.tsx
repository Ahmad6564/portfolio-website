import React from 'react';

const Timeline: React.FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Experience Timeline</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
                <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-xl font-semibold">Wi-Fi Enabled Occupancy Detection System (FYP) <span className='ml-2 px-2 py-0.5 bg-yellow-200 text-yellow-800 rounded text-xs font-bold'>Embedded System</span></h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">NUST</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">September 2024 - May 2025</p>
                    <ul className="mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                        <li>Designed a real-time system using Wi-Fi Channel State Information (CSI) to detect room occupancy.</li>
                        <li>Built the Dashboard application for Occupancy Detection System.</li>
                        <li>Built ML models to classify occupancy; developed a web dashboard with FastAPI and React.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Timeline; 