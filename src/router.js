const express = require("express");

const router = express.Router();

const ProductsController = require('./controllers/ProductController');

router.get("/products", ProductsController.index);
router.get("/products/:id", ProductsController.show);
router.post("/products", ProductsController.store);
router.put("/products/:id", ProductsController.update);
router.delete("/products/:id", ProductsController.destroy);

module.exports = router;