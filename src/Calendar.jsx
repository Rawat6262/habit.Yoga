// src/components/AttendanceWidget.jsx
import React, { useState, useMemo } from "react";

/**
 * AttendanceWidget.jsx
 * - Show More expands into a full month calendar with selectable days.
 * - Uses Tailwind utility classes. Make sure Poppins is available via your project
 *   (or replace font-poppins with your preferred heading font class).
 *
 * Reference image (local): /mnt/data/Screenshot 2025-11-25 142219.png
 */

const REF_IMAGE = "/mnt/data/Screenshot 2025-11-25 142219.png";

/** Helpers to build calendar for a given month/year */
function buildMonthGrid(year, month) {
  // month: 0-indexed (0 = Jan)
  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth = new Date(year, month + 1, 0);
  const startDay = firstOfMonth.getDay(); // 0-Sun .. 6-Sat
  // We'll make weeks start on Monday, so convert JS day:
  // convert: JS 0(Sun) -> 6, 1(Mon) -> 0, ..., 6(Sat) -> 5
  const startOffset = (startDay + 6) % 7;

  // total cells = 6 rows * 7 = 42 (safe for any month layout)
  const grid = [];
  // compute date for cell 0
  const prevMonthLast = new Date(year, month, 0).getDate(); // last date of previous month
  const totalCells = 42;
  for (let i = 0; i < totalCells; i++) {
    const dayIndex = i - startOffset + 1; // day number relative to current month
    let dateObj;
    let inCurrentMonth = true;
    if (dayIndex <= 0) {
      // previous month day
      const d = prevMonthLast + dayIndex;
      const prevMonth = new Date(year, month - 1, d);
      dateObj = prevMonth;
      inCurrentMonth = false;
    } else if (dayIndex > lastOfMonth.getDate()) {
      // next month
      const d = dayIndex - lastOfMonth.getDate();
      const nextMonth = new Date(year, month + 1, d);
      dateObj = nextMonth;
      inCurrentMonth = false;
    } else {
      // current month
      dateObj = new Date(year, month, dayIndex);
      inCurrentMonth = true;
    }
    grid.push({
      date: dateObj,
      label: String(dateObj.getDate()).padStart(2, "0"),
      inCurrentMonth,
      key: dateObj.toISOString().slice(0, 10),
    });
  }
  return grid;
}

/** Utility to format month title */
function monthYearTitle(year, month) {
  return new Date(year, month, 1).toLocaleString(undefined, { month: "long", year: "numeric" });
}

/** The main component */
export default function AttendanceWidget({
  initialDaysLeft = 12,
  initialActiveDays = 2,
  // default month set to November 2025 to match your screenshot
  defaultYear = 2025,
  defaultMonth = 10, // November (0-indexed)
}) {
  // store selected days by ISO date string (yyyy-mm-dd)
  const [selectedDates, setSelectedDates] = useState(() => {
    // preselect a couple days similar to screenshot (24/25 Nov 2025)
    const d1 = new Date(2025, 10, 24).toISOString().slice(0, 10);
    const d2 = new Date(2025, 10, 25).toISOString().slice(0, 10);
    return new Set([d1, d2]);
  });

  const [showMore, setShowMore] = useState(false);
  const [year, setYear] = useState(defaultYear);
  const [month, setMonth] = useState(defaultMonth);

  // memoize grid calculation
  const grid = useMemo(() => buildMonthGrid(year, month), [year, month]);

  function toggleDate(iso) {
    setSelectedDates(prev => {
      const next = new Set(prev);
      if (next.has(iso)) next.delete(iso);
      else next.add(iso);
      return next;
    });
  }

  function prevMonth() {
    if (month === 0) {
      setYear(y => y - 1);
      setMonth(11);
    } else setMonth(m => m - 1);
  }

  function nextMonth() {
    if (month === 11) {
      setYear(y => y + 1);
      setMonth(0);
    } else setMonth(m => m + 1);
  }

  // weekday labels starting Monday
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-lg p-5 shadow-sm font-sans">
        {/* Header */}
        <h3 className="text-lg font-poppins font-semibold text-slate-800 mb-3">
          Track Your Attendance
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Days left in Challenge:</span>
            <span className="font-semibold text-slate-800">{initialDaysLeft} Days</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Total Active Days:</span>
            <span className="font-semibold text-slate-800">{initialActiveDays} Days</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 my-3" />

        {/* small inline pills row (compact) */}
        <div className="hidden md:grid grid-cols-6 gap-3 mb-3">
          {["M", "T", "W", "T", "F", "S"].map((d, i) => {
            const isSel = [...selectedDates].some(s => {
              // check for any selected date that matches same weekday for current month (best-effort)
              const iso = s;
              const date = new Date(iso);
              // get monday-start weekday index (0-6)
              const w = (date.getDay() + 6) % 7;
              return w === i;
            });
            return (
              <div
                key={i}
                className={`h-9 rounded-md flex items-center justify-center text-sm font-medium
                  ${isSel ? "bg-[#d6f1ed]" : "bg-white border border-slate-200 text-slate-800"}`}
              >
                {d}
              </div>
            );
          })}
        </div>

        {/* Show More toggle */}
        <div className="flex justify-center mb-3">
          <button
            onClick={() => setShowMore(s => !s)}
            className="inline-flex items-center gap-2 text-sm text-sky-600 font-medium focus:outline-none"
            aria-expanded={showMore}
            type="button"
          >
            {showMore ? (
              <>
                Show Less
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/></svg>
              </>
            ) : (
              <>
                Show More
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </>
            )}
          </button>
        </div>

        {/* Expanded calendar */}
        {showMore && (
          <div className="mt-2">
            {/* Instructional yellow banner */}
            <div className="bg-amber-100 border border-amber-200 rounded-lg px-4 py-3 text-center mb-4 relative">
              <div className="text-sm font-semibold text-amber-900">Click on the highlighted box to mark attendance</div>
              <div className="text-xs text-amber-800 mt-1">Mark attendance for multiple days</div>
              {/* small triangle pointer */}
              <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-amber-100" />
            </div>

            {/* Month title and nav */}
            <div className="flex items-center justify-between mb-2 px-1">
              <div className="text-sm text-slate-600 font-medium">{monthYearTitle(year, month)}</div>
              <div className="flex items-center gap-2">
                <button onClick={prevMonth} className="p-1 rounded-md hover:bg-slate-100">
                  <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button onClick={nextMonth} className="p-1 rounded-md hover:bg-slate-100">
                  <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>

            {/* Weekday labels */}
            <div className="grid grid-cols-7 gap-2 text-xs text-slate-500 mb-2 px-1">
              {weekdays.map((wd) => (
                <div key={wd} className="text-center py-1">{wd}</div>
              ))}
            </div>

            {/* Calendar grid (6 rows x 7 cols) */}
            <div className="grid grid-cols-7 gap-2 px-1">
              {grid.map((cell) => {
                const iso = cell.key;
                const isSelected = selectedDates.has(iso);
                const muted = !cell.inCurrentMonth; // faded
                return (
                  <button
                    key={cell.key}
                    onClick={() => { if (cell.inCurrentMonth) toggleDate(iso); }}
                    className={`relative rounded-md h-11 flex items-center justify-center text-sm font-medium
                      ${muted ? "bg-slate-50 text-slate-300 border border-slate-100" : "bg-white text-slate-800 border border-slate-200"}
                      ${isSelected && cell.inCurrentMonth ? "bg-[#d6f1ed] text-slate-900 shadow" : ""}`}
                    aria-pressed={isSelected}
                    type="button"
                    title={cell.date.toDateString()}
                  >
                    <span className="pointer-events-none select-none">{cell.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-1">
                  <div className="h-8 w-8 rounded-md bg-[#d6f1ed] border border-transparent" />
                  <div className="text-xs text-slate-600">PRESENT</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="h-8 w-8 rounded-md bg-amber-100 border border-amber-300" />
                  <div className="text-xs text-slate-600">NOT MARKED</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="h-8 w-8 rounded-md bg-white border border-slate-200" />
                  <div className="text-xs text-slate-600">NOT ACTIVE</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reference image (optional) */}
        <div className="mt-4 flex justify-center">
          <img src={REF_IMAGE} alt="reference" className="hidden" />
        </div>
      </div>
    </div>
  );
}
