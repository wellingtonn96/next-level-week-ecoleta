import knex from "../database/connection";
import { Request, Response } from "express";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");

    const serialazedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://10.0.0.111:3333/uploads/${item.image}`,
      };
    });

    return response.json(serialazedItems);
  }
}

export default ItemsController;
