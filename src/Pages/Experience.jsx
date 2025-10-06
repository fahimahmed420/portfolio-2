import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Experience = () => {
    return (
        <div className='h-screen'>
            {/* Right Fixed Links */}
            <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col space-y-16 z-10">
                <motion.a
                    href="https://github.com/fahimahmed420"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="hover:text-primary rotate-90 origin-right text-secondary cursor-target flex items-center"
                >
                    <FaGithub className="mr-1" /> GitHub
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/-fahim-ahmed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="hover:text-primary rotate-90 origin-right text-secondary cursor-target flex items-center "
                >
                    <FaLinkedin className="mr-1" /> LinkedIn
                </motion.a>
            </div>
        </div>
    );
};

export default Experience;