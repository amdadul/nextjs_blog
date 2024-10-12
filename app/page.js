import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Blogs from "./components/blogs";

export default function Home() {
  return (
    <div>
      <Hero></Hero>

      <Blogs limit="10"></Blogs>

      <Footer></Footer>
    </div>
  );
}
