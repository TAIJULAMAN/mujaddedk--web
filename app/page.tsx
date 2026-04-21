import StripeHero from "@/components/StripeHero";
import CrivoPricing from "@/components/CrivoPricing";
import StripeSessions from "@/components/StripeSessions";
import StripeGlobalScale from "@/components/StripeGlobalScale";
import StripeCTA from "@/components/StripeCTA";
import StripeFooter from "@/components/StripeFooter";
import StripeProducts from "@/components/StripeProducts";

export default function Home() {
  return (
    <>
      <StripeHero />
      <StripeProducts />
      <CrivoPricing />
      <StripeSessions />
      <StripeGlobalScale />
      <StripeCTA />
      <StripeFooter />
    </>
  );
}
