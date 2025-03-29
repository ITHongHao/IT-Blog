export default function Contact() {
    return (
      <div className="container mx-auto p-6">
        <header>
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-lg mb-4">
            Feel free to reach out to me through any of the following methods.
          </p>
          <ul className="list-disc pl-6">
            <li>Email: <a href="mailto:your-email@example.com" className="text-blue-500 hover:text-blue-700">your-email@example.com</a></li>
            <li>Twitter: <a href="https://twitter.com/yourhandle" className="text-blue-500 hover:text-blue-700">@yourhandle</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:text-blue-700">yourprofile</a></li>
          </ul>
        </header>
      </div>
    );
  }
  