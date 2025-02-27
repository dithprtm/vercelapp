import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index"); // Pastikan ada file views/index.ejs
});

// Tambahkan ini agar Vercel bisa menjalankan Express
import { createServer } from "http";
const server = createServer(app);

export default server;
