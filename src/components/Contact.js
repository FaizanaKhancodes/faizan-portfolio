export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Get In Touch</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out if you'd like to collaborate, discuss ideas, or just say hi!
      </p>
      <div className="space-y-2">
        <a
          href="mailto:faizaniclouds@gmail.com"
          className="block text-blue-400 hover:underline"
        >
          faizaniclouds@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/faizan-khan-8b445522b"
          target="_blank"
          rel="noreferrer"
          className="block text-blue-400 hover:underline"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
}
