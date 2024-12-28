import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import ServiceSection from "./components/Service";
import PricingSection from "./components/Pricing";
import FeatureSection from "./components/Feature";
import TestimonySection from "./components/Testimony";
import FAQSection from "./components/FAQ";
import ContactSection from "./components/Contact";
import FooterSection from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServiceSection />
      <PricingSection />
      <FeatureSection />
      <TestimonySection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
