'use client';

import background from '@/assets/images/background.png';
import Image from 'next/image';
import Countdown from './CountDown';
import { motion } from 'framer-motion';

export default function MainContentCard() {
    return (
        <>
            <div className={` max-h-[90vh] rounded-[32px] lg:rounded-[64px] overflow-hidden w-[95%] lg:w-[70%] h-[80%] min-h-[650px] grid grid-rows-1 grid-cols-1 border-[#4F77A8] border-[2px]`}>
                <Image
                    src={background}
                    alt="Background"
                    className="object-cover row-start-1 col-start-1 w-full h-full rounded-[32px]"
                    priority
                    quality={100}
                />
                <div className={`w-full mt-[80px] lg:mt-[100px] row-start-1 col-start-1 flex flex-col items-center self-start gap-y-[20px]`}>
                    <motion.div className={`w-full flex justify-center items-center gap-x-[12px] -translate-x-[15px]`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={200}
                            height={200}
                            className="object-contain w-[80px] md:w-[100px] lg:w-[120px]"
                            priority
                        />
                        <p className={`font-montserrat font-semibold text-[40px] md:text-[48px] lg:text-[58px]`}>Sauvini <motion.span className={`font-bold font-sour-gummy text-[#4F77A8] text-[12px] lg:text-[16px]`}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >bac 2026</motion.span></p>
                    </motion.div>
                    <div className={`w-full flex flex-col items-center`}>
                        <motion.p className={`text-[14px] md:text-[16px] lg:text-[18px] font-montserrat font-semibold`}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >Your future starts here</motion.p>
                        <motion.p className={`text-[14px] md:text-[16px] lg:text-[18px] font-montserrat font-semibold lg:mt-[2px]`}
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
                    <p className={`text-[12px] md:text-[14px] lg:text-[16px] text-[#1B2536] font-sans font-medium`}>Time left:</p>
                    <Countdown />
                </motion.div>

                <motion.div
                    className={`row-start-1 col-start-1 self-end justify-self-start mb-[30px] ml-[30px]`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >

                    <Image
                        src="/vector.svg"
                        alt="Moon"
                        width={200}
                        height={200}
                        className="object-contain  w-[60px] md:w-[80px] lg:w-[100px]"
                        priority
                    />
                </motion.div>
                
            </div>
        </>
    );
}