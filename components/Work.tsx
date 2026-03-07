export default function Work() {
  return (
    <section id="work" className="bg-zinc-900 text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-semibold mb-16">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-black p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-semibold mb-4">
              National Parks Platform
            </h3>

            <p className="text-gray-400 mb-6">
              Full-stack application using PostgreSQL and Prisma to manage
              structured national park datasets with dynamic routing and
              real-time search.
            </p>

            <p className="text-sm text-gray-500">
              Next.js · TypeScript · Prisma · PostgreSQL
            </p>
          </div>

          <div className="bg-black p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-semibold mb-4">
              Expense Tracker API
            </h3>

            <p className="text-gray-400 mb-6">
              Backend financial tracking API supporting authentication,
              account management, and transaction categorization with
              production-ready architecture.
            </p>

            <p className="text-sm text-gray-500">
              Node.js · Prisma · REST API · PostgreSQL
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}