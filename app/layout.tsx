import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Skies School | CBSE School in East Champaran",
  description:
    "Blue Skies School is a CBSE curriculum school in East Champaran offering quality education from Nursery to Class VIII. Admissions Open 2026–27.",
  verification: {
    google: "WijdLBAPpZhg8MHt-IiJYZQD91QcaQpm1l_TjF9IM8c",
  },
  keywords: [
    "Blue Skies School",
    "CBSE School in East Champaran",
    "Best School in Motihari",
    "School Near Pipra Purani Chowk",
    "Primary School East Champaran",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow px-4 sm:px-6 py-6">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Enquiry ChatBot */}
        <ChatBot />
      </body>
    </html>
  );
}
