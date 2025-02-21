import About from "@/app/Components/About";
import Footer from "@/app/Components/Footer";
import HeaderOne from "@/app/Components/HeaderOne";
import HeaderTwo from "@/app/Components/HeaderTwo";
import Para from "../Components/Para";
import ThemeToggle from "../Components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <HeaderOne />
      <HeaderTwo />
      <About />
      <Para />
      <Footer />
      <div className="hidden lg:block">
        <ThemeToggle />
      </div>
    </div>
  );
}
