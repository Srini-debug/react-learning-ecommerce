const express = require("express");

const {
  handleImageUpload,
  addProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} = require("../../controllers/admin/products-controller");

const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

// POST request is made to /products/upload-image with a file under the my_file field

// The upload middleware processes the file, uploads it to Cloudinary, and attaches the result to the request object.

router.post(
  "/upload-image",
  upload.single("my_file"),
  handleImageUpload
);

router.post("/add", addProduct);
router.put("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get", fetchAllProducts);

module.exports = router;
