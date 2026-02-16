import Image from "next/image";

export const metadata = {
  title: "Chairman's Message | Blue Skies School",
};

export default function ChairmanPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
        <div className="w-full md:w-5/12">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100">
            <Image 
              src="/images/gallery/Chairman.png" // File name check kar lena
              alt="Er. Sohit Raj - Chairman"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-blue-900">Er. Sohit Raj</h2>
            <p className="text-blue-600 font-medium">Chairman, Blue Skies School</p>
          </div>
        </div>

        <div className="w-full md:w-7/12">
          <h1 className="text-4xl font-black text-blue-900 mb-6 uppercase tracking-tight">
            Chairman&apos;s Message
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              Education is the most powerful weapon which you can use to change the world. At <strong>Blue Skies School</strong>, our goal is to provide world-class education that is accessible to every child in East Champaran.
            </p>
            <p>
              We are committed to building an institution where technology meets values, and where every student is encouraged to think beyond the ordinary.
            </p>
            <div className="p-6 bg-blue-50 rounded-xl border-l-8 border-blue-700 italic">
              &ldquo;Our vision is to create leaders of tomorrow who are grounded in discipline and driven by innovation.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}