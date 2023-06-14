import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ActionAreaCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
    >
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 10px",
          border: selectedCard === 0 ? "1px solid green" : "none",
        }}
      >
        <CardActionArea onClick={() => handleCardSelect(0)}>
          <CardMedia
            component="img"
            height="140"
            // image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Small-Sized Bus
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capacity up to 10
            </Typography>
          </CardContent>
        </CardActionArea>
        {selectedCard === 0 && <input type="checkbox" checked />}
      </Card>

      <Card
        sx={{
          maxWidth: 345,
          margin: "0 10px",
          border: selectedCard === 1 ? "1px solid green" : "none",
        }}
      >
        <CardActionArea onClick={() => handleCardSelect(1)}>
          <CardMedia
            component="img"
            height="140"
            // image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Medium-Sized Bus
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capacity up to 28
            </Typography>
          </CardContent>
        </CardActionArea>
        {selectedCard === 1 && <input type="checkbox" checked />}
      </Card>

      <Card
        sx={{
          maxWidth: 345,
          margin: "0 10px",
          border: selectedCard === 2 ? "1px solid green" : "none",
        }}
      >
        <CardActionArea onClick={() => handleCardSelect(2)}>
          <CardMedia
            component="img"
            height="140"
            // image="/static/images/cards/contemplative-reptile.jpg"
            alt="Medium-Sized Bus"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Large-Sized Bus
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capacity up to 50
            </Typography>
          </CardContent>
        </CardActionArea>
        {selectedCard === 2 && <input type="checkbox" checked />}
      </Card>
    </div>
  );
};

export default ActionAreaCard;
