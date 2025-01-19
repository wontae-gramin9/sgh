import type { CardType } from "@/app/types/Card";

// [Wontae] Renamed mockServers → mockData and moved it to data/mockServers.ts
// To categorize route hanlers and its HTTP methods sorely on api/mock/routes file
// Also, place mockData and UpdateServerStatusOfCard() in the same file enables mutating mockData easily
// Because, at ES6, imported objects are immutable, so on tried mutating it exude a compile error
export const mockData: CardType[] = [
  {
    id: 1,
    name: "Survival Paradise",
    game: "Minecraft",
    players: "12/20",
    status: "online",
    version: "1.20.1",
    type: "Survival",
    region: "North America",
    mods: ["Essentials", "Dynmap", "GriefPrevention"],
  },
  {
    id: 2,
    name: "Creative Builders Hub",
    game: "Minecraft",
    players: "8/50",
    status: "online",
    version: "1.19",
    type: "Creative",
    region: "Europe",
    mods: ["WorldEdit", "VoxelSniper"],
  },
  {
    id: 3,
    name: "Hardcore Arena",
    game: "Minecraft",
    players: "3/10",
    status: "offline",
    version: "1.20",
    type: "Hardcore",
    region: "Asia",
    mods: ["NoCheatPlus", "Anti-Xray"],
  },
  {
    id: 4,
    name: "Pixelmon Adventures",
    game: "Minecraft",
    players: "15/30",
    status: "online",
    version: "1.16.5",
    type: "Modded",
    region: "South America",
    mods: ["Pixelmon", "JourneyMap"],
  },
  {
    id: 5,
    name: "Redstone Engineers",
    game: "Minecraft",
    players: "5/25",
    status: "offline",
    version: "1.20",
    type: "Technical",
    region: "North America",
    mods: ["Litematica", "Schematica"],
  },
];
