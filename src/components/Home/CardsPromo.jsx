import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imgCordoba from "../assets/cordoba2.jpg"
 
export default function CardsPromo() {
  return (
    
    
    <div>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imgCordoba}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Cordoba
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cordoba ofrece lugares tales como...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/assets/commons/cordoba2.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Bariloche
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bariloche ofrece lugares tales como...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      
    </div>
    
    
    
  );
}