export default function ProjectsPage() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-700 mb-8">Here are some things I've worked on:</p>
  
        <ul className="space-y-4">
          <li className="border p-4 rounded-md w-full max-w-xl shadow-sm">
            <h2 className="text-xl font-semibold">Project One</h2>
            <p className="text-gray-600">A cool app that does X, Y, and Z.</p>
          </li>
          <li className="border p-4 rounded-md w-full max-w-xl shadow-sm">
            <h2 className="text-xl font-semibold">Project Two</h2>
            <p className="text-gray-600">A tool for automating ABC workflows.</p>
          </li>
        </ul>
      </section>
    )
  }
  