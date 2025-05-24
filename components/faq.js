import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What is NSAT?",
      answer:
        "NSAT (Newton School Admission Test) is a comprehensive assessment designed to evaluate candidates for admission into Newton School of Technology's programs. It tests programming aptitude, logical reasoning, and problem-solving skills to identify passionate learners ready for a career transformation in technology.",
    },
    {
      question: "How do I get the ₹300 discount?",
      answer:
        "Simply click on our referral link, complete the NSAT registration form, and the ₹300 discount will be automatically applied. You'll pay just ₹900 instead of the regular ₹1200 fee. No promo codes or additional steps required - the discount is instant!",
    },
    {
      question: "Is this discount offer official?",
      answer:
        "This is a legitimate referral discount program. While this specific promotion is run independently, the discount is genuine and will be honored by Newton School. The referral link directs you to the official Newton School registration portal where the discounted fee will be applied.",
    },
    {
      question: "Who is eligible for NSAT?",
      answer:
        "To be eligible for NSAT, you must have completed or be appearing for Class 12 with Physics, Chemistry, and Mathematics (PCM) from a recognized board in 2024 or 2025, and have scored more than 50% overall and in PCM subjects in your board exams.",
    },
    {
      question: "What happens after I register?",
      answer:
        "After registration, you'll receive confirmation details and test instructions via email. The NSAT can be taken online at your convenience. Based on your performance, you'll be eligible for admission to NST's programs with potential additional scholarships.",
    },
    {
      question: "Is there a time limit for this offer?",
      answer:
        "This is a limited-time promotional offer. We recommend registering as soon as possible to secure your ₹300 discount. The offer is subject to availability and may be withdrawn without prior notice.",
    },
  ]

  return (
    <section id="faqs" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Got questions? We've got answers. Find everything you need to know about the NSAT discount offer.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-800 border border-gray-700 rounded-lg px-0 data-[state=open]:bg-gray-750"
            >
              <AccordionTrigger className="w-full flex items-stretch text-left text-white hover:text-green-400 transition-colors py-6 px-6 rounded-lg focus:outline-none">
                <span className="font-semibold w-full block text-xl">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 px-6 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a href="mailto:jaglan.nakul@gmail.com" className="text-gray-300 hover:text-white font-medium transition-colors">
            Contact us at <span className="text-green-400 hover:text-green-300">jaglan.nakul@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}
