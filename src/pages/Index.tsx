import HeroSection from "@/components/landing/HeroSection";
import ForYouSection from "@/components/landing/ForYouSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AuthorSection from "@/components/landing/AuthorSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import OfferSection from "@/components/landing/OfferSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import UrgencyBar from "@/components/landing/UrgencyBar";

const KIWIFY_URL = "https://pay.kiwify.com.br/SZzoG8o";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <UrgencyBar />
      <HeroSection ctaUrl={KIWIFY_URL} />
      <ForYouSection />
      <BenefitsSection />
      <AuthorSection />
      <TestimonialsSection />
      <OfferSection ctaUrl={KIWIFY_URL} />
      <FaqSection />
      <FinalCtaSection ctaUrl={KIWIFY_URL} />
    </main>
  );
};

export default Index;
