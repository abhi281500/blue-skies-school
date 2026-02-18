import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission | Blue Skies School East Champaran",
  description:
    "Vision and Mission of Blue Skies School, East Champaran ,Pipra ,Motihari– committed to quality CBSE education and holistic development.",
  alternates: {
    canonical: "https://www.blueskiesschool.in/vision-mission",
  },
};


export default function VisionMissionPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Vision & Mission</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
        <p className="text-gray-700">
          To build a strong educational foundation by nurturing discipline,
          moral values, curiosity, creativity, and confidence among students.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Provide quality CBSE-based education</li>
          <li>Encourage discipline, ethics, and moral values</li>
          <li>Focus on holistic development of every child</li>
          <li>Create a safe and supportive learning environment</li>
          <li>Maintain strong parent-teacher collaboration</li>
        </ul>
      </div>

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "School",
      name: "Blue Skies School",
      url: "https://www.blueskiesschool.in/vision-mission",
      description:
        "Vision and Mission of Blue Skies School, a CBSE curriculum school in East Champaran focused on holistic development.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pipra Purani Chowk (College Road)",
        addressLocality: "East Champaran",
        addressRegion: "Bihar",
        postalCode: "845416",
        addressCountry: "IN",
      },
      areaServed: "East Champaran",
    }),
  }}
/>





    </div>
  );
}
