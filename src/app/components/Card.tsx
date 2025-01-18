import type { CardType } from "@/app/types/Card";

function Card(props: { card: CardType }) {
  const { card } = props;
  const { game, players, status, region } = card;
  return (
    <div>
      <p>Server Name: {region}</p>
      <p>Game Name: {game}</p>
      <p>Player Count: {players}</p>
      <p>Status: {status}</p>
      <button>Start server or Stop server</button>
    </div>
  );
}

export default Card;
