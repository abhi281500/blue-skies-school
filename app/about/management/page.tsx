import Image from "next/image";

export const metadata = {
  title: "Management | Blue Skies School",
  description: "School management of Blue Skies School, East Champaran.",
};

const managers = [
  {
    name: "Er. Naytik Nayan",
    title: "Admissions & Outreach Manager",
    image: "/images/gallery/Marketing.png",
  },
  {
    name: "Shubham Kumar",
    title: "Operations & Marketing Manager",
    image: "/images/gallery/Management.jpeg",
  },
];

export default function ManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 bg-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Our Leadership Team
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Dedicated to fostering an environment of excellence, innovation, and holistic development at <span className="font-semibold text-blue-600">Blue Skies School</span>.
        </p>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Management Team Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {managers.map((manager, index) => (
            <div key={index} className="group relative">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={manager.image}
                    alt={`${manager.name} - ${manager.title}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index === 0}
                  />
                </div>
                <div className="p-5 text-center bg-white border-t border-gray-50">
                  <h3 className="text-xl font-bold text-gray-900">{manager.name}</h3>
                  <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mt-1">
                    {manager.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-800 leading-tight">
              Visionary Leadership for a Brighter Future
            </h3>
            <div className="w-12 h-1 bg-blue-500"></div>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed italic">
            <p>
              The management of <strong>Blue Skies School</strong> is committed to
              maintaining high standards of education, discipline, and student welfare.
              We believe that infrastructure and technology must go hand-in-hand with
              traditional values.
            </p>

            <p className="not-italic">
              With a student-centric approach, our leadership continuously works
              towards improving teaching quality and overall school development. Our
              primary goal is to provide an accessible yet world-class learning
              platform for the children of East Champaran.
            </p>
          </div>

          {/* Key Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border-l-4 border-blue-600 transition-colors hover:bg-blue-100">
              <div>
                <h4 className="font-bold text-blue-900 text-lg">Infrastructure</h4>
                <p className="text-sm text-gray-600 leading-snug mt-1">
                  Continuous upgrades to smart classrooms and specialized labs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border-l-4 border-blue-600 transition-colors hover:bg-blue-100">
              <div>
                <h4 className="font-bold text-blue-900 text-lg">Student Welfare</h4>
                <p className="text-sm text-gray-600 leading-snug mt-1">
                  Ensuring a safe, healthy, and nurturing environment for every learner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}