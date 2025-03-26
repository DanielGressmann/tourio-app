import dbConnect from "@/db/models/connect.js";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  // const place = places.find((place) => place.id === id);
  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      response.status(404).json({ status: "Not found" });
      return;
    }

    if (request.method === "PUT") {
      const place = await Place.findById(id);
      response.status(200).json(place);
    }
    response.status(405).json({ status: "Method not allowed" });
  }
}
