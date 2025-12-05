import ContactContent from "./ContactContent";


export const metadata = {
  title: "Contact",
  description:
    "Contact Rajab Ali for full-stack development, MERN apps, API work, and professional freelance projects.",
  openGraph: {
    title: "Contact — Rajab Ali",
    description:
      "Reach out to discuss your project — MERN, Next.js, React, Node.js and more.",
    url: "https://rajabali.pk/contact",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: "https://rajabali.pk/contact",
  },
};


export default function ContactPage() {
       return (
    <>
      <ContactContent />
    </>
  );
  
}
