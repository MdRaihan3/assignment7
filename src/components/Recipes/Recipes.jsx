import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({cooksCount}) => {
   
const [recipes, setRecipes] = useState([])
useEffect(()=>{
fetch('recipes.json')
.then(res => res.json())
.then(data => setRecipes(data))
}, [])

    return (
        <div className="grid grid-cols-2 gap-10">
            {recipes.map((recipe) => <Recipe key={recipe.id} cooksCount={cooksCount} recipe={recipe}></Recipe>)}
        </div>
    );
};
Recipes.propTypes = {
    cooksCount: PropTypes.func.isRequired
}
export default Recipes;