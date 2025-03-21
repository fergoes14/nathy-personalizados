import React, { useState } from "react";
import { Modal, IconButton, Box, Button, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

function ImageModal({ open, handleClose, currentCategory }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Índice da imagem atual

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % currentCategory.images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex =
      (currentIndex - 1 + currentCategory.images.length) %
      currentCategory.images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "black",
          }}
        >
          <Close />
        </IconButton>

        <img
          src={currentCategory.images[currentIndex].image}
          alt="Imagem ampliada"
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            borderRadius: "8px",
          }}
        />
        <Typography
          variant="h6"
          sx={{ marginTop: "10px", textAlign: "center" }}
        >
          {currentCategory.images[currentIndex].description}
        </Typography>

        {/* Navegação para a próxima e anterior imagem */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Button onClick={handlePrevImage} variant="contained" color="primary">
            Anterior
          </Button>
          <Button onClick={handleNextImage} variant="contained" color="primary">
            Próxima
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ImageModal;
