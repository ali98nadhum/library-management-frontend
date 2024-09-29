// CategoryTable.jsx
import React, { useEffect } from "react";
import { useStore } from "../../store";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const CategoryTable = () => {
  const categoryData = useStore((state) => state.categoryData);
  const fetchCategory = useStore((state) => state.fetchCategory);

  useEffect(() => {
    if (categoryData.length === 0) {
      fetchCategory();
    }
  }, [fetchCategory, categoryData]);

  return (
    <div>
        {categoryData.map((item) => (

            <div class="book-card">
              <img
                src={item.image.url}
                alt="مهزله العقل البشري"
                class="book-image"
              />
              <div class="book-details">
                <h3 class="book-title"> {item.title} </h3>
                <p class="book-author"> {item.author} </p>
                <p class="book-price">السعر: {item.price} دينار</p>
                <p class="book-quantity">الكمية المتوفرة: {item.quantity}</p>
                <p class="book-status">الحالة: جديد</p>
                <p class="book-pages">عدد الصفحات: {item.totalpage}</p>
                <p class="book-published">تاريخ النشر: {item.publishedDate}</p>
              </div>
              <button class="book-button">إضافة إلى السلة</button>
            </div>
            
        ))}
    </div>
  );
};

export default CategoryTable;
