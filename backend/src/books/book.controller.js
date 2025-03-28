import mongoose from "mongoose";
import { Book } from "./book.model.js";

export const postBook = async (req, res) => {
  try {
    const { title } = req.body;
    const existingBook = await Book.findOne({ title });
    if (existingBook)
      return res
        .status(400)
        .json({ message: "Book with Title already exists" });

    const book = await Book.create(req.body);
    return res.status(201).json({ message: "Book created", book });
  } catch (error) {
    console.error("Error fetching books", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    return res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching books", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

export const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Please enter a valid id" });
    }

    const book = await Book.findById(id);
    if (!book)
      return res.status(404).json({ message: "Book with Id not available" });
    return res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching books", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Please enter a valid id" });
    }

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook)
      return res.status(404).json({ message: "Book with Id not available" });
    return res.status(200).send({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.error("Error fetching books", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

export const deleteABook = async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "Please enter a valid id" });
      }
  
      const deleteBook = await Book.findByIdAndDelete(id)
      if (!deleteBook)
        return res.status(404).json({ message: "Book with Id not available" });
      return res.status(200).send({
        message: "Book deleted successfully",
        book: deleteBook,
      });
    } catch (error) {
      console.error("Error fetching books", error);
      res.status(500).send({ message: "Failed to fetch books" });
    }
  };
  

