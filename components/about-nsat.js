import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Zap } from "lucide-react"

export default function AboutNSAT() {
  return (
    <section id="about-nsat" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About <span className="text-blue-400">NSAT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Newton School Admission Test (NSAT) is your first step toward joining an advanced, industry-driven technology program at Newton School of Technology. With a rigorous selection process, robust scholarships, and strong placement support, NSAT opens doors for ambitious students eager to shape the future of tech in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Test</h3>
              <p className="text-gray-300 text-sm">Evaluates programming aptitude and logical reasoning</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Industry Relevant</h3>
              <p className="text-gray-300 text-sm">Designed by industry experts and educators</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Career Gateway</h3>
              <p className="text-gray-300 text-sm">Opens doors to high-paying tech careers</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors">
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Fast Track</h3>
              <p className="text-gray-300 text-sm">Accelerated learning with practical projects</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Why Newton School of Technology?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Industry-aligned curriculum designed with top tech companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Hands-on learning with real-world projects and case studies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dedicated placement support with 93%+ placement rate</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expert mentorship from industry professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Focus on both technical and soft skills for holistic development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strong alumni network in top tech companies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
