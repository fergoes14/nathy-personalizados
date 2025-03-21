import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import CardItem from "./CardItem"; // Importa o componente de card
import ImageModal from "./ImageModal"; // Importa o modal de imagem

function Trabalhos() {
  const [open, setOpen] = useState(false); // Estado para controlar a visibilidade do modal
  const [currentCategory, setCurrentCategory] = useState(null); // Categoria selecionada

  const handleOpen = (category) => {
    setCurrentCategory(category); // Define a categoria selecionada
    setOpen(true); // Abre o modal
  };

  const handleClose = () => {
    setOpen(false); // Fecha o modal
    setCurrentCategory(null); // Limpa a categoria
  };

  const works = [
    {
      descfix: "Caixas milk para festas",
      title: "Caixas Milk",
      images: [
        {
          image:
            "https://plus.unsplash.com/premium_photo-1668013523031-dcf7a5873f95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "1.",
        },
        {
          image:
            "https://plus.unsplash.com/premium_photo-1668013523031-dcf7a5873f95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "2.",
        },
        {
          image:
            "https://plus.unsplash.com/premium_photo-1668013523031-dcf7a5873f95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "3.",
        },
        {
          image:
            "https://plus.unsplash.com/premium_photo-1668013523031-dcf7a5873f95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "4.",
        },

        // Adicione mais imagens conforme necessário
      ],
    },
    {
      descfix: "Caixas piramede para festas",
      title: "Caixas Pirâmide",
      images: [
        {
          image:
            "https://plus.unsplash.com/premium_photo-1668013523031-dcf7a5873f95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Caixa pirâmide para casamento.",
        },
        {
          image:
            "https://plus.unsplash.com/premium_photo-1668013523031-dcf7a5873f95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Caixa pirâmide para evento corporativo.",
        },
        // Adicione mais imagens conforme necessário
      ],
    },
  ];

  return (
    <Box sx={{ padding: "40px 20px", background: "linear-gradient(135deg, #FFC1E3 30%, #FFD8B1 100%)", }}>
      <Grid container spacing={3} justifyContent="center">
        {works.map((work, index) => (
          <CardItem
            key={index}
            work={work}
            onClick={() => handleOpen(work)} // Passa a categoria para o modal
          />
        ))}
      </Grid>

      {/* Modal para exibir a imagem em tamanho grande */}
      {currentCategory && (
        <ImageModal
          open={open}
          handleClose={handleClose}
          currentCategory={currentCategory}
        />
      )}
    </Box>
  );
}

export default Trabalhos;
