import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Blue Skies School | CBSE School in East Champaran",
  description:
    "Blue Skies School is a CBSE curriculum school in East Champaran offering quality education from Nursery to Class VIII in a safe and disciplined environment.",
  alternates: {
    canonical: "https://www.blueskiesschool.in/about",
  },
};


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content Only – Navbar comes from layout.tsx */}
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Hero Section */}
          <div className="bg-blue-900 p-6 sm:p-10 text-white text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl font-extrabold mb-3 leading-tight">
              About Blue Skies School, East Champaran
            </h1>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
              Nurturing Excellence, Character, and Confidence
            </p>
          </div>

          <div className="p-5 sm:p-10 space-y-10">
            
            {/* Intro Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  <strong className="text-blue-800">
                    Blue Skies School
                  </strong>{" "}
                  is a reputed CBSE curriculum school located at Pipra
                  Purani Chowk, East Champaran, Bihar.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  We believe that education is not limited to textbooks.
                  Equal importance is given to discipline, moral values,
                  confidence building, and life skills along with
                  academic excellence.
                </p>
              </div>

              {/* Temporary Image Placeholder */}
              <div className="bg-gray-100 h-56 sm:h-64 rounded-xl flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-200 text-sm sm:text-base">
                School Campus / Student Activity Image
              </div>
            </section>

            {/* Vision & Mission */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl border-b-4 border-blue-500">
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-blue-900">
                  Our Vision
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  To build a strong educational foundation by nurturing
                  discipline, moral values, curiosity, and creativity in
                  every child.
                </p>
              </div>

              <div className="bg-green-50 p-6 sm:p-8 rounded-2xl border-b-4 border-green-500">
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-green-900">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  To deliver holistic education through experienced
                  teachers, modern teaching methods, and a safe,
                  child-friendly learning environment.
                </p>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-900 text-white rounded-2xl p-6 sm:p-10 text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Why Choose Blue Skies School?
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-blue-400 font-bold text-lg">
                    Nursery – VIII
                  </p>
                  <p className="text-xs text-gray-400 uppercase mt-1">
                    Classes
                  </p>
                </div>

                <div>
                  <p className="text-blue-400 font-bold text-lg">
                    CBSE Pattern
                  </p>
                  <p className="text-xs text-gray-400 uppercase mt-1">
                    Curriculum
                  </p>
                </div>

                <div>
                  <p className="text-blue-400 font-bold text-lg">
                    Qualified Staff
                  </p>
                  <p className="text-xs text-gray-400 uppercase mt-1">
                    Teachers
                  </p>
                </div>

                <div>
                  <p className="text-blue-400 font-bold text-lg">
                    Safe Campus
                  </p>
                  <p className="text-xs text-gray-400 uppercase mt-1">
                    Security
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
