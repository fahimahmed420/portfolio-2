import { useEffect } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { 
  LuMail, LuMapPin, LuClock, LuContact, LuDownload, LuPhone, LuExternalLink, 
  LuLinkedin, LuGithub as LuGithubIcon, LuTwitter, LuDribbble, LuList, LuZap, LuUsers 
} from "react-icons/lu";
import LocationAvailability from '../Components/LocationAvailability';
import MessageForm from '../Components/MessageForm';

const MotionCard = ({ children, className }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={className}
  >
    {children}
  </motion.div>
);

const ContactMe = () => {
  useEffect(() => {
    document.title = "Contact | Fahim Ahmed";
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-900">

      {/* ===================== */}
      {/* Page Headline */}
      {/* ===================== */}
      <div className="text-center pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold">Contact & Connect Hub</h1>
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Let's start a conversation about your next project or collaboration. I'm always excited to connect with fellow professionals and explore new opportunities.
        </p>
        <div className="mt-4 text-sm text-gray-500 flex justify-center items-center gap-1">
          <LuClock className="h-4 w-4 text-gray-400" /> Usually responds within 24 hours
        </div>
      </div>

      {/* ===================== */}
      {/* Main Content */}
      {/* ===================== */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8 space-y-8">

        {/* Contact Information */}
        <div className="bg-gray-100 rounded-2xl shadow p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center">
            <LuContact className="h-6 w-6 mr-2 text-gray-600" /> Contact Information
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Email */}
            <MotionCard className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center">
                <LuMail className="h-6 w-6 mr-2 text-gray-600" />
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-gray-900">fahim.ahmed.portfolio@gmail.com</dd>
                  <dd className="mt-0.5 text-sm text-gray-500">Best for detailed inquiries</dd>
                </div>
              </div>
            </MotionCard>

            {/* Phone */}
            <MotionCard className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center">
                <LuPhone className="h-6 w-6 mr-2 text-gray-600" />
                <div>
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="mt-1 text-gray-900">+8801774433063</dd>
                  <dd className="mt-0.5 text-sm text-gray-500">Available Mon-Fri, 9AM-6PM UTC</dd>
                </div>
              </div>
            </MotionCard>

            {/* Location */}
            <MotionCard className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center">
                <LuMapPin className="h-6 w-6 mr-2 text-gray-600" />
                <div>
                  <dt className="text-sm font-medium text-gray-500">Location</dt>
                  <dd className="mt-1 text-gray-900">Savar, Dhaka</dd>
                  <dd className="mt-0.5 text-sm text-gray-500">Open to remote opportunities</dd>
                </div>
              </div>
            </MotionCard>

            {/* Availability */}
            <MotionCard className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center">
                <LuList className="h-6 w-6 mr-2 text-gray-600" />
                <div>
                  <dt className="text-sm font-medium text-gray-500">Availability</dt>
                  <dd className="mt-1 text-gray-900">Available for new projects</dd>
                  <dd className="mt-0.5 text-sm text-gray-500">Always up for something new</dd>
                </div>
              </div>
            </MotionCard>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-100 rounded-2xl shadow p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center">
            <LuZap className="h-6 w-6 mr-2 text-gray-600" /> Quick Actions
          </h2>

          {/* vCard & Resume */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-gray-200 mb-6">
            <MotionCard className="flex cursor-target items-center justify-between group hover:text-blue-500 transition-colors bg-white rounded-xl shadow p-4">
              <div className="flex items-center">
                <LuDownload className="h-6 w-6 mr-2 text-gray-600 group-hover:text-blue-500 transition-colors" />
                <div>
                  <p className="text-base font-medium text-gray-900 group-hover:text-blue-500 transition-colors">Download vCard</p>
                  <p className="text-sm text-gray-500 group-hover:text-blue-400 transition-colors">Save my contact info to your device</p>
                </div>
              </div>
              <LuExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-transform" />
            </MotionCard>

            <MotionCard className="flex cursor-target items-center justify-between group hover:text-blue-500 transition-colors bg-white rounded-xl shadow p-4">
              <div className="flex items-center">
                <LuDownload className="h-6 w-6 mr-2 text-gray-600 group-hover:text-blue-500 transition-colors" />
                <div>
                  <p className="text-base font-medium text-gray-900 group-hover:text-blue-500 transition-colors">Download Resume</p>
                  <p className="text-sm text-gray-500 group-hover:text-blue-400 transition-colors">Get my latest resume in PDF format</p>
                </div>
              </div>
              <LuExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-transform" />
            </MotionCard>
          </div>

          {/* Meeting & WhatsApp */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MotionCard className="bg-[#2d485f] hover:bg-[#233849] cursor-target rounded-xl p-6 flex items-center justify-between transition-colors text-white">
              <div>
                <p className="text-xl font-semibold">Schedule Meeting</p>
                <p className="mt-1 text-sm text-gray-300">Book a consultation call at your convenience</p>
              </div>
              <LuExternalLink className="h-6 w-6 text-white" />
            </MotionCard>

            <MotionCard className="bg-green-700 cursor-target hover:bg-green-800 rounded-xl p-6 flex items-center justify-between transition-colors text-white">
              <div>
                <p className="text-xl font-semibold">Quick Message</p>
                <p className="mt-1 text-sm text-gray-200">Chat instantly on WhatsApp</p>
              </div>
              <LuExternalLink className="h-6 w-6 text-white" />
            </MotionCard>
          </div>
        </div>

        {/* Message Form */}
        <MessageForm />

        {/* Social Media Section */}
        <div className="bg-gray-100 rounded-2xl shadow p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center">
            <LuUsers className="h-6 w-6 mr-2 text-gray-600" /> Social Media & Professional Networks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* LinkedIn */}
            <MotionCard className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-2 rounded-md">
                  <LuLinkedin className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">LinkedIn</h3>
                  <p className="text-sm text-gray-500">-fahim-ahmed</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">A brief description of your professional experience and skills.</p>
              <a
                href="https://linkedin.com/in/-fahim-ahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-target justify-center items-center gap-2 w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Visit Profile <LuExternalLink />
              </a>
            </MotionCard>

            {/* GitHub */}
            <MotionCard className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-gray-800 p-2 rounded-md">
                  <LuGithubIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">GitHub</h3>
                  <p className="text-sm text-gray-500">fahimahmed420</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">Collaborate on open-source projects and share your code.</p>
              <a
                href="https://github.com/fahimahmed420/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-target justify-center items-center gap-2 w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Visit Profile <LuExternalLink />
              </a>
            </MotionCard>

            {/* Twitter */}
            <MotionCard className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-blue-400 p-2 rounded-md">
                  <LuTwitter className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Twitter</h3>
                  <p className="text-sm text-gray-500">Fahim_Ahmed_420</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">Quick thoughts, updates, and links to your latest work.</p>
              <a
                href="https://twitter.com/Fahim_Ahmed_420/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-target justify-center items-center gap-2 w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Visit Profile <LuExternalLink />
              </a>
            </MotionCard>

            {/* Dribbble */}
            <MotionCard className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-pink-500 p-2 rounded-md">
                  <LuDribbble className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Dribbble</h3>
                  <p className="text-sm text-gray-500">@your-username</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">Showcase your design work and creative projects.</p>
              <a
                href="https://dribbble.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-target justify-center items-center gap-2 w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Visit Profile <LuExternalLink />
              </a>
            </MotionCard>
          </div>
        </div>

        {/* Location Section */}
        <LocationAvailability />

      </div>

      {/* ===================== */}
      {/* Right Fixed Links */}
      {/* ===================== */}
      <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col space-y-16 z-10">
        <motion.a
          href="https://github.com/fahimahmed420"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="rotate-90 cursor-target origin-right text-secondary cursor-pointer flex items-center hover:text-primary"
        >
          <FaGithub className="mr-1" /> GitHub
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/-fahim-ahmed/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="rotate-90 cursor-target origin-right text-secondary cursor-pointer flex items-center hover:text-primary"
        >
          <FaLinkedin className="mr-1" /> LinkedIn
        </motion.a>
      </div>
    </div>
  );
};

export default ContactMe;
