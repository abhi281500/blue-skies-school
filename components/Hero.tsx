export default function Hero() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
          Admissions Open 2026–27
        </span>

        {/* School Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Blue Skies School
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-700 mb-2">
          CBSE Curriculum • Nursery to Class VIII
        </p>

        {/* Sub text */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          A safe, disciplined and nurturing environment focused on academic
          excellence and overall development of children.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+918882165021"
            className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800"
          >
            📞 Call for Admission
          </a>

          <a
            href="/admission"
            className="border border-blue-700 text-blue-700 px-6 py-3 rounded hover:bg-blue-700 hover:text-white"
          >
            Apply for Admission
          </a>
        </div>
      </div>
    </section>
  );
}
