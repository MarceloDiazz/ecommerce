import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

import "../Home/columns.css"


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardsSearch({selectorCategory}) {
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(4);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className= "columnas"> 
        {selectorCategory?(
            selectorCategory.map((category,i)=>{
                return(
                    <Card sx={{ maxWidth: 345 } }>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={category.title}
        subheader= {category.location[0].provincia}  
      />
      <Link to ={`/products/${category._id}`}> 
      <CardMedia
        component="img"
        height="194"
        image={category.img}
        alt="Paella dish"
      />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Precio: $ {category.price}
        </Typography>
        <Box
      sx={{
        '& > legend': { mt: 4 },
      }}
    >
      
     
      </Box>
      </CardContent>
      <CardActions disableSpacing>
      <Typography component="legend">Ranting</Typography>
      <Rating name="read-only" value={value} readOnly />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>VENI!</Typography>
          
          <Typography paragraph>
          {category.description}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
                )
            })
        ) :<h1>no hay data</h1>
    }
    
    </div>
  );
}