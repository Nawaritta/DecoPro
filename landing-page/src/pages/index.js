import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Testemonials from "@/components/Testemonials";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <GetApp />
      <div className='w-full  bg-gray-900'>
        <Testemonials />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
