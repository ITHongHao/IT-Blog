import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header>
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-center mb-4">
          Hi, I'm Ivan Tang, a passionate web developer and tech enthusiast.
        </p>
        <p className="text-lg text-center mb-6">
          Explore my blog, portfolio, and more through the links above.
        </p>
        <div className="text-center">
          <Link href="/about">
            <a className="text-blue-500 hover:text-blue-700">Learn more about me</a>
          </Link>
        </div>
      </header>
    </div>
  );
}
