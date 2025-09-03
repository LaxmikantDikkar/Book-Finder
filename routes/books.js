import express from "express";
import axios from "axios";
import Favorite from "../models/Favorite.js";

const router = express.Router();

// 🔍 Search books
router.get("/", async (req, res) => {

  const { title, author, isbn, subject } = req.query;
  let query = "";

  if (title) query += `title=${title}&`;
  if (author) query += `author=${author}&`;
  if (isbn) query += `isbn=${isbn}&`;
  if (subject) query += `subject=${subject}&`;

  try {
    const response = await axios.get(`https://openlibrary.org/search.json?${query}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// ⭐ Save favorite
router.post("/favorite", async (req, res) => {
  try {
    const favorite = new Favorite(req.body);
    await favorite.save();
    res.json(favorite);
  } catch (err) {
    res.status(500).json({ error: "Failed to save favorite" });
  }
});

// 📚 Get favorites
router.get("/favorites", async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
});

export default router;
