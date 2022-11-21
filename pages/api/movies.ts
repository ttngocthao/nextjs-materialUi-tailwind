import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
const dbInstance = "nextjs-mongo-ex";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db(dbInstance);

    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};
