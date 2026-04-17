import StripeHero from "@/components/StripeHero";
import StripeProducts from "@/components/StripeProducts";
import StripeSessions from "@/components/StripeSessions";
import StripeGlobalScale from "@/components/StripeGlobalScale";
import StripeCTA from "@/components/StripeCTA";
import StripeFooter from "@/components/StripeFooter";

export default function Home() {
  return (
    <>
      <StripeHero />
      <StripeProducts />
      <StripeSessions />
      <StripeGlobalScale />
      <StripeCTA />
      <StripeFooter />
    </>
  );
}
