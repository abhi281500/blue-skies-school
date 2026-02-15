import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between">

      <h1 className="text-xl font-bold">Blue Skies School</h1>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/admission" className="hover:underline">Admission</Link>
        <Link href="/gallery" className="hover:underline">Gallery</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
