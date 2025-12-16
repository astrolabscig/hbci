import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Ministries from "@/components/Ministries";
import { MinistryCard } from "@/components/MinistryCard";
import Navbar from "@/components/Navbar";
import PastorSlider from "@/components/PastorSlider";
import QuickInfo from "@/components/QuickInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <QuickInfo />
      <Founder />
      <PastorSlider />
      <Ministries />
      {/* <MinistryCard /> */}
      <Footer />
    </div>
  );
}
