import Image from "next/image";

export const metadata = {
  title: "Director's Desk | Blue Skies School",
};

export default function DirectorPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-5/12">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-green-100">
            <Image 
              src="/images/gallery/Director.png" // File name check kar lena
              alt="Umakant Yadav - Director"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Umakant Yadav</h2>
            <p className="text-green-600 font-medium">Director / CA</p>
          </div>
        </div>

        <div className="w-full md:w-7/12">
          <h1 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            From the Director&apos;s Desk
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Managing a school is about managing the future. We ensure that every resource at <strong>Blue Skies School</strong>—from our labs to our playground—is optimized for student growth.
            </p>
            <p>
              Our focus remains on transparency, quality, and a safe learning environment for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}