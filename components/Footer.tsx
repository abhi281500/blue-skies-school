export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <p className="font-medium">
        © {new Date().getFullYear()} Blue Skies School. All rights reserved.
      </p>

      <p className="text-sm mt-2">
        📍 Pipra Purani Chowk (College Road), East Champaran, Bihar – 845416
      </p>

      <p className="text-sm mt-1">
        📞{" "}
        <a
          href="tel:+918882165021"
          className="underline hover:text-blue-300"
        >
          +91 8882165021
        </a>{" "}
        |{" "}
        <a
          href="tel:+918448606683"
          className="underline hover:text-blue-300"
        >
          +91 8448606683
        </a>
      </p>

      <p className="text-sm mt-1">
        ✉️{" "}
        <a
          href="mailto:schoolblueskies@gmail.com"
          className="underline hover:text-blue-300"
        >
          schoolblueskies@gmail.com
        </a>
      </p>

      {/* 🔥 Footer Local SEO Reinforcement */}
      <p className="sr-only">
        Blue Skies School is a CBSE curriculum school in East Champaran, Bihar,
        offering education from Nursery to Class VIII.
      </p>
    </footer>
  );
}
