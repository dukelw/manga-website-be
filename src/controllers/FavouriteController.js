const FavouriteService = require("../services/favourite");
const { SuccessResponse } = require("../core/success-response");

class FavouriteController {
  async create(req, res, next) {
    const { userID, mangaID } = req.body;
    new SuccessResponse({
      message: "Save favourite successfully",
      metadata: await FavouriteService.create({
        userID,
        mangaID,
      }),
    }).send(res);
  }

  async find(req, res, next) {
    const { userID, mangaID } = req.query;
    new SuccessResponse({
      message: "Get favourite successfully",
      metadata: await FavouriteService.find(userID, mangaID),
    }).send(res);
  }

  async findAll(req, res, next) {
    const ID = req.params.id;
    new SuccessResponse({
      message: "Get all favourite successfully",
      metadata: await FavouriteService.findAll(ID),
    }).send(res);
  }

  async delete(req, res, next) {
    const { userID, mangaID } = req.body;
    new SuccessResponse({
      message: "Delete favourite successfully",
      metadata: await FavouriteService.delete(userID, mangaID),
    }).send(res);
  }

  async deleteAll(req, res, next) {
    const ID = req.params.id;
    new SuccessResponse({
      message: "Delete all favourite successfully",
      metadata: await FavouriteService.deleteAll(ID),
    }).send(res);
  }
}

module.exports = new FavouriteController();
