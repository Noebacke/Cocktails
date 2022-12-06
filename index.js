const root = document.getElementById('root');
const button = document.createElement('button');
const titleApi = document.createElement('h1');
const instApi = document.createElement('div');
const imgApi = document.createElement('img');
const catApi = document.createElement('div');
const ingreApi = document.createElement('div');
const cocktail = document.createElement('div');

button.textContent = 'Click me';

root.appendChild(button);
root.appendChild(cocktail);

cocktail.appendChild(titleApi);
cocktail.appendChild(instApi);
cocktail.appendChild(imgApi);
cocktail.appendChild(catApi);
cocktail.appendChild(ingreApi);


const fetchRandomCocktail = async () => {
    const responseCoktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return await responseCoktail.json();
}

button.addEventListener('click', async () => {
    for (let d = 0; d < 1; d++) {
        const response = await fetchRandomCocktail();
        await listIngredient();
        console.log(response);
        const randomDrink = response.drinks[0];
        
        cocktail.setAttribute('id', 'cocktail');

        titleApi.textContent = `le nom du coktail est ${randomDrink.strDrink}`;
        imgApi.setAttribute('src', randomDrink.strDrinkThumb);
        instApi.textContent = randomDrink.strInstructions;
        catApi.textContent = randomDrink.strCategory;
        listIngredient();
        
    }
})

const listIngredient = async () => {
    ingreApi.textContent = "";
    for (let i = 0; i < 15; i++) {
        const res = await fetchRandomCocktail();
        let valueArray = 1+i;
        let strIngredient = "strIngredient"+valueArray;
        let strQuant = "strMeasure"+valueArray;
        let resDrinks = res.drinks[0];
        if(resDrinks[strIngredient] == null){
            
        }else{
            ingreApi.textContent += resDrinks[strIngredient] + " " +resDrinks[strQuant] + ""
        }
    }
}    
