export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Orchestrating Complexity
          <br />
          Into Execution
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          I design and build full-stack systems that transform layered technical
          problems into clean, scalable, production-ready solutions.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg">
            What You Get
          </button>

          <button className="px-6 py-3 border border-white rounded-lg">
            Connect
          </button>
        </div>

      </div>

    </section>
  )
}