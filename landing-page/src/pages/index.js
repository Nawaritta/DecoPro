import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <NavBar />
      <Hero />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
