

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-blue-600">Blue Skies School</div>
          <ul className="flex space-x-6">
            
            
            {/* Dropdown Menu */}
            <li className="relative group">
              <span className="cursor-pointer font-medium hover:text-blue-500">
                About <span className="text-xs">▼</span>
              </span>

              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-0 py-2 rounded w-56 border border-gray-100 z-10">
                <li><a href="/about/our-school" className="block px-4 py-2 hover:bg-gray-100">Our School</a></li>
                <li><a href="/about/vision-mission" className="block px-4 py-2 hover:bg-gray-100">Vision & Mission</a></li>
                <li><a href="/about/principal-message" className="block px-4 py-2 hover:bg-gray-100">Principal’s Message</a></li>
                <li><a href="/about/management" className="block px-4 py-2 hover:bg-gray-100">Management</a></li>
                <li><a href="/about/mandatory-disclosure" className="block px-4 py-2 hover:bg-gray-100">Mandatory Public Disclosure</a></li>
              </ul>
            </li>

          
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-10 bg-white mt-6 rounded-lg shadow-sm">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold mb-6 text-blue-900 border-b pb-4">
          About Blue Skies School, East Champaran
        </h1>

        {/* Intro */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-blue-800">Blue Skies School</strong> is a reputed CBSE curriculum
            school located at Pipra Purani Chowk (College Road),
            East Champaran, Bihar. The school is dedicated to providing
            quality education in a safe, disciplined, and caring environment
            where students are encouraged to grow academically, socially,
            and morally.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We believe that education is not limited to textbooks. At Blue
            Skies School, equal importance is given to character building,
            confidence development, and life skills along with academic
            excellence.
          </p>
        </div>

        <hr className="my-8" />

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-5 p-6 rounded-lg border-l-4 border-blue-500 bg-blue-50">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">Our Vision</h2>
            <p className="text-gray-700">
              Our vision is to build a strong educational foundation for
              children by nurturing discipline, moral values, curiosity,
              and creativity.
            </p>
          </div>

          <div className="bg-green-5 p-6 rounded-lg border-l-4 border-green-500 bg-green-50">
            <h2 className="text-xl font-semibold mb-2 text-green-800">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to deliver holistic education through
              experienced teachers, modern teaching methods, and a
              child-friendly learning environment.
            </p>
          </div>
        </div>

        {/* Classes & Facilities */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Classes Offered</h2>
            <p className="text-gray-700">
              Blue Skies School offers quality education from{" "}
              <strong className="text-blue-700">Nursery to Class VIII</strong>, ensuring age-appropriate
              learning and personal care.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Our Facilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Qualified teaching staff</li>
              <li>Well-ventilated classrooms</li>
              <li>CBSE-aligned curriculum</li>
              <li>Playground & Sports activities</li>
              <li>Safe & Clean campus</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Why Choose Blue Skies School?
          </h2>
          <p className="text-gray-700">
            Parents choose Blue Skies School for its balanced approach to
            education. We focus on academic performance, discipline, and
            overall personality development.
          </p>
        </div>

        {/* Closing */}
        <p className="text-center text-gray-600 italic border-t pt-6">
          If you are looking for a trusted CBSE school in East Champaran, 
          <span className="font-bold text-blue-800"> Blue Skies School</span> is the right choice for your child.
        </p>
      </div>
    </div>
  );
}