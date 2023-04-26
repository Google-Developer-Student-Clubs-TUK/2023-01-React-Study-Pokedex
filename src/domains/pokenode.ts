import { PokemonClient } from "pokenode-ts";
import { exportColor } from ".";

export async function getPokemon(num: number): Promise<Poke> {
    const api = new PokemonClient();

    const url = (await api.listPokemons(num - 1, 1)).results[0].url;
    const id = Number(url.split("/").filter(Boolean).pop());
    const pokemon = await api.getPokemonById(id);


    const stats = pokemon.stats.map(s => {
        return {
            name: s.stat.name,
            value: s.base_stat,
        }
    })
    
    const img = pokemon.sprites.other?.["official-artwork"].front_default!;
    return {
        id: num,
        name: pokemon.name,
        image: img,
        stat: stats,
    }

}
export async function getPokemonCount(): Promise<number> {
    const api = new PokemonClient();

    return (await api.listPokemons(0, 1)).count;
}

export type Poke = {
    id: number,
    name: string,
    image: string,
    stat: {
        name: string;
        value: number;
    }[],
}