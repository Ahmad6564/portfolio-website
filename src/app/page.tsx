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

    // Initialize dark mode from localStorage if available
    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
            setMode(savedMode);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setMode('dark');
        }
    }, []);

    const handleModeChange = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('theme', newMode);
    }

    // Apply dark mode class to document
    useEffect(() => {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark:bg-gray-900', 'dark:text-white');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark:bg-gray-900', 'dark:text-white');
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
                
                <section id="expertise" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
                    <Expertise />
                </section>
                
                <section id="certification" className="py-20 bg-blue-50 dark:bg-blue-900/20 transition-colors duration-500">
                    <Certification />
                </section>
                
                <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
                    <Timeline />
                </section>
                
                <section id="projects" className="py-20 bg-blue-50 dark:bg-blue-900/20 transition-colors duration-500">
                    <Project />
                </section>
                
                <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
                    <Contact />
                </section>
            </div>
            
            <Footer />
    </div>
  );
}
