import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>hi</h1>
  <nav>
      <Link href="/">Home</Link>{" "}
      <Link className="rounded bg-blue-600 px-4 py-2 text-white" href="/About">About</Link>{" "}
      <Link className="rounded bg-blue-600 px-4 py-2 text-white" href="/Contact">Contact</Link>
    </nav> 
    </div>
  );
}
