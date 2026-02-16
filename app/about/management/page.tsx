import Image from "next/image";

export const metadata = {
  title: "Management | Blue Skies School",
  description: "School management of Blue Skies School, East Champaran.",
};

export default function ManagementPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Our Management</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          The leadership at <span className="font-semibold text-blue-600">Blue Skies School</span> is
          dedicated to fostering an environment of excellence, innovation, and holistic development.
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">

        {/* Management Image Section */}
        <div className="w-full lg:w-5/12">
          <div className="relative group">
            {/* Decorative background element */}
            <div className="absolute -inset-1 bg-gradient-to-round from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
              <div className="relative h-[550px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/gallery/Management.jpeg"
                  alt="Shubham Kumar - School Management"
                  fill
                  style={{ objectFit: 'cover' }} // Inline style for better compatibility
                  className="transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="p-6 text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-900">Shubham Kumar</h2>
                <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Managing Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-7/12 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Visionary Leadership</h3>

          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              The management of <strong>Blue Skies School</strong> is committed to
              maintaining high standards of education, discipline, and student welfare.
              We believe that infrastructure and technology must go hand-in-hand with
              traditional values.
            </p>

            <p>
              With a student-centric approach, the management continuously works
              towards improving teaching quality and overall school development. Our
              primary goal is to provide an accessible yet world-class learning
              platform for the children of East Champaran.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-900 mb-1">Infrastructure</h4>
                <p className="text-sm text-gray-600">Continuous upgrades to smart classrooms and labs.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-900 mb-1">Student Welfare</h4>
                <p className="text-sm text-gray-600">Ensuring a safe, healthy, and nurturing environment.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}