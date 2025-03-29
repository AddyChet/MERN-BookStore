import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useFetchAllBooksQuery } from "../../redux/books/booksApi";

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const {data : books = []} = useFetchAllBooksQuery()

  const filterBooks =
    selectedCategory === "" || selectedCategory === "Choose a genre"
      ? books
      : books.filter((book) => book.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="py-10 px-5 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      {/* Genre Dropdown */}
      <div className="mb-8">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Swiper Component */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Navigation]}
        className="relative"
      >
        {filterBooks.length > 0 &&
          filterBooks.map((book, i) => (
            <SwiperSlide key={i}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}

        {/* Swiper Navigation Buttons */}
    
        <div className="swiper-button-next !absolute right-0 bg-white border text-white p-3 rounded-full"></div>
      </Swiper>
    </div>
  );
};

export default TopSellers;
