"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

export default function Navigation({ isOpen ,setIsOpen}: NavigationProps) {
    const [isResourcesOpen, setIsResourcesOpen] = useState(true)

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.nav
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ type: "linear", duration: 0.3 }} // Linear animation for smooth transition
                    className="bg-white dark:bg-gray-800 shadow-lg h-screen flex flex-col"
                >
                    <div className="p-4">
                        {/* Logo SVG */}
                        <svg className="csz25 cchtt" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">
                                    <stop stopColor="#3ABAB4" offset="0%" />
                                    <stop stopColor="#7F9CF5" offset="100%" />
                                </linearGradient>
                                <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">
                                    <stop stopColor="#3ABAB4" offset="0%" />
                                    <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                                </linearGradient>
                            </defs>
                            <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#logo_a)" />
                            <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#logo_b)" />
                        </svg>
                    </div>
                    <ul className="flex-grow">
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            About
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Blog
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Testimonials
                        </motion.li>
                        <hr className='w-[90%]  dark:opacity-50 mx-auto' />
                        <motion.li
                            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <button
                                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                                className="flex items-center justify-between w-full"
                            >
                                Resources
                               
                            </button>
                            <AnimatePresence>
                                {isResourcesOpen && (
                                    <motion.ul
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ type: "linear", duration: 0.2 }} // Linear for smoother opening
                                        className="ml-4 mt-2"
                                    >
                                        <motion.li
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            Help center
                                        </motion.li>
                                        <motion.li
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            404
                                        </motion.li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </motion.li>
                        <hr className='w-[90%] dark:opacity-50 mx-auto mb-3' />
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2"
                        >
                            <button className="w-full bg-teal-400 dark:bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-500 dark:hover:bg-teal-700 transition-colors">
                                Request code
                            </button>
                        </motion.li>
                    </ul>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}
