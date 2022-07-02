import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// const handleClick = ({ name }) => {
//   console.log(name.id);
// };

const ManageBooks = () => {
  const [books, SetBook] = useState([]);
  useEffect(() => {
    loadBooks();
  }, []);
  const loadBooks = async () => {
    const result = await axios.get("http://localhost:4000/books");
    SetBook(result.data);
  };
  return (
    <Box component="span">
      <h1>All Books</h1>
      <Container
        maxWidth="sm"
        // sx={{
        //   border: "1px solid black",
        // }}
      >
        {/* <ol>
          {books.map((book, index) => (
            <li key={book.id}>
              <Box sx={{ flexGrow: 1 }} key={book.id}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    {book.BookName}
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      size="small"
                      variant="contained"
                      type="button"
                      onClick={() => {
                        console.log(book.id);
                      }}
                    >
                      <Link
                        to={`/manage-books/${book.BookName}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        {" "}
                        Manage
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <br></br>
            </li>
          ))}
        </ol> */}
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: "15pt" }}> Sr. No.</TableCell>
                <TableCell style={{ fontSize: "15pt" }}> Book</TableCell>
                <TableCell style={{ fontSize: "15pt" }}>Manage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book, index) => (
                <TableRow key={book.id}>
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell align="left">{book.BookName}</TableCell>
                  <TableCell align="left">
                    {" "}
                    <Button
                      size="small"
                      variant="contained"
                      type="button"
                      onClick={() => {
                        console.log(book.id);
                      }}
                    >
                      <Link
                        to={`/manage-books/${book.BookName}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        {" "}
                        Manage
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Outlet></Outlet>
    </Box>
  );
};
export default ManageBooks;
