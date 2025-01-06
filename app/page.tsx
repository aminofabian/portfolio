import Navbar from "@/components/Navbar";
import { AuroraHero } from "./components/Hero";
import { SecurityJourney } from "./components/SecurityJourney";
import { SecurityServices } from "./components/SecurityServices";
import { SecurityProcess } from "./components/SecurityProcess";
import { SecurityFAQ } from "./components/SecurityFAQ";
import { SecurityContact } from "./components/SecurityContact";
import { SecurityFooter } from "./components/SecurityFooter";
import { SecurityMetrics } from "./components/SecurityMetrics";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <section id="home">
        <AuroraHero />
      </section>
      
      <section id="about">
        <SecurityJourney />
      </section>
      
      <section id="skills">
        <SecurityProcess />
      </section>
      
      <section id="projects">
        <SecurityMetrics />
      </section>
      
      <section id="services">
        <SecurityServices />
      </section>
      
      <section id="faqs">
        <SecurityFAQ />
      </section>
      
      <section id="contact">
        <SecurityContact />
      </section>
      
      <SecurityFooter />
    </main>
  );
}
