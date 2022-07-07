import axios from "axios";
import { BASE_URL } from "../Constants/url";

export const getPokeNames = () => {
  return axios.get(`${BASE_URL}/pokemon?limit=9999`);
};

export const getPokeDetails = (pokemon) => {
  return axios.get(`${BASE_URL}/pokemon/${pokemon.name}`);
};
