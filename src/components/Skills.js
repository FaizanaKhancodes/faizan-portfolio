const skills = [
  "C",
  "C++",
  "Python",
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "React",
  "SQL",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-8 text-blue-400">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-700 hover:bg-gray-600 rounded-lg py-3 font-medium transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
