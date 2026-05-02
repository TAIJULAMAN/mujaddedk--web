import StripeHero from "@/components/StripeHero";
import CrivoFooter from "@/components/CrivoFooter";
import StripeProducts from "@/components/StripeProducts";
import CrivoAbout from "@/components/CrivoAbout";
import CrivoContact from "@/components/CrivoContact";

export default function Home() {
  return (
    <>
      <StripeHero />
      <StripeProducts />
      <CrivoAbout />
      <CrivoContact />
      <CrivoFooter />
    </>
  );
}
