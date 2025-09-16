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
        <div className="flex flex-wrap items-center justify-center gap-y-2 space-x-2 text-[50px] font-semibold">
            <div className="bg-white/10 py-2 px-3 rounded-lg backdrop-blur-md border border-white/20">
               {timeLeft.days} <span className="text-[10px]">days</span>
            </div>
            <div className="bg-white/10 py-2 px-3 rounded-lg backdrop-blur-md border border-white/20">
                {timeLeft.hours} <span className="text-[10px]">hrs</span>
            </div>
            <div className="bg-white/10 py-2 px-3 rounded-lg backdrop-blur-md border border-white/20">
                {timeLeft.minutes} <span className="text-[10px]">mins</span>
            </div>
            <div className="bg-white/10 py-2 px-3 rounded-lg backdrop-blur-md border border-white/20">
                {timeLeft.seconds} <span className="text-[10px]">secs</span>
            </div>
        </div>
    );
}
