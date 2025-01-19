import { mockData } from "@/app/data/mockServers";
import { NextResponse } from "next/server";

export const GET = () => NextResponse.json(mockData);
