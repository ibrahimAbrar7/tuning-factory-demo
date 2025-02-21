import Contact from "@/app/Components/Contact";
import Footer from "@/app/Components/Footer";
import HeaderOne from "@/app/Components/HeaderOne";
import HeaderTwo from "@/app/Components/HeaderTwo";
import Form from "../Components/Form";
import ThemeToggle from "../Components/ThemeToggle";
import BackToTop from "../Components/BackToTop";

export default function Home() {
    return (
     <div>
      <HeaderOne />
      <HeaderTwo />
      <Contact />
      <Form />
      <Footer />
      <div className="hidden lg:block">
        <ThemeToggle />
      </div>
      <BackToTop />
     </div>
    );
  }
  