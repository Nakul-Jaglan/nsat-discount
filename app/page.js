import Hero from "@/components/hero"
import AboutNSAT from "@/components/about-nsat"
import HowItWorks from "@/components/how-it-works"
import WhyChoose from "@/components/why-choose"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Save ₹300 on NSAT Exam Fee | Newton School Admission Test Discount",
  description:
    "Register for NSAT using our referral link and pay just ₹900 instead of ₹1200. Get instant ₹300 discount on Newton School Admission Test.",
  keywords: "NSAT, Newton School, Admission Test, Discount, ₹300 off, Programming Course",
  openGraph: {
    title: "Save ₹300 on NSAT Exam Fee | Newton School Admission Test Discount",
    description:
      "Register for NSAT using our referral link and pay just ₹900 instead of ₹1200. Get instant ₹300 discount on Newton School Admission Test.",
    type: "website",
    url: "https://nsat-discount.example.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NSAT Discount Offer - Save ₹300",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Save ₹300 on NSAT Exam Fee",
    description: "Get instant ₹300 discount on Newton School Admission Test. Pay just ₹900 instead of ₹1200.",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Newton School Admission Test (NSAT)",
    description: "Admission test for Newton School of Technology with special discount offer",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: "https://nsat.example.com",
    },
    organizer: {
      "@type": "Organization",
      name: "Newton School of Technology",
      url: "https://newtonschool.co",
    },
    offers: {
      "@type": "Offer",
      name: "NSAT Exam Fee with Discount",
      price: "900",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "900",
        priceCurrency: "INR",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main className="min-h-screen bg-gray-900">
        <Hero />
        <AboutNSAT />
        <HowItWorks />
        <WhyChoose />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
