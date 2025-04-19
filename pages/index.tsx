import Link from "next/link";
import events from "../public/events.json";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-6">StreamVerse TP4 Live</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {events.map((event) => (
          <Link key={event.id} href={`/watch/${event.id}`}>
            <div className="cursor-pointer hover:scale-105 transition">
              <img src={event.thumbnail} alt={event.title} className="rounded-lg" />
              <h2 className="text-lg mt-2">{event.title}</h2>
              <p className="text-sm text-gray-400">{event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}