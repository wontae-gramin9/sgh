import type { CardType } from "@/app/types/Card";

// [Wontae] Renamed mockServers → mockData and moved it to data/mockServers.ts
// To categorize route hanlers and its HTTP methods sorely on api/mock/routes file
// Also, place mockData and UpdateServerStatusOfCard() in the same file enables mutating mockData easily
// Because, at ES6, imported objects are immutable, so on tried mutating it exude a compile error
// export let mockData: CardType[] = [
export let mockData: CardType[] = [
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

// [Wontae] A helper function simulate a database UPDATE operations
// Giving a bit of stop to emulate the DB operations with Promise
export const UpdateServerStatusOfCard = (id: number) => {
  return new Promise((res, rej) => {
    // [Wontae] Add randomness to success/error responses to display success/error toast message
    // Of course, with a real DB opertation, would be try/catch
    setTimeout(() => {
      if (Math.random() < 0.5) {
        try {
          mockData = mockData.map((card: CardType) => {
            if (id === card.id) {
              card.status = card.status === "online" ? "offline" : "online";
            }
            return card;
          });
          res(mockData.find((card) => card.id === id));
        } catch (err) {
          rej(err);
        }
      } else {
        rej(new Error("Randomly display error toast."));
      }
    }, 1000);
  });
};

// 뱃지색깔이 안바뀐다!!!
