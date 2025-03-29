export default function About() {
    return (
      <div className="container mx-auto p-6">
        <header>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            I'm a web developer with a passion for creating functional and beautiful web applications.
          </p>
          <h2 className="text-2xl font-semibold mb-2">My Journey</h2>
          <p className="text-lg mb-4">
            I've been working in web development for over [X] years. I specialize in front-end technologies
            like React, Next.js, and Tailwind CSS. I also enjoy exploring back-end technologies like Node.js and
            databases.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>JavaScript, TypeScript</li>
            <li>React, Next.js</li>
            <li>Tailwind CSS, CSS-in-JS</li>
            <li>Node.js, Express</li>
            <li>GraphQL</li>
          </ul>
        </header>
      </div>
    );
  }
  