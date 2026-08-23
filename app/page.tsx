import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CategoryGrid from "@/components/CategoryGrid";
import TodaysPicks from "@/components/TodaysPicks";
import ExclusivePicks from "@/components/ExclusivePicks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <CategoryGrid />
      <TodaysPicks />
      <ExclusivePicks />
      <Footer />
    </main>
  );
}

