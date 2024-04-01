import HeroSection from "@/utils/components/examplePage/heroSection";
import SecondSection from "@/utils/components/examplePage/secondSection";
import Footer from "@/utils/components/footer/footer";

export default function Page() {
  return (
    <div className="column">
      <HeroSection />
      <SecondSection />
      <Footer />
    </div>
  );
}
