const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/Contact"); // model import

// 1️⃣ Create app FIRST
const app = express();

// 2️⃣ Middlewares
app.use(cors());
app.use(express.json());

// 3️⃣ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// 4️⃣ Routes (AFTER app is defined)
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

// 5️⃣ Start server (LAST)
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
