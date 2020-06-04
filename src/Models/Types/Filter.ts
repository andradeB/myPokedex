import Height from './Height';
import Weight from './Weight';
import Range from './Range';
import Sort from './Sort';
import PokemonType from './PokemonTypes';

export default class Filter {
  types: Array<PokemonType>;
  weaknesses: Array<PokemonType>;
  height: Array<Height>;
  weight: Array<Weight>;
  range: Range;
  sort: Sort;
  generation: number;
}
