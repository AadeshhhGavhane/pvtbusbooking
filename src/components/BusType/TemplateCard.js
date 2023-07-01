import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";

const ActionAreaCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        marginTop: "0.5px",
        padding: "50px",
        top: "5px",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 10px",
          border: selectedCard === 0 ? "1px solid green" : "none",
        }}
      >
        <CardActionArea onClick={() => handleCardSelect(0)}>
          <div style={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
              alt="green iguana"
            />
            {selectedCard === 0 && (
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                }}
                size="big"
              >
                <CheckCircleIcon sx={{ color: "green" }} />
              </IconButton>
            )}
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Small-Sized Bus
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Capacity up to 10
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Repeat the same pattern for other cards */}
      {/* Card 2 */}
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 10px",
          border: selectedCard === 1 ? "1px solid green" : "none",
        }}
      >
        <CardActionArea onClick={() => handleCardSelect(1)}>
          <div style={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
              alt="green iguana"
            />
            {selectedCard === 1 && (
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                }}
                size="small"
              >
                <CheckCircleIcon sx={{ color: "green" }} />
              </IconButton>
            )}
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Medium-Sized Bus
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Capacity up to 28
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Card 3 */}
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 10px",
          border: selectedCard === 2 ? "1px solid green" : "none",
        }}
      >
        <CardActionArea onClick={() => handleCardSelect(2)}>
          <div style={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
              alt="green iguana"
            />
            {selectedCard === 2 && (
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                }}
                size="small"
              >
                <CheckCircleIcon sx={{ color: "green" }} />
              </IconButton>
            )}
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Large-Sized Bus
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Capacity up to 50
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ActionAreaCard;
