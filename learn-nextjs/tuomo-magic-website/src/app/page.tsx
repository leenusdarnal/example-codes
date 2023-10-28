import Contact from "@/app/_components/Contact"
import Faq from "@/app/_components/Faq"
import Footer from "@/app/_components/Footer"
import Hero from "@/app/_components/Hero"
import Navbar from "@/app/_components/Navbar"
import Services from "@/app/_components/Services"
import Testimonial from "@/app/_components/Testimonial"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
      <Contact />
      <Faq />
      <Footer />
    </>
  )
}
