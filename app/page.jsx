
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroImg from '@/public/assets/home/hero.webp'
import icon from '@/public/assets/icon.jpeg'
import { IoStarSharp } from "react-icons/io5";
import Button from "@/components/Button";
import group from '@/public/assets/home/grp.jpg'
import { BsFillRocketFill } from "react-icons/bs";
import { DiRaphael } from "react-icons/di";
import { SiHiveBlockchain } from "react-icons/si";
import { PiUserFocus } from "react-icons/pi";
import dev from '@/public/assets/home/dev.webp'
import devM from '@/public/assets/home/devM.jpg'
import Faqs from "@/components/FAQS";
import ContactSection from "@/components/ContactForm";
import Service from "@/components/Service";
import HerroSection from "@/components/HerroSection";
import Link from "next/link";
import { WEBSITE_SERVICES } from "@/routes/WebsiteRoutes";
import Lines from "@/components/Lines";
export const metadata = {
  description:
    "I'm Rajab Ali — Full Stack Developer (MERN & Next.js). Explore my projects, services, skills, and contact information.",
  openGraph: {
    title: "Rajab Ali — Full Stack Developer",
    description:
      "Professional MERN & Next.js developer building scalable, high-performance web applications.",
    url: "https://rajabali.pk",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: "https://rajabali.pk",
  },
};

export default function Home() {
  return (
    <div >
      <HerroSection />
      {/* HeroSection image */}
      <div className="flex md:overflow-hidden   relative justify-center ">
        <div className="absolute inset-0 bg-gradient-to-t from-lime-500/10 via-lime-500/50 to-transparent blur-3xl" />

        <div className="absolute z-20 inset-0 bg-gradient-to-t bottom-0  from-black/90 via-black/10 to-transparent" />

        <div className="absolute md:hidden flex w-[100vw] gap-10 items-center top-[90px]  mx-auto md:top-[300px] text-3xl text-lime-600 font-semibold md:text-9xl  whitespace-nowrap animate-marqueee ">


          <div className="w-full ps-10">Full-Stack Developer</div>
          <div className="w-full">Full-Stack Developer</div>
        </div>
        <div className="absolute hidden md:flex w-[100vw] gap-45 items-center top-[90px]  mx-auto md:top-[300px] text-4xl md:text-8xl font-semibold whitespace-nowrap text-lime-600 animate-marquee">


          <div className="w-full ps-45">Full-Stack Development</div>
          <div className="w-full ">Full-Stack Development</div>
        </div>

        <Image className="md:w-[80vw] z-10" quality={100} src={HeroImg.src} height={HeroImg.height} width={HeroImg.width} alt="Hero Developer Image" />
      </div>

      <div className=" hidden md:block relative left-[170px] -mt-[110px] bg-transparent z-40  rounded-4xl w-sm py-4 px-5 border border-slate-600">
        <div className="text-3xl pb-2  font-semibold  border-gray-500"><span className="font-semibold text-lime-600">100%</span> Client Satisfaction Guaranteed</div>
        <div className="w-full h-[0.5px] bg-gray-700"></div>
        <div className="pt-3 flex items-center gap-5">
          <div className="h-[40px] w-[40px] rounded-full">
            <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="Rajab icon" />
          </div>
          <div>
            <div className="flex items-center ">
              <IoStarSharp className="text-lime-600" />
              <IoStarSharp className="text-lime-600" />
              <IoStarSharp className="text-lime-600" />
              <IoStarSharp className="text-lime-600" />
              <IoStarSharp className="text-lime-600" />

            </div>
            <div className="text-xl">14 Days Free Support</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="md:pt-20 pt-8 px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10">
          <span className="text-lime-600 md:text-xl font-semibold  px-3 py-1 rounded-full bg-[#1f1d1d]">Services</span>
          <div className="flex flex-col items-center justify-center gap-3">

            <h2 className="font-bold text-3xl md:text-5xl">What I'm <span className="text-lime-500">offering</span></h2>
            <Lines />
          </div>
        </div>
        <div className="pt-5 flex justify-center md:justify-end">
          <Link href={WEBSITE_SERVICES} >
            <Button className='' text='View All Services' type='button' />
          </Link>
        </div>
        <div className="md:py-25 py-8">
          <Service />
        </div>
      </section>

      {/* Our Expertise Section */}
      <section>
        <div className="flex px-10 pb-3 md:pb-8 flex-col md:flex-row items-center gap-3">
          <span className="text-lime-600 md:text-xl font-semibold px-3 py-1 rounded-full bg-[#1f1d1d]">Why me?</span>
          <div className="mb-5 md:mb-0">
            <p className="text-center text-xs md:text-base font-semibold text-gray-500">Top-Quality Results — Every Time</p>
            <div className="flex flex-col items-center justify-center gap-3">

              <h2 className="font-bold text-4xl md:text-5xl">My <span className="text-lime-500">Expertise</span></h2>
              <Lines />
            </div>
          </div>
        </div>
        <div className="text-slate-600 font-semibold text-md md:text-xl flex md:justify-end pb-6">
          <div className="md:w-xl text-center md:text-left w-[250px] mx-auto md:mx-10">
            "Specializing in Next.js and React, I deliver pixel-perfect websites that are fast, secure, and SEO-ready. From the first line of code to the final launch, I ensure a smooth process and a product that exceeds expectations."

          </div>
        </div>
        <div className="flex overflow-hidden relative justify-center ">
          <div className="absolute  inset-0 bg-gradient-to-b   from-black/90 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t  from-lime-500/10 via-lime-500/90 to-transparent blur-3xl" />
          <div className="absolute z-20 inset-0 bg-gradient-to-t   from-black/90 via-black/10 to-transparent" />
          <div className="z-10 absolute left-0 md:left-[330px]  pt-10 flex justify-center">


            <div className="bg-slate-50/25 h-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center w-[110px] md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-semibold ">3+</div>
              <div className="md:font-semibold text-gray-100 text-xs md:text-lg">Years Experience</div>
            </div>

            <div className="bg-slate-50/25 relative right-5 bottom-5 h-[110px] w-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-semibold ">100%</div>
              <div className="md:font-semibold text-gray-100 text-xs md:text-lg">Responsive</div>
            </div>

            <div className="bg-slate-50/25 relative right-10  h-[110px] w-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-semibold ">100%</div>
              <div className="md:font-semibold text-gray-100 text-xs md:text-lg">Performance</div>
            </div>

            <div className="bg-slate-50/25 relative right-15 bottom-5 h-[110px] w-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-semibold ">24/7</div>
              <div className="md:font-semibold text-gray-100 text-xs md:text-lg">Support</div>
            </div>


          </div>
          <div className="absolute z-20 bottom-0 w-full ">
            <div className="grid md:grid-cols-3 gap-3 px-8  items-center">
              <div className="p-5 flex  rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/60    justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                  < BsFillRocketFill className="text-lime-600 text-4xl" />
                </div>
                <h3 className="md:text-2xl text-xl font-semibold">High-Speed Performance</h3>
                <p className="pt-2 text-gray-300 text-sm">I build optimized, fast-loading applications using React & Next.js. A faster website means better SEO rankings and happier users.</p>
              </div>
              <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/60 justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                  < SiHiveBlockchain className="text-lime-600 text-4xl" />
                </div>
                <h3 className="md:text-2xl text-xl font-semibold">100% Custom Code</h3>
                <p className="pt-2 text-gray-300 text-sm">No generic templates or bloated site builders. I write clean, scalable code tailored exactly to your specific business requirements.</p>
              </div>
              <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/60 justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                  < PiUserFocus className="text-lime-600 text-4xl" />
                </div>
                <h3 className="md:text-2xl text-xl font-semibold">Full Ownership</h3>
                <p className="pt-2 text-gray-300 text-sm">You get 100% ownership of the source code and assets. No hidden lock-ins—just a transparent partnership focused on your growth.</p>
              </div>
            </div>
            <div className="flex flex-col my-8 md:my-0 md:flex-row justify-center items-center gap-3">
              <div className="flex items-center px-3 py-1 rounded-full md:my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-lime-600 text-3xl" />
                <div className=" font-semibold text-lime-600">Continuous Innovation</div>

              </div>
              <div className="flex items-center px-3 py-1 rounded-full md:my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-lime-600 text-3xl" />
                <div className=" font-semibold text-lime-600">Dedicated Support</div>

              </div>
              <div className="flex items-center px-3 py-1 rounded-full md:my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-lime-600 text-3xl" />
                <div className=" font-semibold text-lime-600">Positive Client Experiences</div>

              </div>
              <div className="flex items-center px-3 py-1 rounded-full md:my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-lime-600 text-3xl" />
                <div className=" font-semibold text-lime-600">Commitment to Excellence</div>

              </div>
            </div>
          </div>

          <Image className="md:w-[100vw] h-[160vh] object-cover md:h-auto " quality={100} src={group.src} height={group.height} width={group.width} alt="Hero section Image" />
        </div>
        <div className="md:mx-10 md:h-[75vh] my-10 mx-4 flex flex-col md:flex-row gap-3 md:my-20">

          <div className=" relative">

            <Image className="rounded-3xl hidden md:block opacity-30" src={dev.src} height={dev.height} width={dev.width} alt="developer img" />
            <Image className="rounded-3xl  md:hidden opacity-30" src={devM.src} height={devM.height} width={devM.width} alt="developer img" />
            <div className="absolute bottom-0 p-5 md:p-10 left-0">
              <div className="flex flex-col md:flex-row items-center gap-3">

                <h2 className="font-bold md:ps-20 text-lime-600 text-5xl">100%</h2>
                <p className="text-2xl md:text-3xl text-lime-600 font-semibold">Google Lighthouse Score</p>
              </div>
              <p className="text-slate-400  md:text-xl mt-40 md:mt-10">Don't lose customers to slow loading times. I build Next.js applications optimized for core web vitals, ensuring lightning-fast performance and higher SEO rankings

              </p>
            </div>
          </div>
          <div className=" md:w-[30vw] min-h-[38vh] md:min-h-[75vh] p-5 justify-evenly md:justify-between flex flex-col  mg:justify-between rounded-3xl bg-[#1f1d1d]">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <h2 className="text-lime-600 md:text-4xl text-2xl font-bold">24/7</h2>
              <p className="font-semibold  text-xl  text-center md:text-start  md:text-2xl">Uptime & Reliability</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm md:text-lg">Rest easy knowing your digital assets are secure. I implement robust error handling and scalable cloud architecture (Vercel/AWS) to keep your business online, always.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact section */}

      <ContactSection />

    </div>
  );
}
