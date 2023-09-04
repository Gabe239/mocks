import express from 'express';
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller.js';
import { adminAuthorize, userAuthorize } from '../middlewares/auth.middleware.js';
import errorHandlerMiddleware from '../middlewares/errors/error.middleware.js';

const router = express.Router();

router.get('/',  errorHandlerMiddleware, getProducts);
router.get('/:pid', errorHandlerMiddleware, getProductById);
router.post('/',  errorHandlerMiddleware, addProduct);
router.put('/:pid', errorHandlerMiddleware, adminAuthorize, updateProduct);
router.delete('/:pid', errorHandlerMiddleware, adminAuthorize, deleteProduct);



export default router;