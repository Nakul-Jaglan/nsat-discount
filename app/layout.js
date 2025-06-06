import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nsat.nakul.click/"),
  title: {
    default: "Save ₹300 on NSAT Exam Fee | Newton School Admission Test Discount",
    template: "%s | NSAT Discount",
  },
  description:
    "Register for NSAT using our referral link and pay just ₹900 instead of ₹1200. Get instant ₹300 discount on Newton School Admission Test.",
  keywords: ["NSAT", "Newton School", "Admission Test", "Discount", "Programming Course", "Tech Education"],
  authors: [{ name: "NSAT Discount Team" }],
  creator: "NSAT Discount Team",
  publisher: "NSAT Discount",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nsat.nakul.click/",
    siteName: "NSAT Discount Offer",
    title: "Save ₹300 on NSAT Exam Fee | Newton School Admission Test Discount",
    description:
      "Register for NSAT using our referral link and pay just ₹900 instead of ₹1200. Get instant ₹300 discount on Newton School Admission Test.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 800,
        alt: "NSAT Discount Offer - Save ₹300",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Save ₹300 on NSAT Exam Fee | Newton School Admission Test Discount",
    description:
      "Register for NSAT using our referral link and pay just ₹900 instead of ₹1200. Get instant ₹300 discount on Newton School Admission Test.",
    images: "/og-image.jpg",
    creator: "@Nakul_Jaglan",
    site: "@Nakul_Jaglan",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://nsat.nakul.click/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="NSAT" />

        {/* <title>Save ₹300 on NSAT Exam Fee | Newton School Admission Test Discount</title> */}
        <meta name="description" content="Register for NSAT using our referral link and pay just ₹900 instead of ₹1200. Get instant ₹300 discount on Newton School Admission Test." />

        <meta property="og:url" content="https://nsat.nakul.click"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Save ₹300 on NSAT Exam Fee | Newton School Admission Test Discount"/>
        <meta property="og:description" content="Register for NSAT using our referral link and pay just ₹900 instead of ₹1200. Get instant ₹300 discount on Newton School Admission Test."/>
        <meta property="og:image" content="https://nsat.nakul.click/og-image.jpg"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="nsat.nakul.click"/>
        <meta property="twitter:url" content="https://nsat.nakul.click"/>
        <meta name="twitter:title" content="Save ₹300 on NSAT Exam Fee | Newton School Admission Test Discount"/>
        <meta name="twitter:description" content="Register for NSAT using our referral link and pay just ₹900 instead of ₹1200. Get instant ₹300 discount on Newton School Admission Test."/>
        <meta name="twitter:image" content="https://nsat.nakul.click/og-image.jpg"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
