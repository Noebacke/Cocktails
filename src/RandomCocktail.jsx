import { useEffect,useState } from "react";
import ShowCocktail from "./ShowCocktail";

const RandomCocktail = ()=>{

    const [cocktailRandomData, setCocktailRandomdata] = useState(null);

    // const handleClick = async () => {
    //     const cocktailResponses = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    //     const cocktailRandomData = await cocktailResponses.json()
    //     const returnCocktail = cocktailRandomData.drinks[0];
    //     setCocktailRandomdata(returnCocktail);
        
    // }

    useEffect(()=>{
        (async ()=>{
            const cocktailResponses = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const cocktailRandomData = await cocktailResponses.json()
            const returnCocktail = cocktailRandomData.drinks[0];
            setCocktailRandomdata(returnCocktail);
        })();  
    },[]);

    return(
        <div>
            {/* <button onClick={handleClick}>Cliquez sur moi pour retourner les noms de boissons</button> */}
            {cocktailRandomData ? (
                <ShowCocktail cocktail={cocktailRandomData}/>
            ) : (
                <div>
                    <h1>Chargement de la recette...</h1>
                </div>
            )}
        </div>
    )
};

export default RandomCocktail;