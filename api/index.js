import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// Pastikan Express bisa menemukan views
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", __dirname + "/../views");

app.get("/", (req, res) => {
  res.render("index"); // Pastikan views/index.ejs ada!
});

// Export sebagai handler untuk Vercel
export default app;
