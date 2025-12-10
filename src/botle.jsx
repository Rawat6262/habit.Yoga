// src/components/BottomNav.jsx
import React from "react";

/**
 * BottomNav
 * - Three items: Home, Resources, My Referral
 * - Active item shows a rounded pill with light-blue background and white icon
 * - Designed to sit fixed at bottom like the screenshot
 *
 * Usage:
 *  import BottomNav from "./components/BottomNav";
 *  <BottomNav active="home" onNavigate={(id) => console.log(id)} />
 *
 * You can pass `active` prop as 'home' | 'resources' | 'referral'
 */

const IconHome = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5H9v5a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
  </svg>
);

const IconBook = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m-7-9a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z" />
  </svg>
);

const IconUsers = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 11a4 4 0 10-8 0 4 4 0 008 0z" />
  </svg>
);

export default function BottomNav({ active = "home", onNavigate = () => {} }) {
  const items = [
    { id: "home", label: "Home", Icon: IconHome },
    { id: "resources", label: "Resources", Icon: IconBook },
    { id: "referral", label: "My Referral", Icon: IconUsers },
  ];

  return (
    <>
      {/* Optional: reference image (local) */}
      {/* <img src="/mnt/data/Screenshot 2025-11-25 145006.png" alt="ref" className="hidden" /> */}

      <nav
        aria-label="Bottom navigation"
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm z-50"
      >
        <ul className="flex justify-between items-center px-4 py-3">
          {items.map((it) => {
            const isActive = it.id === active;
            return (
              <li key={it.id} className="flex-1 flex justify-center">
                <button
                  onClick={() => onNavigate(it.id)}
                  className="flex flex-col items-center gap-1 focus:outline-none"
                  aria-current={isActive ? "page" : undefined}
                  aria-label={it.label}
                  type="button"
                >
                  <div
                    className={`flex items-center justify-center rounded-full w-9 h-9 transition-all ${
                      isActive ? "bg-sky-100" : "bg-transparent"
                    }`}
                    style={isActive ? { boxShadow: "0 6px 18px rgba(2,132,199,0.08)" } : {}}
                  >
                    <it.Icon className={`${isActive ? "text-[#0284c7]" : "text-slate-500"}`} />
                  </div>

                  <span
                    className={`text-xs mt-1 ${
                      isActive ? "text-slate-900 font-semibold" : "text-slate-500"
                    }`}
                  >
                    {it.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
