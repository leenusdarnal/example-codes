import Image from "next/image"
import Mountian from "@/images/mountain.webp"
export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-between text-6xl">
      <div className="relative w-full">
        <div className="absolute -z-50  md:w-full">
          <Image src={Mountian} alt="This is a hero Section" />
        </div>
        <div className=" flex flex-col items-center justify-center  gap-10 pt-10 text-center text-white md:gap-20 md:pt-36">
          <h1 className=" text-3xl md:text-9xl">This a Hero Section</h1>
          <p className="text-sm font-black  md:max-w-3xl md:text-base ">
            This is a demo page to practice various methods to solidfy knowlege
            about the various working of html,css,Typescript,React and take
            advantage of Next.js with shadcn/ui
          </p>
        </div>
      </div>
    </main>
  )
}
