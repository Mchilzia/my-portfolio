import { Layout } from "../components/layout"

export const Resume = () => {
  return (
    <Layout>
      <main className="bg-gradient from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <p className="mb-4">Here is my resume:</p>
        <ul className="list-disc pl-5">
          <li>Education: Bachelor of Science in Computer Science</li>
          <li>Experience: 5 years in software development</li>
          <li>Skills: JavaScript, React, Node.js, Python</li>
        </ul>
      </main>
    </Layout>
  )
} 