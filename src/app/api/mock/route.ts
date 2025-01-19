import { UpdateServerStatusOfCard, mockData } from "@/app/data/mockServers";
import { NextResponse } from "next/server";

export const GET = () => NextResponse.json(mockData);

export async function POST(request: Request) {
  const body = await request.json();
  const { id } = body;
  if (!id) throw new Error("Something wrong with the card id");

  try {
    const updatedCard = UpdateServerStatusOfCard(parseInt(id));
    return Response.json({
      result: "SUCCESS",
      data: updatedCard,
      message: `Card status with id ${id} successfully changed`,
    });
  } catch (error) {
    return Response.json({
      result: "FAILED",
      data: [],
      message: `Card status with id ${id} failed with ${error}`,
    });
  }
}
