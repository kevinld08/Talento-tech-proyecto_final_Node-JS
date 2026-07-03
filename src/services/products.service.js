import * as productModel from "../models/product.model.js";

export const getProducts = () => productModel.getAll();

export const getProduct = (id) => productModel.getById(id);

export const createProduct = (data) => productModel.create(data);

export const updateProduct = (id, data) => productModel.update(id, data);

export const deleteProduct = (id) => productModel.remove(id);