const ShowCocktail = (props)=>{

    const cocktailData = props.cocktails;

    const getIngredients = ()=>{
        const ingredients = [];
        for(let i=1; i<= 15; i++) {
            
            if(cocktailData[`strIngredient${i}`]) {
                ingredients.push(cocktailData[`strIngredient${i}`]);
                
            }
        };
        
        return ingredients;
    }

    return (
        <div id="block_of_cocktails">
            <h1>{cocktailData.strDrink}</h1> 
            <img src={cocktailData.strDrinkThumb} className="Cocktails_img"></img>
            <div>{cocktailData.strCategory}</div>
            <div>{cocktailData.strInstructions}</div>
            <div>
                {getIngredients().map((ingredient)=>{
                    return(
                        <p>{ingredient}</p>
                    )
                })}
            </div>
        </div>
    )
};

export default ShowCocktail;