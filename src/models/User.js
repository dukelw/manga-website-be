const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "Users";

var userSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    user_email: {
      type: String,
      required: true,
    },
    user_avatar: {
      type: String,
      default: "",
    },
    user_password: {
      type: String,
      required: true,
    },
    user_birthday: {
      type: Date,
      default: new Date(),
    },
    user_gender: {
      type: String,
      default: "Male",
    },
    user_phone: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = {
  UserModel: model(DOCUMENT_NAME, userSchema),
};
