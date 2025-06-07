import { useState, useEffect } from "react";
import { Layout } from "../components/layout";
import type { ReposProps } from "../types/reposprops";

export const Projects = () => {
  const [repos, setRepos] = useState<ReposProps[]>([]);
  const [selected, setSelected] = useState<ReposProps | null>(null);

  const fetchRepos = async () => {
    try {
      const response = await fetch("https://api.github.com/users/Mchilzia/repos");
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold flex-1 text-center">Projects</h1>
        <button
          onClick={fetchRepos}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 ml-4"
          aria-label="Refresh project list"
        >
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white p-4 rounded-lg px-15 py-10 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelected(repo)}
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900">{repo.name}</h2>
            <p className="text-gray-700 mb-2">{repo.description || "No description."}</p>
            <p className="text-gray-500 text-sm mb-2">Language: {repo.language || "N/A"}</p>
          </div>
        ))}
      </div>

        {/* modal*/}
      {selected && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-40">
          <div className="bg-blue-600 text-white rounded-xl shadow-lg p-6 w-[90%] max-w-xl relative">
            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
            <p className="text-gray-200 mb-4">{selected.description || "No description."}</p>
            <p className="text-gray-300 mb-2">Language: {selected.language || "N/A"}</p>
            <a
              href={selected.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 underline block mb-4"
            >
              View Repository
            </a>
            <button
              onClick={() => setSelected(null)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300"
              aria-label="Close project details"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};