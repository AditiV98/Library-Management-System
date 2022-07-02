import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ m: 3 }}>
            <Link
              to="home"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "25pt",
              }}
            >
              {" "}
              MyBooks
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ m: 3 }}>
            <Link
              to="add-books"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add Books
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ m: 3 }}>
            <Link
              to="manage-books"
              style={{ textDecoration: "none", color: "white" }}
            >
              Manage Books
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
