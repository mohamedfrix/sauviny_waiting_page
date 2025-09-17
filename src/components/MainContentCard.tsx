'use client';

import background from '@/assets/images/background.png';
import Image from 'next/image';
import Countdown from './CountDown';
import { motion } from 'framer-motion';

export default function MainContentCard() {
    return (
        <>
            <div className={` max-h-[90vh] rounded-[32px] lg:rounded-[64px] overflow-hidden w-[95%] lg:w-[70%] h-[80%] min-h-[650px] grid grid-rows-1 grid-cols-1 border-[#4F77A8]/40 border-[2px] shadow-[0_0_50px_rgba(79,119,168,0.3)] backdrop-blur-sm relative bg-gradient-to-br from-[#1B2536] via-[#27364D]/70 to-[#324C72]/60`}>
                {/* Animated color drops background */}
                <div className="absolute inset-0 overflow-hidden rounded-[32px] lg:rounded-[64px]">
                    {/* Massive moving color blobs - Brand inspired colors */}
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#4F77A8]/40 rounded-full blur-3xl animate-blob-fast"></div>
                    <div className="absolute -top-32 -right-40 w-80 h-80 bg-[#324C72]/38 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-40 left-32 w-88 h-88 bg-[#A3BAD6]/40 rounded-full blur-3xl animate-blob-fast animation-delay-4000"></div>
                    <div className="absolute bottom-32 -right-32 w-84 h-84 bg-violet-400/28 rounded-full blur-3xl animate-blob animation-delay-6000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#27364D]/35 rounded-full blur-2xl animate-blob-fast animation-delay-3000"></div>
                </div>
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden rounded-[32px] lg:rounded-[64px]">
                    <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#4F77A8]/60 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
                    <div className="absolute top-3/4 left-1/5 w-1 h-1 bg-[#A3BAD6]/60 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
                    <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#324C72]/60 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
                    <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-violet-300/50 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
                </div>
                <div className={`w-full mt-[80px] lg:mt-[100px] row-start-1 col-start-1 flex flex-col items-center self-start gap-y-[20px] relative z-10`}>
                    <motion.div className={`w-full flex justify-center items-center gap-x-[12px] -translate-x-[15px]`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Tiny subtle white shadow behind logo */}
                            <div className="absolute inset-0 bg-white/5 rounded-full blur-sm scale-102"></div>
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={200}
                                height={200}
                                className="object-contain w-[80px] md:w-[100px] lg:w-[120px] relative z-10 filter brightness-110 drop-shadow-[0_0_4px_rgba(255,255,255,0.1)]"
                                priority
                            />
                        </div>
                        <p className={`font-montserrat font-semibold text-[40px] md:text-[48px] lg:text-[58px] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}>Sauvini <motion.span className={`font-bold font-sour-gummy text-[#A3BAD6] text-[14px] lg:text-[18px] drop-shadow-[0_0_8px_rgba(196,181,253,0.4)]`}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >bac 2026</motion.span></p>
                    </motion.div>
                    <div className={`w-full flex flex-col items-center`}>
                        <motion.p className={`text-[14px] md:text-[16px] lg:text-[18px] font-montserrat font-semibold text-[#CEDAE9] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]`}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >Your future starts here</motion.p>
                        <motion.p className={`text-[14px] md:text-[16px] lg:text-[18px] font-amiri font-bold lg:mt-[2px] text-[#A3BAD6] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]`}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >مستقبلك يبدأ من هنا</motion.p>
                    </div>

                    

                </div>

                <motion.div className={`w-full lg:translate-y-[20%] justify-center mt-[20px] self-center justify-self-center row-start-1 col-start-1 flex flex-col items-center gap-y-2 lg:gap-y-4`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <p className={`text-[12px] md:text-[14px] lg:text-[16px] text-[#A3BAD6] font-sans font-medium drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]`}>Time left:</p>
                    <Countdown />
                </motion.div>

                <motion.div
                    className={`row-start-1 col-start-1 self-end justify-self-start mb-[30px] ml-[30px] relative`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4F77A8]/20 to-violet-400/15 rounded-full blur-lg animate-pulse"></div>
                    <Image
                        src="/vector.svg"
                        alt="Moon"
                        width={200}
                        height={200}
                        className="object-contain  w-[60px] md:w-[80px] lg:w-[100px] relative z-10 drop-shadow-[0_0_15px_rgba(79,119,168,0.5)]"
                        priority
                    />
                </motion.div>
                
            </div>
        </>
    );
}