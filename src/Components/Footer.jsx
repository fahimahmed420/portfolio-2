import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light  py-4 text-center  text-sm text-secondary">
      <p>
        © {new Date().getFullYear()} Fahim Ahmed. All rights reserved.
      </p>
    </footer>
  );
}
