// src/components/InviteProgress.jsx
import React from "react";

/**
 * InviteProgress
 * Props:
 *  - invitesDone (number) e.g. 1
 *  - invitesNeeded (number) e.g. 5
 *  - rewardText (string) e.g. "7 Yoga Days Voucher"
 *  - levelLeftLabel (string) e.g. "Level 0"
 *  - levelRightLabel (string) e.g. "Level 1"
 *
 * Reference image (local): /mnt/data/1c2cc83f-5789-4a27-aaf1-0e7758962515.png
 */

export default function InviteProgress({
  invitesDone = 1,
  invitesNeeded = 5,
  rewardText = "7 Yoga Days Voucher",
  levelLeftLabel = "Level 0",
  levelRightLabel = "Level 1",
}) {
  const done = Math.max(0, Math.min(invitesNeeded, invitesDone));
  const remaining = Math.max(invitesNeeded - done, 0);
  const percent = invitesNeeded === 0 ? 0 : (done / invitesNeeded) * 100;

  const segments = Array.from({ length: invitesNeeded });

  return (
    <div className="w-full max-w-[435px] rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm font-sans">
      {/* Top text row */}
      <div className="flex items-start justify-between gap-4">
        <p className="text-[13px] leading-snug text-slate-700">
          You&apos;re{" "}
          <span className="font-semibold text-slate-900">
            {remaining} Invites
          </span>{" "}
          away from{" "}
          <span className="font-semibold text-sky-600">{rewardText}!</span>
          <span className="ml-1">🎉</span>
        </p>

        <p className="text-[12px] font-medium text-slate-600 shrink-0">
          <span className="text-slate-900">{done}</span>{" "}
          <span className="text-slate-400">/ {invitesNeeded} Invites</span>
        </p>
      </div>

      {/* Main progress bar */}
      <div className="mt-4">
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-emerald-400 transition-all duration-300 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Small segmented bar (bottom center) */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {segments.map((_, index) => {
            const active = index < done;
            return (
              <div
                key={index}
                className={`h-2 w-10 rounded-full transition-colors ${
                  active ? "bg-emerald-400" : "bg-slate-200"
                }`}
              />
            );
          })}
        </div>

        {/* Levels row */}
        <div className="mt-4 flex items-center justify-between">
          {/* Left level */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 shadow-sm">
              {/* medal/check icon */}
              <svg
                className="h-4 w-4 text-amber-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="M9.5 12.5l2 2 3-4"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium text-slate-700">
              {levelLeftLabel}
            </span>
          </div>

          {/* Right level */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-slate-700">
              {levelRightLabel}
            </span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 shadow-sm">
              {/* lock icon */}
              <svg
                className="h-4 w-4 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect
                  x="3"
                  y="11"
                  width="18"
                  height="10"
                  rx="2"
                  strokeWidth="1.6"
                />
                <path
                  d="M7 11V7a5 5 0 0110 0v4"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

