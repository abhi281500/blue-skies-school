const galleryItems = [
  "School Campus",
  "Classrooms",
  "Students Activities",
  "Playground",
  "Annual Function",
  "Sports Day",
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((title, index) => (
          <div
            key={index}
            className="bg-gray-200 h-48 rounded flex items-center justify-center text-gray-600 font-medium"
          >
            {title}
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-400 mt-6">
        *Photos will be updated soon
      </p>
    </div>
  );
}
