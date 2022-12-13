import { useNavigate } from "react-router";

const Home = ()=>{
    const navigate = useNavigate();
    return(
        <div>
            Hello
            <button onClick={navigate("/cocktails/list")}>
                Cliquez ici pour afficher les produits
            </button>
        </div>
    )
};

export default Home;