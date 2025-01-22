"use client";

import type { CardType } from "@/app/types/Card";
import Button from "@/app/components/Button";
import Badge from "@/app/components/Badge";
import Spinner from "@/app/components/Spinner";
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
        "Card component handleSubmit Error \n",
        `Failed to change server status of Card with id ${id} → \n`,
        error
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-lg border border-primary-st bg-background-nm p-6 shadow-lg transition duration-500 hover:scale-1">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-semibold text-primary-st">{name}</h1>
          <h2 className="text-xl">{game}</h2>
          <div>
            <p>{players} Players playing</p>
            <div className="flex items-center justify-center gap-2">
              <span>Server Status</span>
              <Badge type={serverStatus === "online" ? "success" : "error"}>
                {serverStatus === "online" ? "Online" : "Offline"}
              </Badge>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <Button
              className={`rounded-lg px-4 py-2 font-medium text-background-st`}
              disabled={loading}
            >
              {loading ? (
                <Spinner />
              ) : serverStatus === "online" ? (
                "Stop Server"
              ) : (
                "Start Server"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Card;
