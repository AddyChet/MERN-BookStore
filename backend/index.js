import express from "express";
import "dotenv/config";
import connectToDb from "./utils/connectToDb.js";
import bookRoutes from "./src/books/book.route.js"
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(cors({
    origin: "http:localhost:5173",
    Credential : true
}))

app.use("/api/books", bookRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToDb()
});
