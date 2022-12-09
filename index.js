const root = document.getElementById('root');
const button = document.createElement('button');
// const titleH1 = document.createElement('h1');
// const instDiv = document.createElement('div');
// const imgApi = document.createElement('img');
// const catDiv = document.createElement('div');
const ingreDiv = document.createElement('div');
const cocktailDiv = document.createElement('div');

button.textContent = 'Click me';

root.appendChild(button);
root.appendChild(cocktailDiv);


button.addEventListener('click', async () => {

    let obj = new returnIngredients;
    let obj2 = new returnElement;
    let obj3 = new returnFetch;
    const randomDrinks = await obj3.fetchRandomCocktail('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    console.log(randomDrinks,'randomdrink');

    for (let i = 0; i < 50; i++) {
        cocktailDiv.setAttribute('id', 'cocktail');
        const element = randomDrinks[i];
        obj2.addElement('h1', element.strDrink, null);
        obj2.addElement('img', null , { 'src' : element.strDrinkThumb});
        obj2.addElement('div', element.strInstructions, null);
        obj2.addElement('div', element.strCategory, null);
        console.log(obj.listIngredient('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='),"yo");
        // obj2.addElement('div',)
    }
    
})

class returnElement {
    addElement (element, text, attrs){
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
}

class returnFetch {
    async fetchRandomCocktail (link) {
        const responseCoktail = await fetch(link);
        const response = await responseCoktail.json();
        return response.drinks;
    }
}

class returnIngredients {
    async listIngredient (link) {
        const fetchIngredients = new returnFetch;
        const returnOfData = await fetchIngredients.fetchRandomCocktail('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        ingreDiv.textContent = "";
        for (let i = 0; i < Array.length; i++) {
            console.log(returnOfData[Array.length],"nop");
            if(returnOfData[Array.length].strIngredient[i] != null){
                ingreDiv.textContent += returnOfData[Array.length].strIngredient[i] + " " +returnOfData[Array.length].strMeasure[i] + ""
            }else{
                console.log("ça marche pass");
            }
        }
    }   
}
  






// créer un nouveau bouton
// au clic sur ce bouton, faites un appel fetch https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
// affichez les résultats dans votre DOM 
// créez vos différentes fonctions dans une ou plusieurs classes
// Si vous avez terminé, tentez de refactoriser votre classe en plusieurs classes
// en utilisant le principe SRP de SOLID// https://www.freecodecamp.org/news/solid-principles-single-responsibility-principle-explained/

