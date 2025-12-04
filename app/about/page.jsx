import AboutContent from "./AboutContent";

export const metadata = {
  title: "About",
  description:
    "Learn about Rajab Ali — Full Stack Developer with expertise in MERN, Next.js, and modern web application development.",
  openGraph: {
    title: "About — Rajab Ali",
    description:
      "Full-stack developer specializing in MERN & Next.js. Discover my background, skills, and experience.",
    url: "https://rajabali.pk/about",
    images: ["/og-about.png"],
  },
  alternates: {
    canonical: "https://rajabali.pk/about",
  },
};


export default function AboutPage() {
  return (
    <>
      <AboutContent />
    </>
  );
}