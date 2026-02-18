import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our School | Blue Skies School East Champaran",
  description:
    "Learn about Blue Skies School, a CBSE curriculum school in East Champaran,Pipra,Motihari offering education from Nursery to Class VIII.",
  alternates: {
    canonical: "https://www.blueskiesschool.in/our-school",
  },
};


export default function OurSchoolPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Our School</h1>

      <p className="text-gray-700 mb-4">
        <strong>Blue Skies School</strong> is a CBSE curriculum school located at
        Pipra Purani Chowk (College Road), East Champaran, Bihar. We are committed
        to providing quality education in a safe, disciplined, and nurturing
        environment.
      </p>

      <p className="text-gray-700 mb-4">
        The school offers education from <strong>Nursery to Class VIII</strong>,
        focusing on academic excellence along with character building, discipline,
        and life skills.
      </p>

      <p className="text-gray-700">
        Our experienced teachers and child-friendly campus help students grow
        academically, socially, and morally.
      </p>
    </div>
  );
}
