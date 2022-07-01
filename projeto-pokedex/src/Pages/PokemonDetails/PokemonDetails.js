import { useNavigate } from "react-router";
import PokemonDetailsCards from '../../Components/PokemonDetailsCards';
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  background: red;
  align-items: center;
  justify-content: center;
`;

const PokemonDetails = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <Header>
        <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"/>
        <button onClick={() => navigate("/")}>Voltar para lista de pokemons</button>
        <button onClick={() => navigate("/pokedex")}>Voltar para a pokedex</button>
      </Header>
      <PokemonDetailsCards/>
      
    </div>
  )}

export default PokemonDetails;