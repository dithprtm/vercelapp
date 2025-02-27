import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

// Mendapatkan path absolute
const __dirname = dirname(fileURLToPath(import.meta.url));

// ✅ Pastikan Express menemukan folder public
app.use(express.static(join(__dirname, "../public")));

app.set("views", join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index"); // Harus ada views/index.ejs
});

// Handler untuk Vercel
export default (req, res) => {
  return app(req, res);
};
