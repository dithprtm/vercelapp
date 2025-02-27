import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix path views & public agar ditemukan dengan benar
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "../views"));
app.set("view engine", "ejs");

// ✅ Load file statis dari folder public/
app.use(express.static(join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index"); // Harus ada views/index.ejs
});

// Vercel butuh handler ini!
export default (req, res) => {
  return app(req, res);
};

