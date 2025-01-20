"use client";

import type { CardType } from "@/app/types/Card";
import Button from "@/app/components/Button";
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
    <div className="rounded-lg border border-purple bg-lavender p-6 shadow-lg">
      <form onSubmit={handleSubmit}>
        <p className="text-purple">Server Name: {name}</p>
        <p className="text-orange">Game Name: {game}</p>
        <p className="text-gold">Player Count: {players}</p>
        <p className="text-darkgray">Server Status Indicator: {serverStatus}</p>
        <Button disabled={loading}>
          {serverStatus === "online" ? "Stop" : "Start"} Server
        </Button>
      </form>
    </div>
  );
}

export default Card;
