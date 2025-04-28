
import { InferenceClient } from "@huggingface/inference"


const HF_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN;

if (!HF_TOKEN) {
    throw new Error("Missing HF_ACCESS_TOKEN in environment variables")
}

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a Nigerian-based recipe they could make with some or all of those ingredients. You don't need to add the phrase 'Nigerian-styled' in your response. Just assume the user expects Nigerian-styled recipe, and then go ahead and provide the recipe. You don't need to use every ingredient they mention in your recipe.  The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`;

const HFClient = new InferenceClient(HF_TOKEN);

export async function getRecipeFromMistral(ingredientsArr){
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await HFClient.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role:  "user", content: `I have ${ingredientsString}. Give me a recipe you'd recommend I make`},
            ],
            max_token: 1024,
        })
        return response.choices?.[0]?.message?.content || "" ;
    } catch(err){
        console.error("API Interaction Error", err);
        throw err;
    }

}


