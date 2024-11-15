"use client";

import React, { useState } from "react";

const Recipes = () => {
  const [steps, setSteps] = useState([]); // State to store recipe steps
  const [search, setSearch] = useState(""); // Search query
  const [titles, setTitles] = useState([]); // Recipe titles
  const [error, setError] = useState(null); // Error state
  const [loading, setLoading] = useState(false); // Loading state

  const handleFetchSteps = async (recipeId) => {
    setTitles((prevTitles) =>
      prevTitles.map((title) =>
        title.Recipe_id === recipeId ? { ...title, loading: true } : title
      )
    );

    try {
      const response = await fetch(
        `https://cosylab.iiitd.edu.in/recipe/${recipeId}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch steps for recipe ID: ${recipeId}`);
      }

      const data = await response.json();
      setSteps(
        data.payload && Array.isArray(data.payload.instructions)
          ? data.payload.instructions
          : []
      );
    } catch (err) {
      console.error("Error fetching steps:", err.message);
      setSteps([]);
    } finally {
      setTitles((prevTitles) =>
        prevTitles.map((title) =>
          title.Recipe_id === recipeId ? { ...title, loading: false } : title
        )
      );
    }
  };

  const fetchRecipe = async () => {
    if (!search.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError(null);
    setTitles([]);
    setSteps([]);

    const url = `https://cosylab.iiitd.edu.in/recipe-search/recipe?pageSize=10&searchText=${encodeURIComponent(
      search
    )}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (
        data.success === "true" &&
        Array.isArray(data.payload.data) &&
        data.payload.data.length > 0
      ) {
        setTitles(
          data.payload.data.map((recipe) => ({
            ...recipe,
            loading: false,
          }))
        );
      } else {
        setError("No recipes found.");
      }
    } catch (err) {
      console.error("Error fetching recipes:", err.message);
      setError("Failed to fetch recipes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Recipe Finder</h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for recipes"
            className="flex-1 border border-gray-700 rounded px-4 py-2 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={fetchRecipe}
            className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
          >
            Search
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-center mb-6">{error}</p>
        )}

        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {titles.map((title) => (
              <li
                key={title.Recipe_id}
                className="bg-gray-800 p-4 rounded hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg mb-2">
                  {title.Recipe_title.replace(/<[^>]+>/g, "")}
                </h3>
                <button
                  onClick={() => handleFetchSteps(title.Recipe_id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  {title.loading ? "Loading..." : "View Steps"}
                </button>
              </li>
            ))}
          </ul>
        )}

        {steps.length > 0 && (
          <div className="mt-8 bg-gray-800 p-6 rounded">
            <h2 className="text-xl font-bold mb-4">Steps:</h2>
            <ol className="list-decimal space-y-2 pl-6">
              {steps.map((step, index) => (
                <li key={index} className="text-gray-300">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
