import * as productService from "../services/products.service.js";


export const getAllProducts = async (req, res) => {
  const data = await productService.getProducts();
  res.json(data);
};


export const getProductById = async (req, res) => {
  const data = await productService.getProduct(req.params.id);

  if (!data) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(data);
};


export const createProduct = async (req, res) => {
  const data = await productService.createProduct(req.body);
  res.status(201).json(data);
};


export const updateProduct = async (req, res) => {
  const data = await productService.updateProduct(
    req.params.id,
    req.body
  );

  res.json(data);
};

// DELETE
export const deleteProduct = async (req, res) => {
  await productService.deleteProduct(req.params.id);
  res.json({ message: "Producto eliminado" });
};