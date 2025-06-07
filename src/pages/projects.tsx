import { Layout } from "../components/layout"

export const Projects = () => {
  return (
    <Layout>
      <main className="bg-gradient from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="mb-4">Here are some of my projects:</p>
        <ul className="list-disc pl-5">
          <li>Project 1: Description of project 1</li>
          <li>Project 2: Description of project 2</li>
          <li>Project 3: Description of project 3</li>
        </ul>
      </main>
    </Layout>
  )
}
