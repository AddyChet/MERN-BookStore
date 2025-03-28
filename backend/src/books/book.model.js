import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  trending: {
    type: Boolean,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  oldPrice: Number,
  newPrice: Number,
}, {timestamps : true});

export const Book = mongoose.model("Book", bookSchema)
