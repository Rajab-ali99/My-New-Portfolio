import "./globals.css";
import whtsp from '@/public/assets/whtsp.png';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://rajabali.pk"),
  title: {
    default: "Rajab Ali — Full Stack Developer",
    template: "%s | Rajab Ali"
  },
  description:
    "Portfolio of Rajab Ali — Full Stack Developer specializing in MERN, Next.js, React, Node.js and scalable web applications.",
  keywords: [
    "Rajab Ali",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Pakistan",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Rajab Ali Portfolio",
    url: "https://rajabali.pk",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};



export default function RootLayout({ children }) {
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rajab Ali",
  "jobTitle": "Full Stack Developer (MERN & Next.js)",
  "url": "https://rajabali.pk",
  "image": "https://rajabali.pk/og-default.png",
  "sameAs": [
    "https://www.linkedin.com/in/your-profile",
    "https://github.com/your-github"
  ],
  "knowsAbout": [
    "MERN Stack",
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Full Stack Development"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Rajab Ali — Portfolio",
    "url": "https://rajabali.pk"
  }
};

  return (
    <html className="dark" lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}

        <Link href='https://wa.me/923117787395'>
          <Image
            className="w-10 fixed z-40 bottom-4 md:bottom-10 right-4"
            src={whtsp.src}
            height={whtsp.height}
            width={whtsp.width}
            alt="WhatsApp logo"
          />
        </Link>

        <Footer />
      </body>
    </html>
  );
}
