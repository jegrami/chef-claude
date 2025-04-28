
import { useState, useEffect, useRef } from 'react';
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main() {

    

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null) 
    

    function addIngredients(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    useEffect(() => {
        if (recipe !== "" && recipeSection.current != null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        console.log(recipeMarkdown)
    }
    
    return (
        <main>
            <form action={addIngredients} className="add-ingredient-form">
            <input 
            type="text"
            placeholder="e.g. green beans"
            aria-label="add ingredients"
            name="ingredient"
            />
            <button>Add ingredients</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList 
                ref={recipeSection}
                ingredients={ingredients}
                getRecipe={getRecipe}
                 />          
            }

            {recipe && <ClaudeRecipe recipe={recipe}/> }
        </main>
    )
}