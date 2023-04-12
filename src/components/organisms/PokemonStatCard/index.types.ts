export interface PokemonStatCardProps {
  stats: {
    Hp: number;
    Attack: number;
    Defense: number;
    "Sp. Atk": number;
    "Sp. Def": number;
    Speed: number;
  };

  barValue: number;
  barColor: number[];
}
