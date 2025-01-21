"use client";

import type { CardType } from "@/app/types/Card";
import Button from "@/app/components/Button";
import Badge from "@/app/components/Badge";
import { useState } from "react";

function Card(props: { card: CardType }) {
  const { card } = props;
  const { id, name, game, players, status } = card;
  const [serverStatus, setServerStatus] = useState(() => status);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    try {
      const payload = {
        id,
      };
      const headers = new Headers({ "content-type": "application/json" });
      const response = await fetch("/api/mock", {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      console.log(result);
      const newServerStatus = result.data.status;
      setServerStatus(newServerStatus);
    } catch (error) {
      console.error(
        `Failed to change server status of card with id ${id}:`,
        error
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-lg border border-purple-3 bg-white-1 p-6 shadow-lg transition duration-500 hover:scale-1">
      <form onSubmit={handleSubmit}>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-purple-2">{name}</h2>
          <p>{game}</p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p>{players} players online</p>
          <Badge type={serverStatus === "online" ? "success" : "error"}>
            {serverStatus === "online" ? "Online" : "Offline"}
          </Badge>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <Button
            className={`rounded-lg px-4 py-2 font-medium text-white-1`}
            disabled={loading}
          >
            {serverStatus === "online" ? "Stop" : "Start"} Server
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Card;
