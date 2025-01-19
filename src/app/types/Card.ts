export type CardType = {
  id: number;
  name: string;
  game: GameType;
  players: PlayersType;
  status: StatusType;
  version: VersionType;
  type: TypeType;
  region: RegionType;
  mods: string[];
};

type GameType = "Minecraft";
type PlayersType = `${number}/${number}`;
type StatusType = "online" | "offline";
type VersionType = `${number}.${number}.${number}` | `${number}.${number}`;
type TypeType = "Survival" | "Creative" | "Hardcore" | "Modded" | "Technical";
type RegionType = "North America" | "Europe" | "Asia" | "South America";
