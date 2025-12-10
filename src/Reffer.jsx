// src/components/InviteCard.jsx
import axios from "axios";
import React, { useState } from "react";

/**
 * InviteCard
 * - Clean structure (InviteCard, ReferralSteps)
 * - Clipboard copy with SVG icon and "Copied!" feedback
 * - Uses Tailwind classes; assumes font-poppins is available for headings
 *
 * Replace logo* imports or pass them as props if you prefer.
 */

// Example: if you import assets at top-level, pass them as props when rendering.
// import logo5 from '../assets/whatsapp-icon.png' etc.

const ReferralSteps = ({ logo6, logo7, logo8 }) => (
  <div className="w-full mt-3">
    <p className="text-[16px] font-medium">How to Refer ?</p>

    <div className="flex items-start gap-3 my-3">
      {logo6 && <img className="w-[40px] h-[37px]" src={logo6} alt="step1" />}
      <p className="text-[12px] text-[#334155]">
        Click on “Share on WhatsApp” above to generate your customised link
      </p>
    </div>

    <div className="flex items-start gap-3 my-3">
      {logo7 && <img className="w-[40px] h-[37px]" src={logo7} alt="step2" />}
      <p className="text-[12px] text-[#334155]">Share it with your Friends / Family members</p>
    </div>

    <div className="flex items-start gap-3 my-3">
      {logo8 && <img className="w-[40px] h-[37px]" src={logo8} alt="step3" />}
      <p className="text-[12px] text-[#334155]">
        Reach New Levels to earn reward when they join through your link
      </p>
    </div>
  </div>
);

export default function InviteCard({
  shareUrl = "https://habit.yoga/harsh_5p762",
  logo5,
  logo6,
  logo7,
  logo8,
  id
}) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
let intiveadd = async (id)=>{
  
   let result = await axios.put(`/api/habit/invite-days/${id}`);
}
  async function handleCopy() {
    try {
      // modern clipboard API
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      // reset after 1.8s
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // fallback: create temporary textarea
      const ta = document.createElement("textarea");
      ta.value = shareUrl;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch (err) {
        console.error("copy failed", err);
      } finally {
        document.body.removeChild(ta);
      }
    }
  }

  return (
    <div className="w-[424px] h-auto p-4 bg-white border border-[#e2e8f0] rounded-lg">
      <p className="text-[16px] font-medium text-[#000000] font-poppins">Invite Friends & Win Rewards</p>

      <p className="text-[14px] font-medium text-[#343155] mt-1">
        Friends Will Also get <span className="font-semibold text-[#5a0183]">FREE 14 Yoga Days 💜</span>
      </p>

      {/* Share URL row */}
      <div className="border border-dashed px-3 py-3 rounded-lg w-full flex items-center justify-between mt-4 h-[56px]">
        <div className="flex-1 min-w-0 mr-3">
          <div
            className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm sm:text-base text-slate-700"
            title={shareUrl}
          >
            {shareUrl}
          </div>
        </div>

        {/* copy icon button */}
        <button
          onClick={handleCopy}
          aria-label="Copy share link"
          className="flex items-center gap-2 ml-3 px-2 py-1 rounded-md hover:bg-slate-100 focus:outline-none"
        >
          {/* Copy SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-slate-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2" />
            <rect x="8" y="8" width="12" height="12" rx="2" strokeWidth={1.6} />
          </svg>
        </button>

        {/* Copy text / feedback */}
        <button
          onClick={handleCopy}
          className="text-[14px] font-semibold text-[#0369a1] ml-3 whitespace-nowrap"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Action buttons row */}
      <div className="my-3 flex justify-between items-center py-2 w-full">
        <a
          href="#"
          className="flex gap-2 items-center justify-center text-[14px] font-semibold bg-[#3cb452] w-[123px] rounded-lg h-10 text-white"
          onClick={(e) => e.preventDefault()}
        >
          <p className="text-[14px] font-bold whitespace-nowrap">WA Status</p>
        </a>

        <a
          href="#"
          className="flex gap-2 items-center justify-center text-[14px] font-semibold bg-[#3cb452] rounded-lg w-[250px] h-10 text-white"
          onClick={()=>intiveadd(id)}
        >
          {logo5 && <img className="w-[18px] h-[18px]" src={logo5} alt="whatsapp" />}
          <p className="text-[14px] whitespace-nowrap font-bold">Share On WhatsApp</p>
        </a>
      </div>

      {/* Expanded referral steps */}
      {expanded ? (
        <div className="w-[349px] h-auto">
          <ReferralSteps logo6={logo6} logo7={logo7} logo8={logo8} />
        </div>
      ) : null}

      <button
        className="border px-4 py-2 rounded-full w-full mx-auto flex justify-center mt-4 text-[#0369a1] border-gray-400"
        onClick={() => setExpanded((p) => !p)}
      >
        {expanded ? "See Less" : "How To invite"}
      </button>

      {/* Optional local reference image (you can remove this) */}
      <div className="mt-3">
        <img
          src="/mnt/data/Screenshot 2025-11-25 120845.png"
          alt="reference"
          className="hidden"
        />
      </div>
    </div>
  );
}
