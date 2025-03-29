import Link from "next/link";

export default function Blog() {
  return (
    <div className="container mx-auto p-6">
      <header>
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg mb-6">
          Welcome to my blog! Here, I share articles on web development, technology, and more.
        </p>
        <ul className="space-y-4">
          <li>
            <Link href="/blog/post1">
              <a className="text-blue-500 hover:text-blue-700">How to Build a Portfolio with Next.js</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/post2">
              <a className="text-blue-500 hover:text-blue-700">Understanding React Hooks</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/post3">
              <a className="text-blue-500 hover:text-blue-700">Getting Started with Tailwind CSS</a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
