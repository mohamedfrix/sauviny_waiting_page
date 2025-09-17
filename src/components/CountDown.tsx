'use client';

import { useState, useEffect } from "react";

export default function Countdown() {
    const targetDate = new Date("2025-09-26T00:00:00").getTime(); // Set your target date
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-wrap items-center justify-center gap-y-2 space-x-2 text-[50px] lg:text-[60px] font-semibold">
            <div className="bg-[#1B2536]/60 py-2 px-3 rounded-lg backdrop-blur-md border border-[#4F77A8]/40 shadow-[0_0_15px_rgba(79,119,168,0.4)] text-white">
               {timeLeft.days} <span className="text-[10px] text-[#A3BAD6]">days</span>
            </div>
            <div className="bg-[#1B2536]/60 py-2 px-3 rounded-lg backdrop-blur-md border border-[#4F77A8]/40 shadow-[0_0_15px_rgba(79,119,168,0.4)] text-white">
                {timeLeft.hours} <span className="text-[10px] text-[#A3BAD6]">hrs</span>
            </div>
            <div className="bg-[#1B2536]/60 py-2 px-3 rounded-lg backdrop-blur-md border border-[#4F77A8]/40 shadow-[0_0_15px_rgba(79,119,168,0.4)] text-white">
                {timeLeft.minutes} <span className="text-[10px] text-[#A3BAD6]">mins</span>
            </div>
            <div className="bg-[#1B2536]/60 py-2 px-3 rounded-lg backdrop-blur-md border border-[#4F77A8]/40 shadow-[0_0_15px_rgba(79,119,168,0.4)] text-white animate-pulse">
                {timeLeft.seconds} <span className="text-[10px] text-[#A3BAD6]">secs</span>
            </div>
        </div>
    );
}
