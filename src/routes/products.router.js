import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/products.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// PUBLIC
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// PROTECTED
router.post("/create", authMiddleware, createProduct);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

export default router;