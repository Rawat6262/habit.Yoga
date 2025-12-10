import React, { useEffect, useState } from "react";
import logo from '../src/assets/future_calendar.svg'
import logo2 from '../src/assets/YouTube.svg'
import logo3 from '../src/assets/timing.svg'
import logo4 from '../src/assets/calendar_icon.png'
import logo5 from '../src/assets/whatsapp-icon.png'
import logo6 from '../src/assets/Refer_asset_1.png'
import logo7 from '../src/assets/Refer_asset_2.png'
import logo8 from '../src/assets/Refer_asset_3.png'
import logo11 from '../src/assets/breathing_tab.png'
import logo12 from '../src/assets/face_yoga_tab.png'
import logo13 from '../src/assets/doc.svg'
import AttendanceWidget from "./Calendar";
import InviteCard from "./Reffer";
import BottomNav from "./botle";
import InviteProgress from "./level";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function HabitProfile() {
const { id } = useParams();

const [data, setData] = useState({});
const [level, setLevel] = useState(0);
const [T, setT] = useState(false);
const [T1, setT1] = useState(false);

const fetchData = async () => {
  try {
    const res = await axios.get(`/api/detail/${id}`);
    setData(res.data);
    console.log(res, "API Response");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

useEffect(() => {
  if (id) {
    fetchData();
  }
}, [id]); // ✅ Only depend on id

// ✅ Separate effect for level
useEffect(() => {
  if (data?.level) {
    setLevel(data.level);
  }
}, [data.level]);

    return (
        <div className="w-full h-full flex items-center justify-center font-sans">
            <BottomNav
                active="home"
                onNavigate={(id) => {
                    console.log("navigate to", id);
                }}
            />

            <div className="w-md h-full flex flex-col justify-between items-center">

                {/* Top Section */}
                <div className="w-[448px] h-[79px] mb-[24px] flex justify-center items-center">
                    <div className="w-[424px] h-[49px] flex justify-between">

                        {/* Left Section */}
                        <div className="h-[49px] w-[163px] flex justify-between items-start">
                            <div className="w-[24px] h-[49px] flex items-start justify-start">
                                <svg
                                    className="w-5 h-5 text-[#0F172A] cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>

                            <div className="w-[127px] h-[49px]">
                                <p className="text-[14px] font-normal text-[#0F172A]">Namaste</p>
                                <p className="text-xl font-semibold text-[#0F172A]">{data.name} Ji</p>
                            </div>
                        </div>

                        {/* Karma Box */}
                        <div className="h-[37px] w-[130px] py-[8px] px-[12px] bg-[#f1f5f9]">
                            <div className="h-[21px] w-[105px] flex justify-between">
                                <p className="font-bold text-[14px]">0</p>
                                <p className="font-bold text-[14px]">Karma</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Action Buttons */}
                <div className="w-[424px] h-[45px] grid grid-cols-2 mt-4">
                    <div className="w-[204px] h-[42px] flex items-center gap-2 p-2 border bg-white border-[#E2E8F0] rounded-lg">
                        <img src={logo2} alt="join" />
                        <span className="text-sm font-medium text-black"><a href="https://www.youtube.com/watch?v=4-oKlSG_2UU">Join Class</a></span>
                    </div>

                    <div className="w-[204px] h-[42px] flex items-center gap-2 p-2 border bg-white border-[#E2E8F0] rounded-lg">
                        <img src={logo3} alt="timings" />
                        <a href="https://habit.yoga/batches"><span className="text-sm font-medium text-black">Batch Timings</span></a>
                    </div>
                </div>

                {/* Check Attendance */}
                <div className="w-[400px] h-[45px] flex justify-center gap-2 p-2 bg-white border border-[#e2e8f0] rounded-lg m-3">
                    <img src={logo4} alt="calendar" />
                    <span className="text-sm font-medium text-black">Check My Attendance</span>
                </div>

                {/* Invite Section */}
                <InviteCard
                    shareUrl="https://habit.yoga/harsh_5p762"
                    logo5={logo5}
                    logo6={logo6}
                    logo7={logo7}
                    logo8={logo8}
                    id={id}
                />

                {/* Rewards Ticket */}
                <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-md">
                    <div className="mb-4 flex items-center gap-2 text-slate-800">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-pink-100">
                            <span className="text-lg">🎁</span>
                        </span>
                        <span className="font-semibold">My Rewards</span>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-amber-200 to-amber-300 px-6 py-7">
                        <span className="absolute left-0 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100" />
                        <span className="absolute right-0 top-1/2 h-12 w-12 translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100" />

                        <p className="mb-4 text-center text-lg font-semibold text-slate-900">You Won 7 Days Yoga!*</p>

                        <div className="relative mb-4 h-4 w-[424px]">
                            <div className="border-t border-dashed border-amber-200" />
                        </div>

                        <p className="mb-6 text-center text-xs text-amber-950/80 leading-relaxed">
                            *Vouchers are redeemable only<br />with paid plans.
                        </p>

                        <button className="block w-full rounded-full bg-slate-800 py-3 text-center text-sm font-medium text-white">
                            Redeem on 4th Dec, 2025
                        </button>
                    </div>
                </div>

                <InviteProgress
                    invitesDone={level}
                    invitesNeeded={5}
                    rewardText="7 Yoga Days Voucher"
                    levelLeftLabel="Level 0"
                    levelRightLabel="Level 1"
                />

                <p className="text-[#000] font-medium text-[16px] w-[410px] m-5">
                    🎁 Level 4 Reward: YE Tshirt
                </p>

                <button className="border border-[#cbd5e1] px-4 py-2 rounded-full w-full text-[#0369a1] flex justify-center m-4">
                    See All Rewards
                </button>

                {/* Yoga Cards */}
                <div className="flex items-center justify-center gap-8">
                    <img className="h-[173px] w-[161px]" src={logo11} alt="breathing" />
                    <img className="h-[173px] w-[161px]" src={logo12} alt="face-yoga" />
                </div>

                {/* PDF Download */}
                <div className="flex items-center justify-between gap-2 bg-[#eafaea] rounded-lg border p-3 w-[424px] h-[55px] m-5">
                    <div className="flex items-center gap-2">
                        <img src={logo13} alt="doc" />
                        <p className="text-[#331455] font-semibold">Download PDF</p>
                    </div>
                    <p className="text-[#046e75]">{'>'}</p>
                </div>

                {/* Calendar Attendance */}
                <AttendanceWidget initialDaysLeft={12} initialActiveDays={2} />

                <div className="w-md h-[233px]"></div>
            </div>
        </div>
    );
}
