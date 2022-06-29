import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import styled from "styled-components";

const Header=styled.div`
display: flex;
background: red;
align-items: center;
justify-content: center;


`
const Caixa=styled.div `
display:grid;
grid-template-columns: repeat(4,1fr);
row-gap: 20px;
column-gap: 20px;
margin:20px;

`


const Home = () => {
   const[pokemon,setPokemon]=useState([])
    
   const recebendoPokemons =()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then((res)=>{
        setPokemon(res.data.results)
    }).catch((erro)=>{
        
    })
   }
   
   useEffect(()=>{
    recebendoPokemons()
   },[])
    
   const pokemonzinho=pokemon.map((pokemon)=>{
    return <div>
        {pokemon.name}
        <br/>
        <button>Adicionar</button>
        <button>Ver detal.</button>
    </div>
   })

   
   return (
        <div>
            <Header>  <button>Ver minha Pokedex</button> <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"></img></Header>
            
            
            
            <Caixa>{pokemonzinho}</Caixa>
        </div>
    )
}

export default  Home;