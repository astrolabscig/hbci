import ContactCard from "@/components/ContactCard";
import DailyDevotional from "@/components/DailyDevotional";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Ministries from "@/components/Ministries";
import PastorSlider from "@/components/PastorSlider";
import QuickInfo from "@/components/QuickInfo";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Hero />
      <QuickInfo />
      <Founder />
      <PastorSlider />
      <Ministries />
      <DailyDevotional />
      <ContactCard />
    </div>
  );
}
