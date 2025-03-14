import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="max-w-lg mx-auto">
                <div className="text-center mb-8">
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>
                    <a
                        href="mailto:ahmadkhalid6564@gmail.com"
                        className="text-blue-600 text-lg hover:underline"
                    >
                        ahmadkhalid6564@gmail.com
                    </a>
                </div>
                <div className="flex justify-center gap-4">
                    <a
                        href="https://github.com/Ahmad6564"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex flex-col items-center"
                    >
                        <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ahmad-khalid-846830201/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex flex-col items-center"
                    >
                        <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="https://medium.com/@ahmadkhalid6564"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex flex-col items-center"
                    >
                        <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
                        </svg>
                        Medium
                    </a>
                </div>
                <div className="mt-12 text-center">
                    <a 
                        href="#main"
                        className="inline-flex items-center text-blue-600 hover:underline"
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        Back to top
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact; 