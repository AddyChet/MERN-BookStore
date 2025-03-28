import express from "express"
import { postBook, getAllBooks, getSingleBook, updateBook, deleteABook} from "./book.controller.js";

const router = express.Router()

router.post("/create-book", postBook)
router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.put("/edit/:id", updateBook);
router.delete("/:id", deleteABook)
export default router;