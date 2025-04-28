# Chef Claude

## A React + Vite recipe app powered by Hugging Face API. 

Enter a list of ingredients, click the `Get Recipe` button, and voilla ... the app return a Nigerian-styled recipe that you might love. 


## Run the app locally:

### Prerequisite
Just make sure you Node.js installed. And then:

1. Clone the repo and cd into the directory: 
```bash 
git clone git@github.com:jegrami/chef-claude.git
cd chef-claude
```

2. Install dependencies
```bash
npm install
```
3. Create a .env file

In the project root, create a .env file and add your API token:

```bash
VITE_WHATEVER_TOKEN_ACCESS = 'your-hugging-face-or-if-you-have-money-claude-api-key'
```

4. Start the development server

```bash
npm run dev
```

5. Visit the app

Open http://localhost:5173 in your browser.


> [NOTE]
> The app is called chef-claude but uses a model from Hugging Face to generate the recipe. 
This is because I orignally wanted to use the Claude API, but then discovered half-way through building the app that Claude API requires credit card subscription. So I had to use Hugging Face (which is free) but kept the chef claude name because it sounded cooler. 

> [WARNING]
> The Actual model being used under the hood by HF to generate this recipe is shitty as fuck. 

> [NOTE]
The system prompt is tailored to produce Nigerian-styled recipes. You can edit it to produce recipe from your own country and culture.