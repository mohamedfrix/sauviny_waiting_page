import MainContentCard from "@/components/MainContentCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={`w-full h-[100vh] max-h-[100vh] flex justify-center items-center bg-[radial-gradient(circle_at_20%_50%,#0f1419_0%,#1a2332_25%,#27364d_50%,#1b2536_100%)] relative overflow-hidden`}>
        {/* Subtle moving stars effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-purple-200 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/6 left-5/6 w-1 h-1 bg-indigo-300 rounded-full animate-pulse delay-1500"></div>
        </div>
        <MainContentCard />
      </div>
    </>
  );
}
