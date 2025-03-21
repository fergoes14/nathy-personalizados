import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";

function Sobre() {
  return (
    <Card
      sx={{
        position: "relative", // Permite sobreposição
        width: "90%",
        maxWidth: { xs: 360, sm: 500, md: 600 },
        background: "linear-gradient(135deg, #FFC1E3 30%, #FFD8B1 100%)",
        borderRadius: "16px",
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
        padding: { xs: "15px", md: "20px" },
        textAlign: "center",
        margin: "auto",
        overflow: "hidden", // Evita que a logo ultrapasse o card
      }}
    >
      {/* Box para imagem de fundo */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('https://i.imgur.com/pTF0RAD.png')", // Caminho da logo
          backgroundSize: "100%", // Ajuste conforme necessário
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3, // Define a transparência
          zIndex: 1, // Mantém a logo atrás do conteúdo
        }}
      />

      {/* Conteúdo do card */}
      <CardContent sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Pacifico', cursive",
            color: "#D81B60",
            marginBottom: "10px",
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
          }}
        >
          Olá, seja bem-vindo!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem" },
            color: "#5C2C6D",
            fontFamily: "'Poppins', sans-serif",
            textAlign: "justify",
          }}
        >
          Sou <strong>Nathalia</strong>, fundadora da{" "}
          <strong>Nathy Personalizados</strong>. Mãe da Alice, de 4 anos, e do
          Felipe, de 2 anos, sempre tive uma grande paixão por trabalhos manuais
          e pela arte de criar com papel. Com mais de 3 anos de experiência no
          ramo da papelaria personalizada, encontrei na minha paixão a
          oportunidade de empreender.{" "}
          <FavoriteIcon sx={{ color: "#E91E63", fontSize: "1.3rem" }} />
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem" },
            color: "#5C2C6D",
            fontFamily: "'Poppins', sans-serif",
            textAlign: "justify",
            marginTop: "10px",
          }}
        >
          A <strong>Nathy Personalizados</strong> é dedicada a criar peças
          únicas e cuidadosamente elaboradas, oferecendo produtos que atendem às
          necessidades e desejos de nossos clientes com um toque pessoal e
          exclusivo.
        </Typography>

        <Box sx={{ marginTop: "15px", textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              color: "#333",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Siga-nos no Instagram e acompanhe nossas novidades!
          </Typography>
          <InstagramIcon sx={{ color: "#E4405F", fontSize: "2rem" }} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Sobre;
