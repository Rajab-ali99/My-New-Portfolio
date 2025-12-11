'use client'
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion";
import Button from "./Button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { WEBSITE_SERVICES } from "@/routes/WebsiteRoutes";
import Link from "next/link";

const middleRingImages = [
     "/assets/Hero/21.png", "/assets/Hero/2.png", "/assets/Hero/3.png", "/assets/Hero/4.png",
    "/assets/Hero/5.png", "/assets/Hero/6.png",  "/assets/Hero/7.png",
    "/assets/Hero/8.png", "/assets/Hero/9.png",
     "/assets/Hero/10.png", "/assets/Hero/11.png", "/assets/Hero/12.png",
    "/assets/Hero/13.png", "/assets/Hero/14.png", "/assets/Hero/15.png","/assets/Hero/16.png",
    "/assets/Hero/17.png", "/assets/Hero/18.png", "/assets/Hero/19.png", "/assets/Hero/20.png",
];

const innerRingImages = [
    "/assets/Hero/1.png", "/assets/Hero/2.png", "/assets/Hero/3.png", "/assets/Hero/4.png",
    "/assets/Hero/18.png", "/assets/Hero/20.png",  "/assets/Hero/7.png",
    "/assets/Hero/8.png", "/assets/Hero/9.png",
     "/assets/Hero/10.png", "/assets/Hero/11.png", "/assets/Hero/12.png",
    "/assets/Hero/13.png", "/assets/Hero/14.png", "/assets/Hero/15.png","/assets/Hero/16.png",
    "/assets/Hero/17.png"
];


export default function HeroSection() {
    const scrollRotation = useMotionValue(0);
    const baseRotation = useMotionValue(0);
    const [translateValue, setTranslateValue] = useState(240);
    const [translateValueMD, setTranslateValueMD] = useState(370);

    useEffect(() => {
        const handleResize = () => {
            setTranslateValue(window.innerWidth >= 768 ? 440 : 240);
            setTranslateValueMD(window.innerWidth >= 768 ? 570 : 370);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const smoothScrollRotate = useSpring(useTransform(scrollRotation, (r) => r % 360), {
        stiffness: 40,
        damping: 18,
        mass: 0.9,
    });

    useAnimationFrame((t) => {
        baseRotation.set((t / 1000) * 3);
    });

    useEffect(() => {
        let lastY = window.scrollY;
        const handleScroll = () => {
            const currentY = window.scrollY;
            const diff = currentY - lastY;
            scrollRotation.set(scrollRotation.get() + diff * 0.02);
            lastY = currentY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollRotation]);

    const combinedRotation = useTransform([baseRotation, smoothScrollRotate], ([base, scroll]) => base + scroll);

    return (
        <div className="relative md:h-[115vh] h-[100vh] flex items-center justify-center overflow-hidden bg-[#0a1412]">
            {/* 🌈 Radial background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,20,1)_0%,rgba(45,65,15,1)_40%,rgba(30,40,20,1)_85%,rgba(20,25,15,1)_100%)] pointer-events-none"></div>

            {/* 🌫️ Top gradient */}
            <div className="absolute inset-x-0 top-0 h-40 z-20 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>

            {/* 🌫️ Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-40 z-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

            {/* 🌫️ Left gradient */}
            <div className="absolute hidden md:block inset-y-0 left-0 w-40 z-20 bg-gradient-to-r from-black/70 to-transparent pointer-events-none"></div>

            {/* 🌫️ Right gradient */}
            <div className="absolute hidden md:block inset-y-0 right-0 w-40 z-20 bg-gradient-to-l from-black/70 to-transparent pointer-events-none"></div>


            {/* 🌀 Outer ring */}
            <motion.div
                style={{ rotate: combinedRotation }}
                className="absolute w-[1100px] h-[1100px] rounded-full flex items-center justify-center pointer-events-none"
            >
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                        style={{
                            transform: `rotate(${(i * 360) / 30}deg) translate(710px) rotate(-${(i * 360) / 30}deg)`,
                        }}
                    />
                ))}
            </motion.div>


            {/* 🌀 Middle Ring */}
            <motion.div
                style={{ rotate: useTransform(combinedRotation, r => -r) }} // ring rotates anti-clockwise
                className="absolute w-[750px] h-[750px] rounded-full flex items-center justify-center pointer-events-none"
            >
                {Array.from({ length: 20 }).map((_, i) => {
                    const angle = (i * 360) / 20;
                    return (
                        <div
                            key={i}
                            className="absolute transition-all duration-500 ease-out"
                            style={{
                                transform: `rotate(${angle}deg) translate(${translateValueMD}px) rotate(-${angle}deg)`,
                            }}
                        >
                            <motion.div
                                className="w-28 h-28 rounded-full flex items-center justify-center border relative bg-slate-700/10 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden"
                                style={{ rotate: useTransform(combinedRotation, r => r) }} // counter-rotate to stay upright
                            >
                                <div className="h-[100%] w-[100%] relative">
                                    <Image
                                        src={middleRingImages[i % middleRingImages.length]}
                                        priority={true}
                                        alt={`icons-middle-ring-${i}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        </div>

                    );
                })}
            </motion.div>


            {/* 🌀 Inner Ring  */}
            <motion.div
                style={{ rotate: combinedRotation }}
                className="absolute w-[450px] h-[450px] rounded-full flex items-center justify-center pointer-events-none"
            >
                {Array.from({ length: 17 }).map((_, i) => {
                    const angle = (i * 360) / 17;
                    return (
                        <div
                            key={i}
                            className="absolute transition-all duration-500 ease-out"
                            style={{
                                transform: `rotate(${angle}deg) translate(${translateValue}px) rotate(-${angle}deg)`,
                            }}
                        >
                            <motion.div
                                className="rounded-full border relative bg-slate-700/10 flex items-center justify-center overflow-hidden border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] h-20 w-20"
                                style={{ rotate: useTransform(combinedRotation, (r) => -r) }}
                            >
                                <div className="h-[100%] w-[100%] relative">
                                    <Image
                                        src={innerRingImages[i % innerRingImages.length]}
                                        priority={true}
                                        alt={`icons-inner-ring-${i}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>

                        </div>
                    );
                })}
            </motion.div>

            {/* 🎯 Center content */}
            <div className="z-30 text-center max-w-3xl px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold text-white mb-4"
                >
                   Rajab Ali — Full Stack Developer
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                    className="text-gray-300 text-xs md:text-lg mb-6"
                >
                   Full-Stack Solutions—With Precision, Passion, and Purpose!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.3, ease: "easeOut" }}
                >
                    <Link className="flex justify-center" href={WEBSITE_SERVICES}>
                        <Button text="Discover how" type="button" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
