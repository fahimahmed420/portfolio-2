import { useEffect } from 'react';
import LocationAvailability from '../Components/LocationAvailability';
import { LuMail, LuMapPin, LuClock, LuContact, LuDownload, LuPhone, LuExternalLink, LuLinkedin, LuGithub, LuTwitter, LuDribbble, LuList, LuZap, LuSend, LuUsers } from "react-icons/lu";
import MessageForm from '../Components/MessageForm';

const ContactMe = () => {

    useEffect(() => {
        document.title = "Contact | Fahim Ahmed";
    }, []);

    return (
        <div className='max-w-7xl mx-auto px-5 lg:px-8 py-8 space-y-7'>
            {/* main section */}
            <div className="px-4 sm:px-6 lg:px-8 bg-gray-100 shadow-sm rounded-lg py-5">
                <div className="max-w-lg mx-auto text-center">
                    <div className="flex justify-center items-center h-12 w-12 rounded-full bg-gray-100 mx-auto">
                        <LuMail className="h-6 w-6 text-gray-600" />
                    </div>
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
                        Contact & Connect Hub
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Let's start a conversation about your next project or collaboration. I'm always excited to connect with fellow professionals and explore new opportunities.
                    </p>
                    <div className="mt-4 text-sm text-gray-500 flex justify-center items-center">
                        <LuClock className="h-4 w-4 mr-1 text-gray-400" />
                        Usually responds within 24 hours
                    </div>
                </div>

                {/* contact info */}
                <div className="mt-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <LuContact className="h-6 w-6 mr-2 text-gray-600" />
                        Contact Information
                    </h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Email */}
                        <div className="bg-white shadow-sm rounded-lg p-4">
                            <div className="flex items-center">
                                <LuMail className="h-6 w-6 mr-2 text-gray-600" />
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                    <dd className="mt-1 text-gray-900">asifahmed55445@gmail.com</dd>
                                    <dd className="mt-0.5 text-sm text-gray-500">Best for detailed inquiries</dd>
                                </div>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="bg-white shadow-sm rounded-lg p-4">
                            <div className="flex items-center">
                                <LuPhone className="h-6 w-6 mr-2 text-gray-600" />
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                    <dd className="mt-1 text-gray-900">+8801774433063</dd>
                                    <dd className="mt-0.5 text-sm text-gray-500">Available Mon-Fri, 9AM-6PM UTC</dd>
                                </div>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="bg-white shadow-sm rounded-lg p-4">
                            <div className="flex items-center">
                                <LuMapPin className="h-6 w-6 mr-2 text-gray-600" />
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                                    <dd className="mt-1 text-gray-900">Savar, Dhaka</dd>
                                    <dd className="mt-0.5 text-sm text-gray-500">Open to remote opportunities</dd>
                                </div>
                            </div>
                        </div>
                        {/* Availability */}
                        <div className="bg-white shadow-sm rounded-lg p-4">
                            <div className="flex items-center">
                                <LuList className="h-6 w-6 mr-2 text-gray-600" />
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Availability</dt>
                                    <dd className="mt-1 text-gray-900">Available for new projects</dd>
                                    <dd className="mt-0.5 text-sm text-gray-500">Starting September 2025</dd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* quick section */}
            <div class="bg-gray-100 shadow-sm rounded-lg py-5 px-4 sm:px-6 lg:px-8">
                <div class="flex items-center text-gray-900 mb-6">
                    <LuZap className="h-6 w-6 mr-2 text-gray-600" />
                    <h3 class="text-xl font-semibold">Quick Actions</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-gray-200 mb-6">
                    <a
                        href="/fahim.vcf"
                        download
                        className="flex items-center justify-between group hover:text-blue-500 transition-colors"
                    >
                        <div className="flex items-center">
                            <LuDownload className="h-6 w-6 mr-2 text-gray-600 group-hover:text-blue-500 transition-colors" />
                            <div>
                                <p className="text-base font-medium text-gray-900 group-hover:text-blue-500 transition-colors">
                                    Download vCard
                                </p>
                                <p className="text-sm text-gray-500 group-hover:text-blue-400 transition-colors">
                                    Save my contact info to your device
                                </p>
                            </div>
                        </div>
                        <svg
                            className="h-5 w-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    <a href="/Fahim_Ahmed_Resume.pdf" download class="flex items-center justify-between group hover:text-blue-500">
                        <div class="flex items-center">
                            <svg class="h-6 w-6 group-hover:text-blue-500 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div>
                                <p class="text-base font-medium text-gray-900  group-hover:text-blue-500">Download Resume</p>
                                <p class="text-sm text-gray-500 group-hover:text-blue-500">Get my latest resume in PDF format</p>
                            </div>
                        </div>
                        <svg class="h-5 w-5 group-hover:text-blue-500 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                        href="https://calendar.app.google/mNHGyFk2Xe7DDDGa7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#2d485f] hover:bg-[#233849] rounded-lg p-6 flex items-center justify-between transition-colors"
                    >
                        <div>
                            <p className="text-xl font-semibold text-white">Schedule Meeting</p>
                            <p className="mt-1 text-sm text-gray-300">
                                Book a consultation call at your convenience
                            </p>
                        </div>
                        <svg
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>

                    <a
                        href="https://wa.me/8801774433063?text=Hello%20Fahim,%20I%20want%20to%20connect%20with%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-700 hover:bg-green-800 rounded-lg p-6 flex items-center justify-between transition-colors"
                    >
                        <div>
                            <p className="text-xl font-semibold text-white">Quick Message</p>
                            <p className="mt-1 text-sm text-gray-200">Chat instantly on WhatsApp</p>
                        </div>
                        <svg
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
            <MessageForm />
            {/* Social media section */}
            <div className='bg-gray-100 rounded-lg py-5 px-4 sm:px-6 lg:px-8'>

                <h1 className='text-xl font-semibold mb-6 flex'> <LuUsers className="h-6 w-6 text-gray-600 mr-2" />Social Media & Professional Networks</h1>
                <div className="grid grid-cols-2 gap-4">
                    {/* LinkedIn */}
                    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-600 p-2 rounded-md">
                                <LuLinkedin className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-4 flex-grow">
                                <h3 className="font-semibold text-lg">LinkedIn</h3>
                                <p className="text-sm text-gray-500">-fahim-ahmed</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm">A brief description of your professional experience and skills.</p>
                        <a
                            href="https://linkedin.com/in/-fahim-ahmed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center gap-2 w-full text-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            Visit Profile <LuExternalLink />
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="bg-gray-800 p-2 rounded-md">
                                <LuGithub className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-4 flex-grow">
                                <h3 className="font-semibold text-lg">GitHub</h3>
                                <p className="text-sm text-gray-500">fahimahmed420</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm">Collaborate on open-source projects and share your code.</p>
                        <a
                            href="https://github.com/fahimahmed420/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center gap-2 w-full text-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            Visit Profile <LuExternalLink />
                        </a>
                    </div>

                    {/* Twitter */}
                    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-400 p-2 rounded-md">
                                <LuTwitter className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-4 flex-grow">
                                <h3 className="font-semibold text-lg">Twitter</h3>
                                <p className="text-sm text-gray-500">Fahim_Ahmed_420</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm">Quick thoughts, updates, and links to your latest work.</p>
                        <a
                            href="https://twitter.com/Fahim_Ahmed_420/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center gap-2 w-full text-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            Visit Profile <LuExternalLink />
                        </a>
                    </div>

                    {/* Dribbble */}
                    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="bg-pink-500 p-2 rounded-md">
                                <LuDribbble className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-4 flex-grow">
                                <h3 className="font-semibold text-lg">Dribbble</h3>
                                <p className="text-sm text-gray-500">@your-username</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm">Showcase your design work and creative projects.</p>
                        <a
                            href="https://dribbble.com/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center gap-2 w-full text-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            Visit Profile <LuExternalLink />
                        </a>
                    </div>
                </div>
            </div>

            {/* Location section */}
            <LocationAvailability />
        </div>
    );
};

export default ContactMe;
