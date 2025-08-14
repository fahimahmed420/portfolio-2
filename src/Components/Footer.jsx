import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-background)] border-t border-gray-200 py-4 text-center text-sm text-gray-600">
      <p>
        © {new Date().getFullYear()} Fahim Ahmed. All rights reserved.
      </p>
    </footer>
  );
}
