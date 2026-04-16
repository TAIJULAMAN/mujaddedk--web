import StripeHero from "@/components/StripeHero";
import StripeProducts from "@/components/StripeProducts";
import StripeCodePreview from "@/components/StripeCodePreview";
import StripeGlobalScale from "@/components/StripeGlobalScale";
import StripePricing from "@/components/StripePricing";
import StripeCTA from "@/components/StripeCTA";
import StripeFooter from "@/components/StripeFooter";

export default function Home() {
  return (
    <>
      <StripeHero />
      <StripeProducts />
      <StripeCodePreview />
      <StripeGlobalScale />
      <StripePricing />
      <StripeCTA />
      <StripeFooter />
    </>
  );
}
