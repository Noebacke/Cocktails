import { useState } from "react"
import ShowCocktail from "./ShowCocktail";

const FindCocktail = ()=>{
    // Déclaration d'un useState qui récupèrera les données reçues par l'appel fetch.
    const [cocktailData, setCocktailsData] = useState([]);


    // Fonction qui sera appelée pour faire l'appel fetch et stocker les données récupérées dans cocktailData.
    const handleChange = async (e) => {
        const cocktailResponses = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+e.target.value);
        const cocktailRandomData = await cocktailResponses.json()
        setCocktailsData(cocktailRandomData.drinks);
    };

    return(
        <form >
            {/*Input qui appellera la fonction handleChange lors du submit*/}
            <input type="text" placeholder="Recherche" onChange={(e) => handleChange(e)}>

            </input>
            {/* Pour afficher les cocktail, on se sert de notre composant ShowCocktail  */}
            {cocktailData.map((cocktails) => {
                return (
                    <div>
                        <ShowCocktail cocktails={cocktails} />
                    </div>
                )
            })}
        </form>
    )
};

export default FindCocktail;