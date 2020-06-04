import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default instance;

export class ServiceBase {
  protected static instance = instance;
}
