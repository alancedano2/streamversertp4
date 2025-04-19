import Link from 'next/link';
import events from '../public/events.json';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <header className="p-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-3xl font-bold text-red-600">StreamVerseTP4</h1>
        <input
          type="text"
          placeholder="Buscar eventos..."
          className="bg-gray-900 text-white px-3 py-1 rounded focus:outline-none"
        />
      </header>
      <main className="p-6">
        <section>
          <h2 className="text-2xl mb-4">En vivo ahora</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {events.map(event => (
              <Link key={event.id} href={`/watch?stream=${event.id}`}>
                <a className="block bg-gray-900 rounded-lg overflow-hidden hover:opacity-90 transition">
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-2">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
