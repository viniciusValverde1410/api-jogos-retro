import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";

import authMiddleware from "../middleware/authMiddleware.js";

import gameRouter from "./games.routes.js" 
import recordRouter from "./record.routes.js" 

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/games", gameRouter)
router.use("/records", recordRouter)

// Rotas protegidas
router.use(authMiddleware);

export default router;