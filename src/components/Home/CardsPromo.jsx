import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imgCordoba from "../../assets/cordoba2.jpg"
import imgBariloche from "../../assets/bariloche.jpg"
import imgBuenosAires from "../../assets/buenosAires.jpg"
import Stack from '@mui/material/Stack';

export default function CardsPromo() {
  return (
    
    
    <div>
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={1}
>
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
          image={imgBariloche}
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
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imgBuenosAires}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Buenos Aires
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Buenos Aires ofrece lugares tales como...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Stack>
    </div>
    
    
    
  );
}