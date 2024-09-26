const express = require("express");
const router = express.Router();
const favouriteController = require("../controllers/FavouriteController");
const asyncHandler = require("../helpers/async-handler");

router.get("/find", asyncHandler(favouriteController.find));
router.get("/find-all/:id", asyncHandler(favouriteController.findAll));
router.delete("/", asyncHandler(favouriteController.delete));
router.delete("/:id", asyncHandler(favouriteController.deleteAll));
router.post("/", asyncHandler(favouriteController.create));

module.exports = router;
