
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroImg from '@/public/assets/hero.webp'
import icon from '@/public/assets/icon.jpeg'
import { IoStarSharp } from "react-icons/io5";
import Button from "@/components/Button";
import group from '@/public/assets/grp.jpg'
import { BsFillRocketFill } from "react-icons/bs";
import { DiRaphael } from "react-icons/di";
import { SiHiveBlockchain } from "react-icons/si";
import { PiUserFocus } from "react-icons/pi";
import dev from '@/public/assets/dev.webp'
import devM from '@/public/assets/devM.jpg'
import Faqs from "@/components/FAQS";
import ContactSection from "@/components/ContactForm";
import Service from "@/components/Service";
import HerroSection from "@/components/HerroSection";
export default function Home() {
  return (
    <div >
      <HerroSection />
      {/* HeroSection image */}
      <div className="flex md:overflow-hidden relative justify-center ">
        <div className="absolute inset-0 bg-gradient-to-t  from-emerald-500/10 via-emerald-500/60 to-transparent blur-3xl" />
        <div className="absolute z-20 inset-0 bg-gradient-to-t bottom-0  from-black/90 via-black/10 to-transparent" />

        <div className="absolute md:hidden flex w-[100vw] gap-25 items-center top-[90px]  mx-auto md:top-[300px] text-4xl md:text-9xl font-black whitespace-nowrap animate-marqueee ">


          <div className="w-full ps-25">Best Markiting Agency</div>
          <div className="w-full ">Best Markiting Agency</div>
        </div>
        <div className="absolute hidden md:flex w-[100vw] gap-25 items-center top-[90px]  mx-auto md:top-[300px] text-4xl md:text-9xl font-black whitespace-nowrap animate-marquee">


          <div className="w-full ps-25">Best Markiting Agency</div>
          <div className="w-full ">Best Markiting Agency</div>
        </div>

        <Image className="md:w-[80vw] z-10" quality={100} src={HeroImg.src} height={HeroImg.height} width={HeroImg.width} alt="Hero Image" />
      </div>

      <div className=" hidden md:block relative left-[170px] -mt-[110px] bg-transparent z-50  rounded-4xl w-sm py-4 px-5 border border-slate-600">
        <div className="text-4xl pb-2   border-gray-500"><span className="font-black text-5xl text-emerald-400">#1</span> Marketing Agency in Pakistan</div>
        <div className="w-full h-[0.5px] bg-gray-700"></div>
        <div className="pt-3 flex items-center gap-5">
          <div className="h-[40px] w-[40px] rounded-full">
            <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
          </div>
          <div>
            <div className="flex items-center ">
              <IoStarSharp className="text-emerald-400" />
              <IoStarSharp className="text-emerald-400" />
              <IoStarSharp className="text-emerald-400" />
              <IoStarSharp className="text-emerald-400" />
              <IoStarSharp className="text-emerald-400" />

            </div>
            <div className="text-xl">200+ 5 star Reviews</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="md:pt-20 pt-8 px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10">
          <span className="text-emerald-500 text-xl font-black px-3 py-0.5 rounded-full bg-gray-800">Services</span>
          <h2 className="font-black text-3xl md:text-6xl">What we are offering</h2>
        </div>
        <div className="pt-5 flex justify-center md:justify-end">
          <Button text='VIEW ALL SERVICES' type='button' />
        </div>
        <div className="md:py-25 py-8">
        <Service/>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section>
        <div className="flex px-10 pb-3 md:pb-8 flex-col md:flex-row items-center gap-3">
          <span className="text-emerald-500 text-xl font-black px-3 py-0.5 rounded-full bg-gray-800">Why us</span>
          <h2 className="font-black text-4xl md:text-5xl">Our Specialities</h2>
        </div>
        <div className="text-slate-600 font-semibold text-md md:text-xl flex md:justify-end pb-6">
          <div className="md:w-sm text-center w-[250px] mx-auto md:mx-10">
            Our top-notch digital marketing agency not only delivers impressive results but also dazzles our clients with remarkable statistics. We pride ourselves on our ability to amaze customers with tangible outcomes and eye-catching figures.

          </div>
        </div>
        <div className="flex overflow-hidden relative justify-center ">
          <div className="absolute  inset-0 bg-gradient-to-b   from-black/90 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t  from-emerald-500/10 via-emerald-500/90 to-transparent blur-3xl" />
          <div className="absolute z-20 inset-0 bg-gradient-to-t   from-black/90 via-black/10 to-transparent" />
          <div className="z-10 absolute left-0 md:left-[330px]  pt-10 flex justify-center">


            <div className="bg-slate-50/25 h-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center w-[110px] md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-black ">15+</div>
              <div className="font-bold text-gray-100 text-xs md:text-xl">Years of Experience</div>
            </div>

            <div className="bg-slate-50/25 relative right-5 bottom-5 h-[110px] w-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-black ">200+</div>
              <div className="font-bold text-gray-100 text-xs md:text-xl">Successfull Projects</div>
            </div>

            <div className="bg-slate-50/25 relative right-10  h-[110px] w-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-black ">150+</div>
              <div className="font-bold text-gray-100 text-xs md:text-xl">Happy Clients</div>
            </div>

            <div className="bg-slate-50/25 relative right-15 bottom-5 h-[110px] w-[110px] md:h-[180px] gap-2 flex flex-col items-center justify-center md:w-[180px] rounded-full  ">
              <div className="md:text-5xl text-3xl font-black ">200+</div>
              <div className="font-bold text-gray-100 text-xs md:text-xl">5 Star Reviews</div>
            </div>


          </div>
          <div className="absolute z-20 bottom-0 w-full ">
            <div className="flex flex-col md:flex-row gap-3 px-8  items-center">
              <div className="p-5 flex  rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                  < BsFillRocketFill className="text-emerald-500 text-4xl" />
                </div>
                <h3 className="text-3xl font-black">Proven Track Record</h3>
                <p className="text-lg">We have built a reputation as a trusted and reliable partner in achieving business success.</p>
              </div>
              <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                  < SiHiveBlockchain className="text-emerald-500 text-4xl" />
                </div>
                <h3 className="text-3xl font-black">Tailored Solutions</h3>
                <p className="text-lg">We offer personalized solutions tailored to your specific goals, audience, and industry.</p>
              </div>
              <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                  < PiUserFocus className="text-emerald-500 text-4xl" />
                </div>
                <h3 className="text-3xl font-black">Client-Centric Focus</h3>
                <p className="text-lg">Your success is our priority. We prioritize understanding your business goals.</p>
              </div>
            </div>
            <div className="flex flex-col my-8 md:my-0 md:flex-row justify-center items-center gap-3">
              <div className="flex items-center px-3 py-1 rounded-full md:my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-emerald-500 text-3xl" />
                <div className="text-xl font-bold">Continuous Innovation</div>

              </div>
              <div className="flex items-center px-3 py-1 rounded-full md:my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-emerald-500 text-3xl" />
                <div className="text-xl font-bold">Dedicated Support</div>

              </div>
              <div className="flex items-center px-3 py-1 rounded-full md:my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-emerald-500 text-3xl" />
                <div className="text-xl font-bold">Positive Client Experiences</div>

              </div>
              <div className="flex items-center px-3 py-1 rounded-full md:my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-emerald-500 text-3xl" />
                <div className="text-xl font-bold">Commitment to Excellence</div>

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
              <h2 className="font-black md:ps-20 text-emerald-500 text-9xl">150%</h2>
              <p className="text-2xl md:text-4xl text-emerald-400 font-black md:font-bold">Average Traffic Increase</p>
              <p className="md:text-slate-500 text-lg md:text-2xl mt-40 md:mt-10">Clients choose to stay with us over the long run due to the exceptional results we deliver and the strong relationships we build.

              </p>
            </div>
          </div>
          <div className=" md:w-[30vw] min-h-[48vh] md:min-h-[75vh] p-5 md:p-10 flex flex-col  justify-between rounded-3xl bg-[#1f1d1d]">
            <div>
              <h2 className="text-emerald-500 text-9xl font-black">$54<span className="text-7xl">M+</span></h2>
              <p className="font-bold text-3xl mt-3 text-center md:text-start  md:text-4xl">Revenue Generated</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm md:text-lg">Our digital marketing strategies have generated over $54+ million in revenue for our clients, showcasing our ability to drive substantial business growth through effective online campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}

      <Faqs />

      {/* Contact section */}

      <ContactSection />

    </div>
  );
}
