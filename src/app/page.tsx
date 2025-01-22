"use client";
import { useEffect, useState } from "react";
import { CardType } from "@/app/types/Card";
import Card from "@/app/components/Card";
// import DarkModeToggle from "@/app/components/DarkModeToggle";
import Header from "@/app/components/templates/Header";
import ResponsiveGrid from "@/app/components/templates/ResponsiveGrid";

/*
  Welcome to the simplegamehosting coding assignment!

  if you got this far great job! 🎉
  Now it's your turn to shine! 🌟
  
  The mock data is fetched from the server and displayed on the page.

  Your task is to create a dynamic card component for each server in the list.
  - The card should display the server's name, game, players, status, version etc, bonus points for displaying any extra data from the json response.
  - please use tailwind to style your components, you can use the existing styles in this file as a reference.
  - You can also use any other libraries you like to help you build the UI.
  
  for extra info please read the README.md file in the root of the project.
*/

export default function Home() {
  const [serverData, setServerData] = useState<CardType[] | null>(null);
  // you can update this fetching code if required but it's not necessary for the assignment.
  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="mx-auto flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex w-full max-w-5xl flex-col px-2 sm:px-8">
        <ResponsiveGrid>
          {serverData
            ? serverData.map((card: CardType) => (
                <Card key={card.id} card={card} />
              ))
            : "Loading data..."}
        </ResponsiveGrid>
      </main>
    </div>
  );
}
