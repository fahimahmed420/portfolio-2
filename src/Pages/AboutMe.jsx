import React, { useEffect } from "react";
import Image from "../Components/AppImage";
import { LuMapPin, LuCalendar, LuMail, LuPhone } from "react-icons/lu";
import Timeline from "../Components/Timeline";

const AboutMe = () => {
  const profile = {
    name: "Fahim Ahmed",
    title: "Full-Stack Developer & UI/UX Designer",
    image: "https://i.ibb.co.com/mrc8BGvS/IMG-1593.jpg",
    location: "Dhaka, Bangladesh",
    experience: "8 months Learning Experience",
    email: "fahim.ahmed.portfolio@gmail.com",
    phone: "+880 1774433063",
    coreValues: ["Innovation", "Collaboration", "Quality", "Learning"]
  };

  useEffect(() => {
        document.title = "About | Fahim Ahmed";
      }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="max-w-7xl px-5 lg:px-8 py-8 flex gap-8">
        {/* Left Sidebar */}
        <aside className="w-80 bg-gray-100 p-6 sticky top-16 h-[calc(100vh-64px)] flex flex-col gap-6 rounded-lg">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4">
              <Image src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
            <p className="text-sm text-secondary font-medium">{profile.title}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <LuMapPin /> <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <LuCalendar /> <span>{profile.experience}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <LuMail /> <span>{profile.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <LuPhone /> <span>{profile.phone}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Core Values</h3>
            <ul className="flex flex-wrap gap-2">
              {profile.coreValues.map((val, i) => (
                <li key={i} className="bg-gray-200 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {val}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="space-y-5">
          {/* Story Content */}
          <main className="flex-1 p-8 space-y-8 bg-gray-100 shadow rounded-lg">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">My Story</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                I'm a passionate full-stack developer with 8 months of experience learning web development. I focus on building modern web applications with React, Firebase, Node.js, and more.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">What Drives Me</h2>
              <p className="italic text-gray-700 text-sm">
                "I'm driven by the belief that technology should empower people and solve real-world problems. Every line of code I write is an opportunity to make someone's day a little bit better."
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional Philosophy</h2>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>User experience should always come first in any technical decision</li>
                <li>Clean, maintainable code is an investment in the future</li>
                <li>Continuous learning is essential in our rapidly evolving field</li>
                <li>Collaboration and knowledge sharing make everyone stronger</li>
              </ul>
            </section>
          </main>
          <Timeline/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
