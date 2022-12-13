import ShowCocktail from "./ShowCocktail";

const ShowResult = (props)=>{
    return(
        <div>
            {props.result.map((cocktails) => {
                return (
                    <div>
                        <ShowCocktail cocktails={cocktails} />
                    </div> 
                )
            })}
        </div>
        
    )
}

export default ShowResult;