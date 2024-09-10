import React from 'react';
import { Grid2 as Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';

const products = [];

const ProductGrid = () => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={null}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
              <Button size="small" variant="contained">Купить</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export { ProductGrid };
