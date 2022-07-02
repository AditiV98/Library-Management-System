import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import axios from "axios";

const CardBook = ({ books }) => {
  let { name } = useParams();

  const deleteTask = (id) => {
    console.log(id);
    return axios.delete(`${"http://localhost:4000/books"}/${id}`);
  };

  // const favouriteBook = (id) => {
  //   return axios.post("http://localhost:4000/favourites", id);
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <br></br>
      <br></br>

      {books
        .filter((book) => book.BookName === name)
        .map((book, index) => (
          <Grid
            container
            spacing={2}
            key={index}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
                    {book.BookName}
                  </Typography>
                  <Typography variant="body2">
                    <p>Author: {book.BookAuthor}</p>
                  </Typography>
                  <Typography variant="body2">
                    <p>Genre: {book.Genre}</p>
                  </Typography>
                  <Typography variant="body2">
                    <p>Availability: {book.Availability}</p>
                  </Typography>
                  <Typography variant="body2">
                    <p>Published Date: {book.PublishedDate}</p>
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    color="error"
                    size="small"
                    variant="contained"
                    onClick={() => deleteTask(book.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={() => {
                      console.log(book);
                      axios.post("http://localhost:4000/favourites", book);
                    }}
                  >
                    Favourite
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))}
    </Box>
  );
};

export default CardBook;
