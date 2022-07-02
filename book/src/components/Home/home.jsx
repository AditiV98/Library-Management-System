import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [books, SetBook] = useState([]);
  useEffect(() => {
    loadBooks();
  }, []);
  const loadBooks = async () => {
    const result = await axios.get("http://localhost:4000/books");
    SetBook(result.data);
  };

  const [favs, SetFav] = useState([]);
  useEffect(() => {
    loadFavs();
  }, []);
  const loadFavs = async () => {
    const result = await axios.get("http://localhost:4000/favourites");
    SetFav(result.data);
  };
  return (
    // <Box component="span" style={{ backgroundColor: "blue" }}>
    //   <h1>All Books</h1>
    //   <Container
    //     maxWidth="sm"
    //     sx={{
    //       border: "1px solid black",
    //     }}
    //   >
    //     <ol>
    //       {books.map((book, index) => (
    //         <li key={index}>{book.BookName}</li>
    //       ))}
    //     </ol>
    //   </Container>
    // </Box>
    <Box>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1>All Books</h1>
          <Container
            maxWidth="sm"
            sx={{
              border: "1px solid black",
            }}
          >
            <ol>
              {books.map((book, index) => (
                <li key={index}>{book.BookName}</li>
              ))}
            </ol>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <h1>Favourite Books</h1>
          <Container
            maxWidth="sm"
            sx={{
              border: "1px solid black",
            }}
          >
            <ol>
              {favs.map((fav, index) => (
                <li key={index}>{fav.BookName}</li>
              ))}
            </ol>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
