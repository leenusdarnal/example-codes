type ServiceType = {
  title: string
  duration: string
  description: string
  price: string
}
export default function Services() {
  const services = [
    {
      title: "Close-Up Magic",
      duration: "45 min",
      description:
        "Intimate close-up magic in a bar, company event, wedding or similar event.",
      price: "497 EUR",
    },
    {
      title: "Stage Show",
      duration: "60 min",
      description:
        "Prepare to be spellbound as I conjure wonders, illusions, and astonishments that will leave you and your friends in awe!",
      price: "997 EUR",
    },
    {
      title: "Close-Up Magic & Stage Show",
      duration: "120 min",
      description:
        "Wandering close-up magic in tables e.g. in a wedding. The evening will culminate to an astonishing stage show that will leave you and your friends in awe!",
      price: "1300 EUR",
    },
    {
      title: "Magic Lecture",
      duration: "180 min",
      description:
        "Perfect for your company retreat. I will give an hour lecture talking and teaching about the basics of magic[^3^][3]. After the lecture we will together practice couple of different card tricks that are easy to perform but are still super powerful.",
      price: "2000 EUR",
    },
  ]
  return (
    <section className="pb-32 pt-24">
      <h2 className="mb-20 text-center text-4xl font-bold">Services</h2>
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="place-items-center items-stretch space-y-8 sm:gap-6 lg:grid lg:grid-cols-2 lg:space-y-0 xl:gap-10">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = (data: ServiceType) => {
  const { title, duration, price, description } = data
  return (
    <>
      <div className="flex max-w-lg flex-col rounded-lg border border-gray-600 bg-neutral-800 text-center text-white shadow sm:mx-auto lg:mx-1 xl:p-8">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="text-xl font-light text-gray-400">{duration}</p>
        <p className="mt-4 text-xl">{description}</p>
        <div className="my-8 flex justify-center">
          <span className="mr-2 text-5xl font-extrabold">{price}</span>
        </div>
      </div>
    </>
  )
}
