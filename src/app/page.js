import Categories from "@/app/components/categories";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import ProductSlider from "@/app/components/productslider";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
        <Hero />
        <ProductSlider />
        <Categories />
      {/* <Footer /> */}
    </>
  );
}
