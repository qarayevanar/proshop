import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsById,
} from "../controllers/productController.js";

router.route("/").get(getProducts); //GET all products

router.route("/:id").get(getProductsById); //GET product by ID

export default router;
