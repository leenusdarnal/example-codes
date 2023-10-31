import profileImg from "@/images/profile-pic.webp"
import type { StaticImageData } from "next/image"
import Image from "next/image"

type testimonialType = {
  name: string
  image: StaticImageData
  comment: string
}
export default function Testimonial() {
  const testimonials = [
    {
      name: "Timo",
      image: profileImg,
      comment: "Tuomo's magic was super awesome!",
    },
    {
      name: "Ville",
      image: profileImg,
      comment: "I couldn't believe my eyes!",
    },
    {
      name: "Taneli",
      image: profileImg,
      comment: "Very entertaining, big thumbs up!",
    },
    {
      name: "Sami",
      image: profileImg,
      comment: "The card tricks Tuomo did were unbelievable!",
    },
  ]
  return (
    <section className=" bg-zinc-950 px-52 pb-32 pt-24">
      <h2 className="mb-20 text-center text-4xl font-bold">
        What people are saying
      </h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t}></TestimonialCard>
        ))}
      </div>
    </section>
  )
}

const TestimonialCard = (data: testimonialType) => {
  const { image, name, comment } = data
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-neutral-800 px-5 py-5">
        <p className="text-xl leading-normal">{comment}</p>
        <Avatar imagesrc={image} name={name} />
      </div>
    </div>
  )
}

const Avatar = ({
  imagesrc,
  name,
}: {
  imagesrc: StaticImageData
  name: string
}) => {
  return (
    <div className="mt-3 flex items-center space-x-3">
      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={imagesrc}
          width="100"
          height="100"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>{name}</div>
    </div>
  )
}
