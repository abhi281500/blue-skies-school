export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-gray-100 p-6 rounded shadow relative z-10">
          <p className="mb-2 font-semibold text-lg">Blue Skies School</p>
          <p>Pipra Purani Chowk (College Road)</p>
          <p>East Champaran – 845416</p>

          <p className="mt-4">
            📞{" "}
            <a
              href="tel:+918882165021"
              className="text-blue-600 underline cursor-pointer"
            >
              8882165021
            </a>
            ,{" "}
            <a
              href="tel:+918448606683"
              className="text-blue-600 underline cursor-pointer"
            >
              8448606683
            </a>
          </p>

          <p className="mt-2">
            📧{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=blue_skies@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline cursor-pointer"
            >
              schoolblueskies@gmail.com
            </a>
          </p>

        </div>

        {/* Map placeholder (NON-BLOCKING) */}
        <div className="bg-gray-200 rounded flex items-center justify-center h-64 pointer-events-none">
          <p className="text-gray-600 text-sm">
            Google Map will appear here
          </p>
        </div>
      </div>
    </div>
  );
}
