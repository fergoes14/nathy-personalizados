import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

function CardItem({ work, onClick }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={onClick} // Passa a função para abrir o modal
      >
        <Card sx={{ maxWidth: 345, minWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={work.images[0].image} // Usando a primeira imagem da categoria
            title={work.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {work.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {work.descfix} {/* Descrição da primeira imagem */}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}

export default CardItem;
