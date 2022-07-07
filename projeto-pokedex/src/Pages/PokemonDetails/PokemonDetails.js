import { useNavigate } from "react-router";
import PokemonDetailsCards from '../../Components/PokemonDetailsCards';
import styled from "styled-components";
import pokebola from "../../Pages/Home/assets/pokebola.png"

const Header = styled.div`
  display: flex;
  background: red;
  align-items: center;
  justify-content: space-around;
`
const ImgHeader = styled.img`
  cursor: pointer;
`

const PokemonDetails = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <Header>
        <br></br>
        <ImgHeader src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" onClick={() => navigate("/")}/>
        <ImgHeader src={pokebola} onClick={() => navigate("/pokedex")}/> 
      </Header>
      <PokemonDetailsCards/>
      
    </div>
  )}

export default PokemonDetails;