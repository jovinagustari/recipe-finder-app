// RecipePage.jsx
import { ArrowLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const RecipePage = () => {
  const navigate = useNavigate();
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

  if (loading) return <p className='mx-3 my-2'>Loading...</p>;
  if (error) return <p className='mx-3 my-2'> Error: {error.message}</p>;
  if (!recipe) return <p className='mx-3 my-2'> Recipe not found</p>;

  return (
    <div className='bg=[#faf9fb] flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <ArrowLeft size={"32"} onClick={() => navigate(-1)} className='mb-4 bg-slate-200 rounded-lg cursor-pointer'/>
        <div><img 
            src={recipe.image} 
            alt="recipe img" 
            className='rounded-xl w-auto h-full shadow-lg object-cover opacity-0 transition-opacity duration-500'
            onLoad={(e) => {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.previousElementSibling.style.display = "none";
            }} // onload ini untuk menghindari gambar yg sedang loading, jdi ketika gambar loading dia bakal ngasih skeleton baru kalau udah selesai ditampilin gambarnya
        /></div>
        <p className='font-bold text-3xl my-3'>{recipe.label}</p>
        <p className='text-sm lg:text-base'>Calories : {Math.round(recipe.calories)}cal</p>
        <p className='text-sm lg:text-base'>Meal Type : {recipe.mealType[0].charAt(0).toUpperCase() + recipe.mealType[0].slice(1)}</p>
        <p className='text-sm lg:text-base'>Dish Type : {recipe.dishType[0].charAt(0).toUpperCase() + recipe.dishType[0].slice(1)}</p>
        <h1 className='font-semibold text-xl my-2'>Ingredients</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <ul>
              {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}> - {ingredient}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
