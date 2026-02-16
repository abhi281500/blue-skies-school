import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-blue-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile par flex-col (vertical) aur desktop par grid-cols-3 (horizontal) */}
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-8">

          {/* LEFT IMAGE - Mobile par top par dikhegi */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-[200px] h-[280px] md:w-[260px] md:h-[360px]">
              <Image
                src="/images/gallery/student-girl-1.jpg.png"
                alt="Blue Skies School Student Girl"
                fill
                className="rounded-xl shadow-lg object-cover"
                priority
              />
            </div>
          </div>

          {/* CENTER CONTENT - Sabse important mobile ke liye */}
          <div className="text-center order-1 md:order-2">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs md:text-sm font-medium mb-4">
              Admissions Open 2026–27
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
              Blue Skies School
            </h1>

            <p className="text-base md:text-xl text-gray-700 mb-2 font-medium">
              CBSE Curriculum • Nursery to Class VIII
            </p>

            <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm md:text-base px-4">
              A safe, disciplined and nurturing environment focused on academic
              excellence and overall development of children.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0">
              <a
                href="tel:+918882165021"
                className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 shadow-md transition-all active:scale-95 text-center"
              >
                📞 Call for Admission
              </a>

              <a
                href="/admission"
                className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-700 hover:text-white transition-all active:scale-95 text-center"
              >
                Apply for Admission
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE - Mobile par bottom par dikhegi */}
          <div className="flex justify-center order-3">
            <div className="relative w-[200px] h-[280px] md:w-[260px] md:h-[360px]">
              <Image
                src="/images/gallery/student-boy-1.jpg.png"
                alt="Blue Skies School Student Boy"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}