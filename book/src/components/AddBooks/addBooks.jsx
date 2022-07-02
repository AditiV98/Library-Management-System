// const AddBooks = () => {
//   return (
//     <div>
//       <p>Books</p>
//     </div>
//   );
// };
// export default AddBooks;

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Container from "@mui/material/Container";

const AddBooks = (props) => {
  const [book, SetBook] = useState({
    BookName: "",
    BookAuthor: "",
    Genre: "",
    Availability: "",
    PublishedDate: "",
  });

  const handleOnChange = (e) => {
    let ele = e.target.name;
    SetBook({ ...book, [ele]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/books", book);
  };

  return (
    <Box component="span">
      <br></br>
      <br></br>
      <Container
        maxWidth="sm"
        sx={{
          border: "1px solid black",
        }}
      >
        <br></br>
        <br></br>
        <TextField
          name="BookName"
          id="outlined-basic"
          onChange={handleOnChange}
          label="Book Name"
          value={book.BookName}
          variant="outlined"
          autoComplete="off"
        />
        <br></br>
        <br></br>
        <TextField
          autoComplete="off"
          name="BookAuthor"
          id="outlined-basic"
          onChange={handleOnChange}
          label="Book Author"
          value={book.BookAuthor}
          variant="outlined"
        />
        <br></br>
        <br></br>
        <TextField
          autoComplete="off"
          name="Genre"
          id="outlined-basic"
          onChange={handleOnChange}
          label="Genre"
          value={book.Genre}
          variant="outlined"
        />
        <br></br>
        <br></br>
        <TextField
          autoComplete="off"
          name="Availability"
          id="outlined-basic"
          onChange={handleOnChange}
          label="Availability"
          value={book.Availability}
          variant="outlined"
        />
        <br></br>
        <br></br>
        <TextField
          type="date"
          name="PublishedDate"
          id="outlined-basic"
          onChange={handleOnChange}
          label="Published Date"
          value={book.PublishedDate}
          variant="outlined"
        />
        <br></br>
        <br></br>
        <Button variant="contained" onClick={handleClick}>
          Save
        </Button>
        <br></br>
        <br></br>
      </Container>
    </Box>
  );
};
export default AddBooks;
