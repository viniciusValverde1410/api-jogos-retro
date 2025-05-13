import express from "express"

import RecordController from "../controllers/record.controller.js"

const recordRouter = express.Router();

recordRouter.get("/", RecordController.findAll);

recordRouter.post("/", RecordController.create);

export default recordRouter;