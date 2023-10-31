import Container from "@/app/_components/Container"
import Image from "next/image"
import Link from "next/link"
import heroImg from "@/images/tk-cards.webp"

export default function Hero() {
  return (
    <Container className="flex flex-wrap pb-16 pt-28">
      <div className="w-full items-center lg:w-1/2 lg:px-10">
        <div className="mb-8 max-w-2xl pr-3">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Magicina Tuomo Kankaanpää
          </h1>
          <p className="xl-text-2xl text gray-300 py-5 text-xl leading-normal lg:text-xl">
            Ahoy! My name is Tuomo and I have done magic ever since I can
            remember. My favourite type of magic is card magic, but I don&apos;t
            shy away from grandious stage shows either! Whether you are looking
            for an entertainer to warm up an audience with intimate close-up
            magic or you are looking for whole night entertainment to your
            company event or a wedding, I am here to help you!
          </p>
          <div className=" flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-y-0">
            <Link
              href="#contact"
              className="rounded-md bg-indigo-600 px-7 py-3 text-xl text-white"
            >
              Book me
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <Image
          src={heroImg}
          alt="hero image"
          width="529"
          height="529"
          loading="eager"
          className="hidden rounded-full object-cover lg:inline"
        />
      </div>
    </Container>
  )
}
