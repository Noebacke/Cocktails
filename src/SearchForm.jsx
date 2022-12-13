const SearchForm = (props)=>{

    return(
        <form >
            {/*Input qui appellera la fonction handleChange lors du submit*/}
            <input type="text" placeholder="Recherche" onChange={(e) => props.callback(e)} />

            {/* Pour afficher les cocktail, on se sert de notre composant ShowCocktail  */}
        </form>
    )
}

export default SearchForm;