const express = require('express');
const router = express.Router();
const { body} = require('express-validator');
const productController = require('../../../controllers/api/v1/product-controller')

router.post('/create', [
    body("name").not().isEmpty().withMessage("Name is Empty"),
    body("quantity").isFloat({ gt: -1 }).withMessage("Quantity cannot be negative"),
    body("price").isFloat({ gt: 0 }).withMessage("Price should be greater than 0"),
    body("description").notEmpty().withMessage("Description empty")

],
    productController.createProduct
);

router.get('/all', productController.getProduct);

router.patch('/update/:id',[
      body("name").not().isEmpty().withMessage("Name is Empty"),
    body("quantity").isFloat({ gt: -1 }).withMessage("Quantity cannot be negative"),
    body("price").isFloat({ gt: 0 }).withMessage("Price should be greater than 0"),
    body("description").notEmpty().withMessage("Description empty")
],
    productController.updateProduct);

router.delete("/delete/:id",
    productController.deleteProduct
    );


module.exports = router;