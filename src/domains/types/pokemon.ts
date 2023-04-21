export type PokemonBasicInfo = {
  name: string;
  sprites: { other: { 'official-artwork': { front_default: string } } };
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }>;
  types: Array<{
    slot: number;
    type: { name: string; url: string };
  }>;
};

export type PokemonSpecies = {
  evolution_chain: { url: string };
};

type NamedAPIResource = {
  name: string;
  url: string;
};

type ChainLink = {
  is_baby: boolean;
  species: NamedAPIResource;
  evolves_to: ChainLink[];
};

export type PokemonEvolutionChain = {
  id: number;
  chain: ChainLink;
};
