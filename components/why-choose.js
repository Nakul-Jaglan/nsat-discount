import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Target, Users, Award, Code, TrendingUp } from "lucide-react"

export default function WhyChoose() {
  const features = [
    {
      icon: Code,
      title: "Cutting-edge Curriculum",
      description: "Learn the latest technologies and frameworks used by top tech companies",
      color: "text-blue-400",
    },
    {
      icon: Rocket,
      title: "Real-world Projects",
      description: "Build production-ready applications and gain hands-on experience",
      color: "text-green-400",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from industry veterans with years of experience at top companies",
      color: "text-purple-400",
    },
    {
      icon: Target,
      title: "Placement Support",
      description: "Dedicated career services with 93%+ placement rate in top companies",
      color: "text-yellow-400",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certificates and credentials recognized by leading tech employers",
      color: "text-red-400",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Average 300% salary increase for Newton School graduates within 2 years",
      color: "text-cyan-400",
    },
  ]

  return (
    <section id="why-nst" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Choose <span className="text-blue-400">Newton School of Technology</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful graduates who transformed their careers with our industry-leading technology
            education program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-gray-700 border-gray-600 hover:bg-gray-650 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-gray-500 transition-colors">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Career?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't miss this limited-time opportunity to save ₹300 on your NSAT exam fee. Start your journey towards a
            successful tech career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-sm text-gray-400">
              ⏰ Limited time offer &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; 🎯 Instant discount &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; 🚀 Career transformation
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
