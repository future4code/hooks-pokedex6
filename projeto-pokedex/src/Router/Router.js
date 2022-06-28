import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../Pages/Home/Home"
import Pokedex from "../Pages/Pokedex/Pokedex"
import PokemonDetails from "../Pages/PokemonDetails/PokemonDetails"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
                <Route path="/pokemon/:name" element={<PokemonDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;