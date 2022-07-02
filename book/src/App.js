import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import AddBooks from "./components/AddBooks/addBooks";
import ManageBooks from "./components/ManageBooks/manageBooks";
import CardBook from "./components/CardBook/cardBook";

function App() {
  const [books, SetBook] = useState([]);
  useEffect(() => {
    loadBooks();
  }, []);
  const loadBooks = async () => {
    const result = await axios.get("http://localhost:4000/books");
    SetBook(result.data);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="add-books" element={<AddBooks></AddBooks>}></Route>
          <Route
            path="manage-books"
            element={<ManageBooks></ManageBooks>}
          ></Route>
          <Route
            path="/manage-books/:name"
            element={<CardBook books={books}></CardBook>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
