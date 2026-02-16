import Image from 'next/image';

export const metadata = {
  title: "Principal’s Message | Blue Skies School",
  description: "Message from the Principal of Blue Skies School, East Champaran.",
};

export default function PrincipalMessagePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* Left Side: The Message */}
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-6 relative">
            Principal&apos;s Message
            <span className="block w-20 h-1 bg-blue-500 mt-2"></span>
          </h1>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              At <strong className="text-blue-800">Blue Skies School</strong>, we believe that every child is
              unique and capable of achieving excellence when guided with care and
              dedication.
            </p>

            <p>
              Our focus is on academic excellence along with discipline, values, and
              overall personality development. We aim to create confident learners and
              responsible citizens.
            </p>

            <div className="pt-4 border-l-4 border-blue-100 pl-4 italic text-gray-600">
               <p>&ldquo;Empowering minds, touching lives.&rdquo;</p>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Card */}
        <div className="w-full md:w-80 shrink-0">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="relative h-80 w-full">
              <Image 
                src="/images/gallery/Principal.jpeg"
                alt="Arvind Kumar - Principal" 
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            <div className="p-6 bg-gradient-to-bold from-white to-blue-50">
              <h3 className="text-xl font-bold text-gray-900">Arvind Kumar</h3>
              <p className="text-blue-600 font-medium mb-3 text-sm">Principal, CTET & STET Qualified</p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded">CTET</span>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">STET</span>
                <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-1 rounded">EDUCATIONIST</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}