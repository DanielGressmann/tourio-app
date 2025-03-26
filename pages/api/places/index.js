import mongoose from "mongoose";
import dbConnect from "@/db/models/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  }

  if (request.method === "POST") {
    const placeData = request.body;
    await Place.create(placeData);
    return response.status(200).json(placeData);
  }
  response.status(405).json({ message: "Method not allowed" });
}
