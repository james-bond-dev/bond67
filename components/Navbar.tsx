export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">

        <div className="text-xl font-semibold tracking-wide">
          Bond67
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#work" className="hover:text-blue-400">Work</a>
          <a href="#approach" className="hover:text-blue-400">Approach</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

      </div>
    </nav>
  )
}