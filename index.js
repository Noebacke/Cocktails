const root = document.getElementById('root');
const button = document.createElement('button');
const titleH1 = document.createElement('h1');
const instDiv = document.createElement('div');
const imgApi = document.createElement('img');
const catDiv = document.createElement('div');
const ingreDiv = document.createElement('div');
const cocktailDiv = document.createElement('div');

button.textContent = 'Click me';

root.appendChild(button);
root.appendChild(cocktailDiv);

cocktailDiv.appendChild(titleH1);
cocktailDiv.appendChild(instDiv);
cocktailDiv.appendChild(imgApi);
cocktailDiv.appendChild(catDiv);
cocktailDiv.appendChild(ingreDiv);


const fetchRandomCocktail = async () => {
    const responseCoktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return await responseCoktail.json();
}

button.addEventListener('click', async () => {
    
    const response = await fetchRandomCocktail();
    await listIngredient();
    console.log(response);
    const randomDrink = response.drinks[0];

    cocktailDiv.setAttribute('id', 'cocktail');

    titleH1.textContent = `le nom du coktail est ${randomDrink.strDrink}`;
    imgApi.setAttribute('src', randomDrink.strDrinkThumb);
    instDiv.textContent = randomDrink.strInstructions;
    catDiv.textContent = randomDrink.strCategory;
    listIngredient();

})

const listIngredient = async () => {
    ingreDiv.textContent = "";
    for (let i = 0; i < 15; i++) {
        const res = await fetchRandomCocktail();
        let valueArray = 1+i;
        let strIngredient = "strIngredient"+valueArray;
        let strQuant = "strMeasure"+valueArray;
        let resDrinks = res.drinks[0];
        if(resDrinks[strIngredient] != null){
            ingreDiv.textContent += resDrinks[strIngredient] + " " +resDrinks[strQuant] + ""
        }
    }
}    
