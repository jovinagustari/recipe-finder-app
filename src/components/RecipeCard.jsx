import { Heart, HeartPulse, Soup } from 'lucide-react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getTwoArrayValues = (arr) => {
    return [arr[0], arr[1]];
}

const RecipeCard = ({ recipe, bg, badge }) => {
  const navigate = useNavigate();
  const healthLabels = getTwoArrayValues(recipe.healthLabels);
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem('favorites')?.includes(recipe.label));

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isRecipeInFavorites = favorites.some((fav) => fav.label === recipe.label);

    if (isRecipeInFavorites) {
        favorites = favorites.filter((fav) => fav.label !== recipe.label);
        setIsFavorite(false);
    } else {
        favorites.push(recipe);
        setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const handleClick = () => {
    navigate(`/recipe/${recipe.label}`); // Use recipe label or ID to identify the recipe
  };

  return (
    <div className='mb-9'>
        <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative shadow-md`}>
            <div className='relative h-40'>
                <div className='skeleton absolute inset-0' />
                    <img 
                        onClick={handleClick}
                        src={recipe.image} 
                        alt="recipe img" 
                        className='rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500'
                        onLoad={(e) => {
                            e.currentTarget.style.opacity = 1;
                            e.currentTarget.previousElementSibling.style.display = "none";
                        }} // onload ini untuk menghindari gambar yg sedang loading, jdi ketika gambar loading dia bakal ngasih skeleton baru kalau udah selesai ditampilin gambarnya
                    />
                <div 
                    className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer' 
                    onClick={(e) => {
                    e.preventDefault();
                    addRecipeToFavorites()
                }}>
                    {!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
                    {isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />}
                </div>
                <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 px-2 cursor-pointer flex items-center gap-1 text-sm'>
                    <Soup size={16} /> {recipe.yield} Servings
                </div>
            </div>
            <div className='flex mt-1'>
                <p className='font-bold tracking-wide'>{recipe.label}</p>
            </div>
            <p className='mb-2'>
                {recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} cuisine</p>
            <a 
            href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
            target='_blank' 
            className='flex mb-2 gap-1 items-center rounded-md'
            >
                <img src="/youtube.svg" alt="" className='w-5'/>
                <span className='tracking-tight text-sm font-normal hover:font-semibold'>Search this recipe</span>
            </a>
            <div className='flex gap-2 mt-auto justify-center'>
                { healthLabels.map((label, idx) => (
                    <div key={idx} className={`flex gap-1 ${badge} items-center p-1 rounded-md px-2`}>
                        <HeartPulse size={15}/>
                        <span className='text-sm tracking-tighter font-semibold'>{label}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default RecipeCard