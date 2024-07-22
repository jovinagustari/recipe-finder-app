// RecipePage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const RecipePage = () => {
  const { label } = useParams(); // Get recipe label from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${label}&app_id=${APP_ID}&app_key=${APP_KEY}`;

      setLoading(true);
      setRecipe(null); // Set to null while loading
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const fetchedRecipe = data.hits.find(hit => hit.recipe.label === label)?.recipe;
        setRecipe(fetchedRecipe);
        console.log(data.hits); // Log the data to verify
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [label]); // Re-run effect if label changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className='bg=[#faf9fb] flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-3xl my-4'>{recipe.label}</p>
        <h1>Ingredients</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
