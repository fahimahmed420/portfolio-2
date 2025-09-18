import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { LuSend } from "react-icons/lu";

const MessageForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_0l3n9pk",
            "template_nzu7iwd",
            e.target,
            "OPWTCVfkvwsNbUOcK"
        )
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    form.current.reset();
                },
                () => {
                    toast.error("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div class="bg-gray-100 shadow-sm rounded-lg py-5 px-4 sm:px-6 lg:px-8">
                       <div class="flex items-center text-gray-900 mb-6">
                           <LuSend className="h-6 w-6 text-gray-600 mr-2" />
                           <h3 class="text-xl font-semibold">Send a Message</h3>
                       </div>
       
                       <form class="space-y-6" onSubmit={sendEmail}>
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
                               <button
                                   type="submit"
                                   disabled={loading}
                                   class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#2d485f] hover:bg-[#233849] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                   {loading ? "Sending..." : "Send Message"}
                                   <svg class="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                   </svg>
                               </button>
                           </div>
                       </form>
                   </div>
    );
};

export default MessageForm;
