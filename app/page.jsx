
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
export default function Home() {
  return (
    <div >
      <HerroSection />
      {/* HeroSection image */}
      <div className="flex md:overflow-hidden relative justify-center ">
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

        <Image className="md:w-[80vw] z-10" quality={100} src={HeroImg.src} height={HeroImg.height} width={HeroImg.width} alt="Hero Image" />
      </div>

      <div className=" hidden md:block relative left-[170px] -mt-[110px] bg-transparent z-40  rounded-4xl w-sm py-4 px-5 border border-slate-600">
        <div className="text-3xl pb-2  font-semibold  border-gray-500"><span className="font-semibold text-lime-600">100%</span> Client Satisfaction Guaranteed</div>
        <div className="w-full h-[0.5px] bg-gray-700"></div>
        <div className="pt-3 flex items-center gap-5">
          <div className="h-[40px] w-[40px] rounded-full">
            <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
          </div>
          <div>
            <div className="flex items-center ">
              <IoStarSharp className="text-lime-600" />
              <IoStarSharp className="text-lime-600" />
              <IoStarSharp className="text-lime-600" />
              <IoStarSharp className="text-lime-600" />
              <IoStarSharp className="text-lime-600" />

            </div>
            <div className="text-xl">99+    5 star Reviews</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="md:pt-20 pt-8 px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10">
          <span className="text-lime-600 md:text-xl font-semibold  px-3 py-1 rounded-full bg-[#1f1d1d]">Services</span>
          <h2 className="font-semibold text-3xl md:text-5xl">What we are offering</h2>
        </div>
        <div className="pt-5 flex justify-center md:justify-end">
          <Link href={WEBSITE_SERVICES} >
            <Button text='VIEW ALL SERVICES' type='button' />
          </Link>
        </div>
        <div className="md:py-25 py-8">
          <Service />
        </div>
      </section>

      {/* Our Expertise Section */}
      <section>
        <div className="flex px-10 pb-3 md:pb-8 flex-col md:flex-row items-center gap-3">
          <span className="text-lime-600 md:text-xl font-semibold px-3 py-1 rounded-full bg-[#1f1d1d]">Why us?</span>
          <div className="mb-5 md:mb-0">

            <h2 className="font-semibold text-4xl md:text-5xl">Our Specialities</h2>
            <p className="text-center text-xs md:text-base font-semibold text-gray-500">Top-Quality Results — Every Time</p>
          </div>
        </div>
        <div className="text-slate-600 font-semibold text-md md:text-xl flex md:justify-end pb-6">
          <div className="md:w-xl text-center md:text-left w-[250px] mx-auto md:mx-10">
            Our top-notch <span className="text-lime-500">Services <span className="text-red-500">Hub</span></span> not only delivers impressive results but also dazzles our clients with remarkable statistics. We pride ourselves on our ability to amaze customers with tangible outcomes and eye-catching figures.

          </div>
        </div>
        <div className="flex overflow-hidden relative justify-center ">
          <div className="absolute  inset-0 bg-gradient-to-b   from-black/90 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t  from-lime-500/10 via-lime-500/90 to-transparent blur-3xl" />
          <div className="absolute z-20 inset-0 bg-gradient-to-t   from-black/90 via-black/10 to-transparent" />
          <div className="z-10 absolute left-0 md:left-[330px]  pt-10 flex justify-center">


            <div className="bg-slate-50/25 h-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center w-[110px] md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-semibold ">7+</div>
              <div className="md:font-semibold text-gray-100 text-xs md:text-lg">Years of Experience</div>
            </div>

            <div className="bg-slate-50/25 relative right-5 bottom-5 h-[110px] w-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-semibold ">110+</div>
              <div className="md:font-semibold text-gray-100 text-xs md:text-lg">Successful Projects</div>
            </div>

            <div className="bg-slate-50/25 relative right-10  h-[110px] w-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-semibold ">101+</div>
              <div className="md:font-semibold text-gray-100 text-xs md:text-lg">Happy Clients</div>
            </div>

            <div className="bg-slate-50/25 relative right-15 bottom-5 h-[110px] w-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-semibold ">99+</div>
              <div className="md:font-semibold text-gray-100 text-xs md:text-lg">5 Star Reviews</div>
            </div>


          </div>
          <div className="absolute z-20 bottom-0 w-full ">
            <div className="grid md:grid-cols-3 gap-3 px-8  items-center">
              <div className="p-5 flex  rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/60    justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                  < BsFillRocketFill className="text-lime-600 text-4xl" />
                </div>
                <h3 className="md:text-2xl text-2xl font-semibold">Proven Performance</h3>
                <p className="pt-2 text-gray-300 text-sm">We deliver measurable results. Our data-driven approach is built to meet and exceed your key performance indicators.</p>
              </div>
              <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/60 justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                  < SiHiveBlockchain className="text-lime-600 text-4xl" />
                </div>
                <h3 className="md:text-2xl text-xl font-semibold">Strategies Sculpted for You</h3>
                <p className="pt-2 text-gray-300 text-sm">We build custom strategies from the ground up, tailored to your specific goals and market challenges.</p>
              </div>
              <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/60 justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                  < PiUserFocus className="text-lime-600 text-4xl" />
                </div>
                <h3 className="md:text-2xl text-xl font-semibold">Your Success is Our Success</h3>
                <p className="pt-2 text-gray-300 text-sm">We act as a true extension of your team, fully invested in achieving your long-term vision.</p>
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

          <Image className="md:w-[100vw] h-[160vh] object-cover md:h-auto " quality={100} src={group.src} height={group.height} width={group.width} alt="Hero Image" />
        </div>
        <div className="md:mx-10 md:h-[75vh] my-10 mx-4 flex flex-col md:flex-row gap-3 md:my-20">

          <div className=" relative">

            <Image className="rounded-3xl hidden md:block opacity-30" src={dev.src} height={dev.height} width={dev.width} alt="developer img" />
            <Image className="rounded-3xl  md:hidden opacity-50" src={devM.src} height={devM.height} width={devM.width} alt="developer img" />
            <div className="absolute bottom-0 p-10 left-0">
              <h2 className="font-semibold md:ps-20 text-lime-600 text-9xl">110%</h2>
              <p className="text-2xl md:text-3xl text-lime-600 font-semibold">Your Business Growth is definite with Bullish <span className="text-red-500">Pixel</span></p>
              <p className="md:text-slate-500 text-lg md:text-2xl mt-40 md:mt-10">Your businesses & your thoughts must have to grow with Bullish Pixel Strategies.

              </p>
            </div>
          </div>
          <div className=" md:w-[30vw] min-h-[48vh] md:min-h-[75vh] p-5 md:p-10 flex flex-col  justify-between rounded-3xl bg-[#1f1d1d]">
            <div>
              <h2 className="text-lime-600 md:text-9xl text-7xl font-semibold">54<span className="">M+</span></h2>
              <p className="font-semibold text-3xl mt-3 text-center md:text-start  md:text-4xl">Revenue Generated</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm md:text-lg">Our services hub strategies have generated over 54M+ in revenue for our clients, demonstrating our proven ability to drive substantial business growth.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Contact section */}

      <ContactSection />

    </div>
  );
}
