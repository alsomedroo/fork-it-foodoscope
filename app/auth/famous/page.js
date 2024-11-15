"use client";

import React, { useState } from "react";

const Recipes = () => {
  const [steps, setSteps] = useState([]); // State to store recipe steps
  const [id, setId] = useState([]); // This stores the list of recipe IDs
  const [search, setSearch] = useState(""); // Search query
  const [titles, setTitles] = useState([]); // Recipe titles
  const [error, setError] = useState(null); // Error state
  const [ingredients, setIngredients] = useState([]); // Ingredients state
  const [loading, setLoading] = useState(false); // Loading state

  // Function to fetch ingredients and steps based on the clicked recipe ID
  const handleFetchIngredientsAndSteps = async (recipeId) => {
    setLoading(true);
    try {
      const response = await fetch(`https://cosylab.iiitd.edu.in/recipe/${recipeId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      if (data.payload && Array.isArray(data.payload.ingredients)) {
        setIngredients(data.payload.ingredients);
      } else {
        setIngredients([]);
      }

      if (data.payload && Array.isArray(data.payload.instructions)) {
        setSteps(data.payload.instructions);
      } else {
        setSteps([]);
      }
    } catch (err) {
      console.error("Error fetching ingredients or steps:", err);
      setError(`Error fetching ingredients or steps: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch recipes based on the search query
  const fetchRecipe = async () => {
    const url = `https://cosylab.iiitd.edu.in/recipe-search/recipe?pageSize=10&searchText=${search}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success === "true" && Array.isArray(data.payload.data) && data.payload.data.length > 0) {
        const recipeIds = data.payload.data.map((recipe) => recipe.Recipe_id);
        setId(recipeIds);
        setTitles(data.payload.data);
        setError(null);
      } else {
        setTitles([]);
        setError("No recipes found.");
      }
    } catch (err) {
      setError(`Error fetching recipes: ${err.message}`);
      setTitles([]);
    }
  };

  // Function to handle the Enter key press for search
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchRecipe();
    }
  };

  return (
    <div>
      <label htmlFor="search">Search for recipes</label>
      <br />
      <input
        type="text"
        id="search"
        placeholder="Search for recipes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={fetchRecipe}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Displaying the recipe titles */}
      <ul>
        {Array.isArray(titles) && titles.length > 0 ? (
          titles.map((recipe, index) => (
            <li key={index}>
              {recipe.Recipe_title.replace(/<[^>]+>/g, "") || "No Title Available"} 
              <button onClick={() => handleFetchIngredientsAndSteps(recipe.Recipe_id)}>
                Get Ingredients & Steps
              </button>
            </li>
          ))
        ) : (
          <p>No recipes to display</p>
        )}
      </ul>

      {/* Displaying ingredients when available */}
      {loading && <p>Loading ingredients...</p>}
      {ingredients.length > 0 && (
        <div>
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.ingredient && <span>{ingredient.ingredient}</span>}
                {ingredient.quantity && <span> {ingredient.quantity}</span>}
                {ingredient.unit && <span> {ingredient.unit}</span>}
                {ingredient.Carbohydrate && <span> Carbs: {ingredient.Carbohydrate}g</span>}
                {ingredient.Protein && <span> Protein: {ingredient.Protein}g</span>}
                {ingredient.Energy && <span> Energy: {ingredient.Energy} kcal</span>}
                {ingredient["Total lipid (fat)"] && <span> Fat: {ingredient["Total lipid (fat)"]}g</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Displaying steps when available */}
      {steps.length > 0 && (
        <div>
          <h3>Steps:</h3>
          <ol>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Recipes;
