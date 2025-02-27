import express from "express";
import { createServer } from "@vercel/node";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");

// Atur folder views & public agar bisa digunakan
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Tidak pakai app.listen(), karena Vercel hanya mendukung serverless function
export default createServer(app);
  