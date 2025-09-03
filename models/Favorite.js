import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  title: String,
  author: String,
  coverUrl: String,
  key: String
});

export default mongoose.model("Favorite", favoriteSchema);
