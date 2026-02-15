import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">

          {/* LEFT IMAGE */}
          <div className="hidden md:flex justify-center">
            <Image
              src="/images/gallery/student-girl-1.jpg.png"
              alt="Blue Skies School Student Girl"
              width={260}
              height={360}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="text-center">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Admissions Open 2026–27
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
              Blue Skies School
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-2">
              CBSE Curriculum • Nursery to Class VIII
            </p>

            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              A safe, disciplined and nurturing environment focused on academic
              excellence and overall development of children.
            </p>

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

          {/* RIGHT IMAGE */}
          <div className="hidden md:flex justify-center">
            <Image
              src="/images/gallery/student-boy-1.jpg.png"
              alt="Blue Skies School Student Boy"
              width={260}
              height={360}
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
