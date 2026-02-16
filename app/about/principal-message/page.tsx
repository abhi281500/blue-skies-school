export const metadata = {
  title: "Principal’s Message | Blue Skies School",
  description:
    "Message from the Principal of Blue Skies School, East Champaran.",
};

export default function PrincipalMessagePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Principal’s Message</h1>

      <p className="text-gray-700 mb-4">
        At <strong>Blue Skies School</strong>, we believe that every child is
        unique and capable of achieving excellence when guided with care and
        dedication.
      </p>

      <p className="text-gray-700 mb-4">
        Our focus is on academic excellence along with discipline, values, and
        overall personality development. We aim to create confident learners and
        responsible citizens.
      </p>

      <p className="text-gray-700">
        I welcome parents and students to be a part of the Blue Skies School
        family and join us in shaping a bright future.
      </p>
    </div>
  );
}
