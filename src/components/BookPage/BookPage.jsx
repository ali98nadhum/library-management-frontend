// BookPage.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Container from '../../utils/Container/Container';

const books = [
  { id: 1, name: 'الكتاب الأول', price: 15000, available: 10 },
  { id: 2, name: 'الكتاب الثاني', price: 20000, available: 5 },
  { id: 3, name: 'الكتاب الثالث', price: 25000, available: 3 },
];

const BookPage = () => {
  const handleEdit = (id) => {
    console.log(`Edit book with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete book with ID: ${id}`);
  };

  const handleView = (id) => {
    console.log(`View book with ID: ${id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{textAlign: "center", marginBottom: "20px" , marginTop: "20px"}}>الكتب المتوفرة</h2>
      <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>اسم الكتاب</TableCell>
              <TableCell>سعر الكتاب (دينار)</TableCell>
              <TableCell>العدد المتوفر</TableCell>
              <TableCell align="center">العمليات</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.price}</TableCell>
                <TableCell>{book.available}</TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => handleEdit(book.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(book.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton color="success" onClick={() => handleView(book.id)}>
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </div>
  );
};

export default BookPage;
