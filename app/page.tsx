import StripeHero from "@/components/StripeHero";
// import CrivoPricing from "@/components/CrivoPricing";
// import StripeSessions from "@/components/StripeSessions";
import StripeGlobalScale from "@/components/StripeGlobalScale";
import CrivoCTA from "@/components/CrivoCTA";
import CrivoFooter from "@/components/CrivoFooter";
import StripeProducts from "@/components/StripeProducts";
import CrivoAbout from "@/components/CrivoAbout";

export default function Home() {
  return (
    <>
      <StripeHero />
      <StripeProducts />
      <CrivoAbout />
      {/* <CrivoPricing /> */}
      {/* <StripeSessions /> */}
      <StripeGlobalScale />
      <CrivoCTA />
      <CrivoFooter />
    </>
  );
}
