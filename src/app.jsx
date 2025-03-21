import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Sobre from "./components/About";
import Contact from "./components/Contact";
import Jobs from "./components/Jobs";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('https://i.imgur.com/P6e55Hn.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh", // Garantir que o Box ocupe 100% da altura da tela
        margin: 0, // Remover margens extras
        padding: 0, // Remover paddings extras
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/trabalhos" element={<Jobs />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Box>
  );
};

export default App;
