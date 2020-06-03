import { Router } from "express";

import PointsController from "./controllers/PointsController";
import ItemsCOntroller from "./controllers/ItemsController";

const pointsController = new PointsController();
const itemsController = new ItemsCOntroller();

const router = Router();

// index, show, create, update, delete
router.get(`/items`, itemsController.index);

router.post("/points", pointsController.create);
router.get("/points/:id", pointsController.show);
router.get("/points", pointsController.index);

export default router;
