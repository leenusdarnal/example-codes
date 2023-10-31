type faqType = {
  question: string
  answer: string
}
export default function Faq() {
  const faqs = [
    {
      question: "What kind of magic you do?",
      answer: "Anywhere from stage magic to close-up magic.",
    },
    {
      question: "How can I book you?",
      answer:
        "Best way is by email. Check out the 'Get in touch' section for more info.",
    },
    {
      question: "What languages do you perform in?",
      answer: "English or Finnish.",
    },
    {
      question: "Do you do card tricks?",
      answer: "Yes. Card tricks are one of my favourite form of magic.",
    },
  ]
  return (
    <section className="bg-zinc-950 px-52 pb-36 pt-20">
      <h2 className="mb-20 text-center text-4xl font-bold">FAQ</h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {faqs.map((f) => (
          <FaqCard key={f.question} {...f} />
        ))}
      </div>
    </section>
  )
}
const FaqCard = (data: faqType) => {
  const { answer, question } = data
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-neutral-800 px-5 py-5">
        <h3 className="pb-2 text-2xl text-gray-400">{question}</h3>
        <p className="text-xl leading-normal">{answer}</p>
      </div>
    </div>
  )
}
