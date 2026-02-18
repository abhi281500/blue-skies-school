import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Blue Skies School | CBSE School in East Champaran",
  description:
    "Contact Blue Skies School, a CBSE curriculum school near Pipra Purani Chowk, East Champaran. Call for admissions and enquiries.",
  alternates: {
    canonical: "https://www.blueskiesschool.in/contact",
  },
};



export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Blue Skies School 
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <p className="mb-2 font-semibold text-lg">Blue Skies School</p>
          <p>Pipra Purani Chowk (College Road)</p>
          <p>East Champaran – 845416</p>

          <p className="mt-4">
            📞{" "}
            <a href="tel:+918882165021" className="text-blue-600 underline">
              8882165021
            </a>
            ,{" "}
            <a href="tel:+918448606683" className="text-blue-600 underline">
              8448606683
            </a>
          </p>

          <p className="mt-2">
            📧{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=schoolblueskies@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              schoolblueskies@gmail.com
            </a>
          </p>

          <p className="text-sm text-gray-600 mt-2">
            📍 <strong>Nearby Landmark:</strong> Manokamna Library (School is just opposite)
          </p>
        </div>

        {/* Google Map */}
        <div className="rounded overflow-hidden shadow h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.860584256773!2d84.98348087488054!3d26.492433378026515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee4f005f9a739f%3A0x85812d02fac286ee!2sMANOKAMNA%20LIBRARY!5e0!3m2!1sen!2sin!4v1771390107977!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* 🔥 LOCAL BUSINESS / SCHOOL SCHEMA (VERY IMPORTANT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            name: "Blue Skies School",
            url: "https://www.blueskiesschool.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Pipra Purani Chowk (College Road)",
              addressLocality: "East Champaran",
              addressRegion: "Bihar",
              postalCode: "845416",
              addressCountry: "IN",
            },
            telephone: ["+91-8882165021", "+91-8448606683"],
            email: "schoolblueskies@gmail.com",
            areaServed: "East Champaran",
            sameAs: [
              "https://www.google.com/maps/place/MANOKAMNA+LIBRARY",
            ],
          }),
        }}
      />
    </div>
  );
}

