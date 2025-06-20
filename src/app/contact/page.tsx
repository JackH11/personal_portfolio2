export default function ContactPage() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Want to work together or just say hi? Send me a message!
        </p>
  
        <form className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border px-4 py-2 rounded-md"
          />
          <textarea
            placeholder="Your message"
            className="w-full border px-4 py-2 rounded-md min-h-[120px]"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </section>
    )
  }
  