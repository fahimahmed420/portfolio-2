import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import { LuSend } from "react-icons/lu";

const MessageForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const showCustomToast = () => {
        toast.success(
            <div className="flex items-center space-x-2">
                <LuSend className="text-green-500 h-5 w-5" />
                <span>Email sent, please wait for reply.</span>
            </div>,
            {
                duration: 4000,
                position: "top-right",
                style: {
                    background: "#f0fdf4",
                    border: "1px solid #22c55e",
                    color: "#166534",
                    padding: "12px 16px",
                    borderRadius: "10px",
                },
            }
        );
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_14w7z3f",     // Service ID
                "template_nzu7iwd",   // Template ID
                form.current,
                "OPWTCVfkvwsNbUOcK"   // Public Key
            )
            .then(
                () => {
                    showCustomToast();
                    form.current.reset();
                    setLoading(false);
                },
                () => {
                    toast.error("Something went wrong. Please try again.");
                    setLoading(false);
                }
            );
    };



    return (
        <div className="bg-light shadow-sm rounded-lg py-5 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-primary mb-6">
                <LuSend className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-semibold">Send a Mail</h3>
            </div>

            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="from_name"
                            className="block text-sm font-medium text-secondary"
                        >
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            id="from_name"
                            placeholder="Enter your full name"
                            className="mt-1 cursor-target shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-white rounded-md bg-primary p-2"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="from_email"
                            className="block text-sm font-medium text-secondary"
                        >
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="from_email"
                            id="from_email"
                            placeholder="your.email@example.com"
                            className="mt-1 cursor-target shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-white rounded-md bg-primary p-2"
                            required
                        />
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-secondary"
                    >
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="What's this about?"
                        className="mt-1 cursor-target shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-white rounded-md bg-primary p-2"
                        required
                    />
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label
                            htmlFor="project_type"
                            className="block text-sm font-medium text-secondary"
                        >
                            Project Type
                        </label>
                        <select
                            id="project_type"
                            name="project_type"
                            className="mt-1 cursor-target block w-full pl-3 pr-10 py-2 text-base border-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-primary"
                        >
                            <option>Select project type</option>
                            <option>Web Development</option>
                            <option>Mobile Application</option>
                            <option>Technical Consulting</option>
                            <option>Collaboration</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="budget_range"
                            className="block text-sm font-medium text-secondary"
                        >
                            Budget Range
                        </label>
                        <select
                            id="budget_range"
                            name="budget_range"
                            className="mt-1 cursor-target block w-full pl-3 pr-10 py-2 text-base border-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-primary"
                        >
                            <option>Select budget range</option>
                            <option>Under $100</option>
                            <option>Under $500</option>
                            <option>$500 - $1000</option>
                            <option>$1000 - $2000</option>
                            <option>$2000 - $5000</option>
                            <option>Let's Discuss</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="timeline"
                            className="block text-sm font-medium text-secondary"
                        >
                            Timeline
                        </label>
                        <select
                            id="timeline"
                            name="timeline"
                            className="mt-1 cursor-target block w-full pl-3 pr-10 py-2 text-base border-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-primary"
                        >
                            <option>Select timeline</option>
                            <option>ASAP</option>
                            <option>15 Days</option>
                            <option>1 month</option>
                            <option>2-3 months</option>
                            <option>3-6 months</option>
                            <option>Flexible time</option>
                        </select>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-secondary"
                    >
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Tell me about your project, goals, and how I can help..."
                        className="mt-1 cursor-target shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-white rounded-md bg-primary p-2"
                        required
                    ></textarea>
                </div>

                {/* Submit */}
                <div className="flex justify-start">
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex cursor-target items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {loading ? "Sending..." : "Send Message"}
                        <svg
                            className="ml-2 -mr-1 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </button>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default MessageForm;
