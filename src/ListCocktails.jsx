import { useEffect, useState } from "react"
import ShowCocktail from "./ShowCocktail";

const ListCocktails = ()=>{

    const [cocktailsData, setCocktailsData] = useState([])

    useEffect(()=>{
        (async () => {
            const cocktailResponses = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
            const cocktailRandomData = await cocktailResponses.json()
            setCocktailsData(cocktailRandomData.drinks);
        })();
    })



    return(
        <div>
            {cocktailsData.map((cocktails) => {
                return(
                    <div>
                        <ShowCocktail cocktails={cocktails}/>
                    </div>
                    
                )
            })}
        </div>
    );
};

export default ListCocktails;