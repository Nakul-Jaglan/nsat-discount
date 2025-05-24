import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Out on This <span className="text-green-400">Limited Offer</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Save ₹300 on your NSAT exam fee and take the first step towards your dream tech career
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            asChild
          >
            <a href="https://www.newtonschool.co/newton-school-of-technology-nst/apply-referral/?utm_source=referral&utm_medium=jaat&utm_campaign=btech-computer-science-portal-referral" target="_blank" rel="noopener noreferrer">
              Register Now & Save ₹300
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div className="flex flex-col items-center ">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:jaglan.nakul@gmail.com" className="hover:text-white transition-colors">
                    jaglan.nakul@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 justify-center">
                <a href="https://x.com/Nakul_Jaglan" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/nakuljaglan/" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/nakul.nst/" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <div>
                  <a href="#about-nsat" className="hover:text-white transition-colors">
                    About NSAT
                  </a>
                </div>
                <div>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </div>
                <div>
                  <a href="#faqs" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="mb-2">© {new Date().getFullYear()} NSAT Discount Offer. All rights reserved.</p>
            <p className="text-sm">
              <strong>Disclaimer:</strong> This is an independent promotion and not an official page of Newton School.
              The discount offer is legitimate and will be honored through our referral partnership.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
