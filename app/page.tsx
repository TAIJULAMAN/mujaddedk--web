import StripeHero from "@/components/StripeHero";
import CrivoCTA from "@/components/CrivoCTA";
import CrivoFooter from "@/components/CrivoFooter";
import StripeProducts from "@/components/StripeProducts";
import CrivoAbout from "@/components/CrivoAbout";
import StripePricing from "@/components/StripePricing";
import CrivoContact from "@/components/CrivoContact";

export default function Home() {
  return (
    <>
      <StripeHero />
      <StripeProducts />
      <CrivoAbout />
      <StripePricing />
      <CrivoCTA />
      <CrivoContact />
      <CrivoFooter />
    </>
  );
}
