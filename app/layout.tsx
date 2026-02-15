import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
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
    "School Near  Pipra Purani Chown",
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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow px-6 py-6">
  {children}
</main>

        <Footer />
      </body>
    </html>
  );
}
