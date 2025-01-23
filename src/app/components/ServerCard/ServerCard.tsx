"use client";

import type { CardType } from "@/app/types/Card";
import Button from "@/app/components/Button";
import Badge from "@/app/components/Badge/Badge";
import Spinner from "@/app/components/Spinner";
import { useState } from "react";
import { errorToast, successToast } from "@/app/lib/toast";
import AdditionalServerCardInfo from "@/app/components/ServerCard/AdditionalServerCardInfo";

function ServerCard(props: { card: CardType }) {
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
      successToast("Server status successfully toggled.");
    } catch (error) {
      errorToast("Server status changed failed.");
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
    <div className="min-w-56 rounded-lg border border-secondary-st bg-background-li px-1 py-4 shadow-lg transition duration-500 hover:scale-3 sm:min-w-64 sm:px-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-semibold text-secondary-st">{name}</h1>
          <h2 className="text-xl">{game}</h2>
          <div className="flex flex-col items-center">
            <p>{players} Players Online</p>
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
          <AdditionalServerCardInfo card={card} />
        </div>
      </form>
    </div>
  );
}

export default ServerCard;
