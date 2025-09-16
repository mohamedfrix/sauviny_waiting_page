import MainContentCard from "@/components/MainContentCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={`w-full h-[100vh] flex justify-center items-center bg-[radial-gradient(221.6%_141.42%_at_0%_0%,#1B2536_0%,#1F1532_100%)]`}>
        <MainContentCard />
      </div>
    </>
  );
}
