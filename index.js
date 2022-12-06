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


const fetchRandomCocktail = async () => {
    const responseCoktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const response = await responseCoktail.json();
    return response.drinks[0];

}

button.addEventListener('click', async () => {
    const randomDrink = await fetchRandomCocktail();
    
    cocktailDiv.setAttribute('id', 'cocktail');
    addElement('h1', `le nom du coktail est ${randomDrink.strDrink}`, null);
    addElement('img', null , { 'src' : randomDrink.strDrinkThumb});
    addElement('div', randomDrink.strInstructions, null);
    addElement('div', randomDrink.strCategory, null);

    await listIngredient(randomDrink);

})

const addElement = (element, text, attrs)=>{

    const el = document.createElement(element);

    if (attrs) {

        for (const property in attrs) {
            console.log(attrs[property])
            console.log(property)
            el.setAttribute(property, attrs[property]);
        }
        
    }

    if (text) {
        el.textContent = text;
    }

    cocktailDiv.appendChild(el);
        
}

const listIngredient = async (resDrinks) => {
    ingreDiv.textContent = "";
    for (let i = 0; i < 15; i++) {
        let valueArray = 1+i;
        let strIngredient = "strIngredient"+valueArray;
        let strQuant = "strMeasure"+valueArray;
        if(resDrinks[strIngredient] != null){
            ingreDiv.textContent += resDrinks[strIngredient] + " " +resDrinks[strQuant] + ""
        }
    }
}    
