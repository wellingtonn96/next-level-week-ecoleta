import { Router } from "express";
import knex from "./database/connection";
const router = Router();

router.get(`/items`, async (request, response) => {
  const items = await knex("items").select("*");

  const serialazedItems = items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });

  return response.json(serialazedItems);
});

router.post("/points", async (request, response) => {
  const {
    name,
    email,
    whatsapp,
    longitude,
    latitude,
    city,
    uf,
    items,
  } = request.body;

  const trx = await knex.transaction();

  const insertIds = await trx("points").insert({
    image: "image-fake",
    name,
    email,
    whatsapp,
    longitude,
    latitude,
    city,
    uf,
  });

  const point_id = insertIds[0];

  const pointItems = items.map((item_id: number) => {
    return {
      item_id,
      point_id,
    };
  });

  await trx("point_items").insert(pointItems);

  return response.json({ success: true });
});

export default router;
