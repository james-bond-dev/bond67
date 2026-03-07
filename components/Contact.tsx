export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-semibold mb-10">
          Connect
        </h2>

        <p className="text-gray-300 mb-10 text-lg">
          If you are interested in collaboration, opportunities, or
          discussing system architecture and engineering projects,
          feel free to reach out.
        </p>

        <div className="flex justify-center gap-8 text-blue-400 text-lg">
          <a href="http://www.linkedin.com/in/jim-bond-0b66391b6">LinkedIn</a>
          <a href="https://github.com/james-bond-dev">GitHub</a>
          <a href="mailto:James@Bond67.com">Email</a>
        </div>

      </div>
    </section>
  )
}