import React, { useEffect } from "react";
import { LuMapPin, LuClock,LuHouse  } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineHomeWork } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationAvailability = () => {
  useEffect(() => {
    const map = L.map("map").setView([23.856820921824667, 90.26586156743554], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([23.856820921824667, 90.26586156743554])
      .addTo(map)
      .bindPopup("CRP Savar, Dhaka, Bangladesh. <br> Not a great place to be.")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="bg-light rounded-lg py-5 px-4 sm:px-6 lg:px-8 text-primary">
      {/* Title */}
      <div className="flex items-center mb-4">
        <LuMapPin className="h-6 w-6 mr-2" />
        <h2 className="text-xl font-semibold">
          Location & Availability
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <div
          id="map"
          className="rounded-lg overflow-hidden shadow"
          style={{ height: "500px", width: "100%" }}
        ></div>

        {/* Details */}
        <div>
          {/* Current Location */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Current Location</h3>
            <div className="flex items-start mb-2">
              <LuMapPin className="h-6 w-6 mr-2" />
              <div>
                <p className="font-semibold text-primary">
                  CRP, Savar
                </p>
                <p className="text-sm text-secondary opacity-70">
                  Near Dhaka City, Bangladesh
                </p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <LuClock className="h-6 w-6 mr-2" />
              <div>
                <p className="font-semibold text-primary">
                  Bangladesh Standard Time (BST)
                </p>
                <p className="text-sm text-secondary opacity-70">
                  UTC+6 • Currently{" "}
                  {new Date().toLocaleTimeString("en-US", {
                    timeZone: "Asia/Dhaka",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <LuHouse className="h-6 w-6 mr-2" />
              <p className="font-semibold text-primary">
                Remote Work Available
              </p>
            </div>
          </div>

          {/* Work Preferences */}
          <div>
            <h3 className="text-lg font-bold mb-2">Work Preferences</h3>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <LuHouse className="h-6 w-6 text-green-600 mr-2" />
                <p className="text-primary">Remote Work</p>
              </div>
              <p className="text-green-500 font-semibold text-sm">Preferred</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <HiOutlineBuildingOffice2 className="h-6 w-6 mr-2" />
                <p className="text-primary">On-site (Dhaka)</p>
              </div>
              <p className="text-secondary opacity-70 font-semibold text-sm">Available</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MdOutlineHomeWork  className="h-6 w-6 text-yellow-400 mr-2" />
                <p className="text-primary">Hybrid Work</p>
              </div>
              <p className="text-yellow-500 font-semibold text-sm">
                Flexible
              </p>
            </div>
          </div>
        </div>

        {/* Travel Availability */}
        <div className="bg-primary p-4 rounded-lg lg:col-span-2">
          <div className="flex items-center mb-2">
            <MdOutlineTravelExplore className="h-6 w-6 mr-2" />
            <h3 className="font-bold">Travel Availability</h3>
          </div>
          <p className="text-sm text-secondary opacity-70">
            Open to on-site engagements in Dhaka and nearby cities.
            Travel expenses and accommodation to be discussed based on
            project requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationAvailability;
