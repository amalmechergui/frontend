import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, CardMedia, Button, Typography, IconButton, Grid } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const CardPage = ({ mycars }) => {
  return (
    <Grid container spacing={3}>
      {mycars?.map((el, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 250 }}
              image={el.ImgUrl}
              title={el.Brand}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.Brand}
              </Typography>
              <Typography gutterBottom component="div">
                <span style={{ fontWeight: 'bold' }}> {el.Model}</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span style={{ fontWeight: 'bold' }}> 12 TND</span>
                <br />
                <span style={{ textDecoration: 'line-through', color: 'red' }}> 10 TND </span>
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'space-between', marginTop: 'auto' }}>
              <IconButton
                style={{ backgroundColor: 'black', color: 'white' }}
                aria-label="add to cart"
              >
                <AddShoppingCart />
              </IconButton>
              <Button
                style={{ backgroundColor: 'red', color: 'white', borderRadius: '20px' }}
                variant="contained"
                component={Link}
                to={`/details/${el._id}`} // Change this to the appropriate route
              >
                Show more
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardPage;
