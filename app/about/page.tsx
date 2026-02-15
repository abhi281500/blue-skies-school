export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        About Blue Skies School
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        Blue Skies School is committed to providing quality education
        in a safe, disciplined, and nurturing environment. The school
        follows the CBSE curriculum and focuses on the overall
        development of every child.
      </p>

      {/* Vision */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
        <p className="text-gray-700">
          Our vision is to create a strong educational foundation by
          encouraging academic excellence, moral values, discipline,
          and confidence among students so that they become responsible
          and successful individuals.
        </p>
      </div>

      {/* Classes */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Classes Offered</h2>
        <p className="text-gray-700">
          The school offers education from <b>Nursery to Class VIII</b>,
          ensuring proper care and guidance at every stage of learning.
        </p>
      </div>

      {/* Facilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Facilities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Qualified and experienced teachers</li>
          <li>Spacious and well-ventilated classrooms</li>
          <li>Focus on discipline and moral values</li>
          <li>Playground and sports activities</li>
          <li>Safe and child-friendly environment</li>
          <li>Regular parent-teacher interaction</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Why Choose Blue Skies School?
        </h2>
        <p className="text-gray-700">
          Blue Skies School believes that every child is unique. We aim
          to nurture students academically, socially, and emotionally
          by providing individual attention and a supportive learning
          atmosphere.
        </p>
      </div>
    </div>
  );
}
