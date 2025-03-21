import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Ícones de email e WhatsApp

function Contact() {
  const handleWhatsAppClick = () => {
    const message = "Olá, peguei seu contato no portfólio!";
    const phoneNumber = "15998298054"; // Número de telefone no formato internacional sem espaços
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f1e3", // Cor suave de fundo
        padding: "40px 20px",
        borderRadius: "10px",
        boxShadow: 3, // Adicionando sombra para dar profundidade
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "'Lilita One', sans-serif" }}
      >
        Entre em Contato
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "30px", fontStyle: "italic" }}
      >
        Fique à vontade para mandar uma mensagem! Estamos sempre prontos para
        conversar sobre projetos e outras oportunidades.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Ícone e link do Instagram */}
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: "20px", textAlign: "center" }}>
            <FaInstagram style={{ fontSize: "40px", color: "#8A2BE2" }} />{" "}
            {/* Cor roxa para o ícone */}
            <Typography
              variant="h6"
              sx={{ marginTop: "15px", fontWeight: "bold" }}
            >
              Instagram
            </Typography>
            <Typography variant="body1" sx={{ color: "#333" }}>
              @nathy.personalizados21
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: "20px", textAlign: "center" }}>
            <FaWhatsapp style={{ fontSize: "40px", color: "#25D366" }} />
            <Typography
              variant="h6"
              sx={{ marginTop: "15px", fontWeight: "bold" }}
            >
              WhatsApp
            </Typography>
            <Typography variant="body1" sx={{ color: "#333" }}>
              (15) 99829-8054
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Button
        onClick={handleWhatsAppClick}
        variant="contained"
        sx={{
          marginTop: "30px",
          backgroundColor: "#FF69B4", // Cor de fundo do botão
          color: "#fff",
          "&:hover": {
            backgroundColor: "#8B008B", // Cor de fundo ao passar o mouse
          },
          fontWeight: "bold",
          padding: "10px 20px",
        }}
      >
        Entrar em Contato
      </Button>
    </Box>
  );
}

export default Contact;
