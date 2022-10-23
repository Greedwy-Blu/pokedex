
import {Outlet, useParams, } from 'react-router-dom'
import {useState} from "react"
import {useRecoilState} from "recoil"
import { atomPokemonSearch } from '../../store/atoms';

const HomePage = () => {
    const [pokemon, setPokemon] = useRecoilState(atomPokemonSearch);
    <input type="text" onChange={(event) => setPokemon(event.target.value)}  />
    
  
return   <div>{pokemon}</div>;

};


export default HomePage;