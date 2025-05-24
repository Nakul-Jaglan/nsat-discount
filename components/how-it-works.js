import { Card, CardContent } from "@/components/ui/card"
import { MousePointer, FileText, CreditCard } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: MousePointer,
      title: "Click the Referral Link",
      description: "Use our special referral link to access the discounted registration",
      color: "text-blue-400",
    },
    {
      icon: FileText,
      title: "Fill Out the Form",
      description: "Complete the NSAT registration form with your details",
      color: "text-green-400",
    },
    {
      icon: CreditCard,
      title: "Get ₹300 Off Instantly",
      description: "Pay just ₹900 instead of ₹1200 - discount applied automatically",
      color: "text-purple-400",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            How It <span className="text-green-400">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Getting your ₹300 discount is simple and takes just a few minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700"></div>
                    <div className="w-0 h-0 border-l-4 border-l-gray-600 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Discount applied automatically - no promo codes needed!
          </div>
        </div>
      </div>
    </section>
  )
}
