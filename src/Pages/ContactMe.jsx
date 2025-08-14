import React from 'react';
import ScheduleMeeting from '../Components/ScheduleMeeting';
import LocationAvailability from '../Components/LocationAvailability';

const ContactMe = () => {
    return (
        <div className='max-w-7xl mx-auto py-10 space-y-7'>
            {/* main section */}
            <div class="px-4 sm:px-6 lg:px-8 bg-gray-100 shadow-sm rounded-lg py-5">
                <div class="max-w-lg mx-auto text-center">
                    <div class="flex justify-center items-center h-12 w-12 rounded-full bg-gray-100 mx-auto">
                        <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 class="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
                        Contact & Connect Hub
                    </h2>
                    <p class="mt-4 text-lg text-gray-500">
                        Let's start a conversation about your next project or collaboration. I'm always excited to connect with fellow professionals and explore new opportunities.
                    </p>
                    <div class="mt-4 text-sm text-gray-500 flex justify-center items-center">
                        <svg class="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Usually responds within 24 hours
                    </div>
                </div>

                <div class="mt-12">
                    <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg class="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                        </svg>
                        Contact Information
                    </h3>
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div class="bg-white shadow-sm rounded-lg p-4">
                            <div class="flex items-center">
                                <svg class="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <dt class="text-sm font-medium text-gray-500">Email</dt>
                                    <dd class="mt-1 text-gray-900">sarah.johnson@portfolio.com</dd>
                                    <dd class="mt-0.5 text-sm text-gray-500">Best for detailed inquiries</dd>
                                </div>
                            </div>
                            <div class="mt-2">
                                <a href="#" class="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800">
                                    <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-2 4l-2 2m0 0l2 2m-2-2h4" />
                                    </svg>
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div class="bg-white shadow-sm rounded-lg p-4">
                            <div class="flex items-center">
                                <svg class="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                                </svg>
                                <div>
                                    <dt class="text-sm font-medium text-gray-500">Phone</dt>
                                    <dd class="mt-1 text-gray-900">+1 (555) 123-4567</dd>
                                    <dd class="mt-0.5 text-sm text-gray-500">Available Mon-Fri, 9AM-6PM EST</dd>
                                </div>
                            </div>
                            <div class="mt-2">
                                <a href="#" class="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800">
                                    <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-2 4l-2 2m0 0l2 2m-2-2h4" />
                                    </svg>
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div class="bg-white shadow-sm rounded-lg p-4">
                            <div class="flex items-center">
                                <svg class="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                <div>
                                    <dt class="text-sm font-medium text-gray-500">Location</dt>
                                    <dd class="mt-1 text-gray-900">San Francisco, CA</dd>
                                    <dd class="mt-0.5 text-sm text-gray-500">Open to remote opportunities</dd>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white shadow-sm rounded-lg p-4">
                            <div class="flex items-center">
                                <svg class="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <dt class="text-sm font-medium text-gray-500">Availability</dt>
                                    <dd class="mt-1 text-gray-900">Available for new projects</dd>
                                    <dd class="mt-0.5 text-sm text-gray-500">Starting January 2025</dd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* quick section */}
            <div class="bg-gray-100 shadow-sm rounded-lg py-5 px-4 sm:px-6 lg:px-8">
                <div class="flex items-center text-gray-900 mb-6">
                    <svg class="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 class="text-xl font-semibold">Quick Actions</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-gray-200 mb-6">
                    <a href="#" class="flex items-center justify-between group">
                        <div class="flex items-center">
                            <svg class="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <div>
                                <p class="text-base font-medium text-gray-900 group-hover:text-indigo-600">Download vCard</p>
                                <p class="text-sm text-gray-500">Save my contact info to your device</p>
                            </div>
                        </div>
                        <svg class="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="#" class="flex items-center justify-between group">
                        <div class="flex items-center">
                            <svg class="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div>
                                <p class="text-base font-medium text-gray-900 group-hover:text-indigo-600">Download Resume</p>
                                <p class="text-sm text-gray-500">Get my latest resume in PDF format</p>
                            </div>
                        </div>
                        <svg class="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="#" class="bg-[#2d485f] hover:bg-[#233849] rounded-lg p-6 flex items-center justify-between transition-colors">
                        <div>
                            <p class="text-xl font-semibold text-white">Schedule Meeting</p>
                            <p class="mt-1 text-sm text-gray-300">Book a consultation call</p>
                        </div>
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="#" class="bg-[#8b7964] hover:bg-[#726454] rounded-lg p-6 flex items-center justify-between transition-colors">
                        <div>
                            <p class="text-xl font-semibold text-white">Quick Message</p>
                            <p class="mt-1 text-sm text-gray-200">Send me a message directly</p>
                        </div>
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div class="flex items-start mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                    <svg class="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div class="ml-3">
                        <p class="font-medium">Response Time</p>
                        <p class="mt-1">I typically respond to emails within 24 hours during business days. For urgent matters, feel free to call or schedule a meeting directly.</p>
                    </div>
                </div>
            </div>
            {/* massage section */}
            <div class="bg-gray-100 shadow-sm rounded-lg py-5 px-4 sm:px-6 lg:px-8">
                <div class="flex items-center text-gray-900 mb-6">
                    <svg class="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <h3 class="text-xl font-semibold">Send a Message</h3>
                </div>

                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="full-name" class="block text-sm font-medium text-gray-700">Full Name <span class="text-red-500">*</span></label>
                            <div class="mt-1">
                                <input type="text" name="full-name" id="full-name" placeholder="Enter your full name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-white rounded-md bg-white p-2" required />
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email Address <span class="text-red-500">*</span></label>
                            <div class="mt-1">
                                <input type="email" name="email" id="email" placeholder="your.email@example.com" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-white rounded-md bg-white p-2" required />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label for="subject" class="block text-sm font-medium text-gray-700">Subject <span class="text-red-500">*</span></label>
                        <div class="mt-1">
                            <input type="text" name="subject" id="subject" placeholder="What's this about?" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-white rounded-md bg-white p-2" required />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label for="project-type" class="block text-sm font-medium text-gray-700">Project Type</label>
                            <div class="mt-1">
                                <select id="project-type" name="project-type" class="block w-full pl-3 pr-10 py-2 text-base border-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white">
                                    <option>Select project type</option>
                                    <option>Web Development</option>
                                    <option>Mobile Application</option>
                                    <option>Technical Consulting</option>
                                    <option>Collaboration</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="budget-range" class="block text-sm font-medium text-gray-700">Budget Range</label>
                            <div class="mt-1">
                                <select id="budget-range" name="budget-range" class="block w-full pl-3 pr-10 py-2 text-base border-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white">
                                    <option>Select budget range</option>
                                    <option>Under $100</option>
                                    <option>Under $500</option>
                                    <option>$500 - $1000</option>
                                    <option>$1000 - $2000</option>
                                    <option>$2000 - $5000</option>
                                    <option>Let's Discuss</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="timeline" class="block text-sm font-medium text-gray-700">Timeline</label>
                            <div class="mt-1">
                                <select id="timeline" name="timeline" class="block w-full pl-3 pr-10 py-2 text-base border-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white">
                                    <option>Select timeline</option>
                                    <option>ASAP</option>
                                    <option>15 Days</option>
                                    <option>1 months</option>
                                    <option>2-3 months</option>
                                    <option>3-6 months</option>
                                    <option>Flexible time</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700">Message <span class="text-red-500">*</span></label>
                        <div class="mt-1">
                            <textarea id="message" name="message" rows="4" placeholder="Tell me about your project, goals, and how I can help..." class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-white rounded-md bg-white p-2" required></textarea>
                        </div>
                    </div>

                    <div class="flex justify-start">
                        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#2d485f] hover:bg-[#233849] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Send Message
                            <svg class="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            {/* social media section */}
            <div className='bg-gray-100 rounded-lg py-5 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-xl font-semibold mb-6'> Social Media & Professional Networks</h1>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-600 p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </div>
                            <div class="ml-4 flex-grow">
                                <h3 class="font-semibold text-lg">LinkedIn</h3>
                                <p class="text-sm text-gray-500">-fahim-ahmed</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">0</p>
                                <p class="text-xs text-gray-500">Followers</p>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4 text-sm">A brief description of your professional experience and skills.</p>
                        <a href="#" class="block w-full text-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Visit Profile</a>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
                        <div class="flex items-center mb-4">
                            <div class="bg-gray-800 p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.305 3.493.998.108-.77.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.772.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.204-6.095 8.204-11.385 0-6.627-5.373-12-12-12z" /></svg>
                            </div>
                            <div class="ml-4 flex-grow">
                                <h3 class="font-semibold text-lg">GitHub</h3>
                                <p class="text-sm text-gray-500">fahimahmed420</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">0</p>
                                <p class="text-xs text-gray-500">Followers</p>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4 text-sm">Collaborate on open-source projects and share your code.</p>
                        <a href="#" class="block w-full text-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Visit Profile</a>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-400 p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.153 0-5.717 2.56-5.717 5.704 0 .445.05.877.147 1.291-4.757-.23-8.985-2.52-11.815-5.992-.492.85-.77 1.84-.77 2.905 0 1.983 1.011 3.738 2.545 4.764-.939-.028-1.821-.29-2.59-.714v.073c0 2.765 1.97 5.065 4.582 5.594-.48.131-.983.2-1.503.2-.367 0-.726-.035-1.071-.102.728 2.274 2.836 3.921 5.337 3.965-1.954 1.536-4.417 2.443-7.096 2.443-.464 0-.923-.027-1.373-.08.646 2.052 2.02 3.844 3.652 5.074 4.587 3.633 10.424 5.761 16.568 5.761 18.665 0 28.892-15.429 28.892-28.892 0-.35-.011-.699-.022-1.046 1.982-1.43 3.693-3.21 5.057-5.22z" /></svg>
                            </div>
                            <div class="ml-4 flex-grow">
                                <h3 class="font-semibold text-lg">Twitter</h3>
                                <p class="text-sm text-gray-500">Fahim_Ahmed_420</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">0</p>
                                <p class="text-xs text-gray-500">Followers</p>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4 text-sm">Quick thoughts, updates, and links to your latest work.</p>
                        <a href="#" class="block w-full text-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Visit Profile</a>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
                        <div class="flex items-center mb-4">
                            <div class="bg-pink-500 p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.642 16.484c-.58-.179-1.205-.28-1.875-.28-1.57 0-2.842 1.272-2.842 2.842s1.272 2.841 2.842 2.841c1.545 0 2.809-1.229 2.841-2.766l.034-.075c-.328-.152-1.209-.556-1.875-2.562zm6.242-2.275c-.584.238-1.298.508-2.128.751-.83-.242-1.544-.513-2.128-.751l-.571.932c.579.245 1.288.513 2.128.751.84-.238 1.549-.506 2.128-.751l-.579-.932zm2.086-5.836c-1.393.992-3.087 1.621-4.886 1.621-1.8 0-3.494-.629-4.887-1.621l1.523-2.483c.969.691 2.062 1.132 3.364 1.132 1.302 0 2.395-.441 3.364-1.132l1.522 2.483zm-1.88-6.191c.033-1.054-.343-2.072-1.042-2.825-.698-.753-1.678-1.168-2.73-1.168s-2.032.415-2.73 1.168c-.699.753-1.075 1.771-1.042 2.825l.024.168c1.332-.716 3.011-.976 4.805-.976s3.473.26 4.805.976l.025-.168zm-5.648 10.456c-.032 1.054.344 2.072 1.042 2.825.698.753 1.678 1.168 2.73 1.168s2.032-.415 2.73-1.168c.699-.753 1.075-1.771 1.042-2.825l-.025-.168c-1.331.716-3.01.976-4.805.976s-3.473-.26-4.805-.976l-.024.168z" /></svg>
                            </div>
                            <div class="ml-4 flex-grow">
                                <h3 class="font-semibold text-lg">Dribbble</h3>
                                <p class="text-sm text-gray-500">@your-username</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">4.8K</p>
                                <p class="text-xs text-gray-500">Followers</p>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4 text-sm">Showcase your design work and creative projects.</p>
                        <a href="#" class="block w-full text-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Visit Profile</a>
                    </div>
                </div>
                <div class="mt-4 bg-white p-6 rounded-lg shadow border border-gray-200">
                    <div class="flex items-center">
                        <div class="bg-orange-500 p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M21.99 2H2v20h19.99L22 2zm-7 6h-2v2h2v2h-2v2h2v2h-4v-2h2v-2h-2v-2h2v-2h-2v-2h4v2zM10 6H6v2h4V6zm0 4H6v2h4v-2zm0 4H6v2h4v-2z" /></svg>
                        </div>
                        <p class="ml-4 text-gray-700 text-sm">Add a final, full-width section here for any other information or a general bio.</p>
                    </div>
                </div>
            </div>
            {/* Schedule meeting section */}
            <ScheduleMeeting/>
            {/* Location section */}
            <LocationAvailability/>
        </div>
    );
};

export default ContactMe;