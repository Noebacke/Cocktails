import Footer from "./Footer";
import Header from "./Header";
import "./Css/App.css";
import FindCocktail from "./FindCocktail";
import ListCocktails from "./ListCocktails";
import RandomCocktail from "./RandomCocktail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Css/Home";

function App() {
    return (
        // <div>
        //     <Header/>
        //     <FindCocktail/>
        //     <ListCocktails/>
        //     <RandomCocktail/>
        //     <Footer/>
        // </div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cocktails/list" element={<ListCocktails/>}/>
                <Route path="/cocktails/random" element={<RandomCocktail/>}/>
                <Route path="/cocktails/find" element={<FindCocktail/>}/>
            </Routes>
        </BrowserRouter>
    )
};
export default App;