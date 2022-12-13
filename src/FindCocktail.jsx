import { useState } from "react"
import SearchForm from "./SearchForm";
import ShowCocktail from "./ShowCocktail";
import ShowResult from "./ShowResult";

const FindCocktail = ()=>{
    // Déclaration d'un useState qui récupèrera les données reçues par l'appel fetch.
    const [cocktailData, setCocktailsData] = useState([]);
    const [returnErrorCocktail, setreturnErrorCocktal] = useState();

    const returnError = ()=>{
        <div id="error_search_cocktail">
            Aucun résulat ne correspond à la recherche...
        </div>
    }
    // Fonction qui sera appelée pour faire l'appel fetch et stocker les données récupérées dans cocktailData.
    const handleChange = async (e) => {
        const cocktailResponses = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+e.target.value);
        const cocktailData = await cocktailResponses.json()


        if(cocktailData.drinks.length > 0){
            setCocktailsData(cocktailData.drinks);
        }else{
            console.error("Aucun resultats ne corresponds à la recherche");
            setreturnErrorCocktal(true);
        };


    };

    return(
        <div>
            <SearchForm callback={handleChange}/>,
            <ShowResult result={cocktailData}/>
        </div>

    )
};

export default FindCocktail;