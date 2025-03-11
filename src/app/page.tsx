'use client';

import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Certification,
} from "@/components";
import './globals.css';

export default function Home() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
            document.documentElement.classList.remove('dark');
        } else {
            setMode('dark');
            document.documentElement.classList.add('dark');
        }
    }

    // Initialize dark mode on component mount
    useEffect(() => {
        // Set initial dark mode class
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        // Smooth scroll to top on initial load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [mode]);

  return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            
            {/* Main content with smooth scrolling sections */}
            <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
                <section id="main" className="min-h-screen flex items-center justify-center">
                    <Main />
                </section>
                
                <section id="expertise" className="py-20">
                    <Expertise />
                </section>
                
                <section id="certification" className="py-20 bg-blue-50 dark:bg-blue-900/20">
                    <Certification />
                </section>
                
                <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800">
                    <Timeline />
                </section>
                
                <section id="projects" className="py-20 bg-blue-50 dark:bg-blue-900/20">
                    <Project />
                </section>
                
                <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
                    <Contact />
                </section>
            </div>
            
            <Footer />
    </div>
  );
}
