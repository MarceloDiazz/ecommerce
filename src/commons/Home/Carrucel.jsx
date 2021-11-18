import React, { Component } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import imgCordoba from "../../assets/cordoba2.jpg";
import imgBariloche from "../../assets/bariloche.jpg";
import imgBuenosAires from "../../assets/buenosAires.jpg";
import imgJujuy from "../../assets/jujuy.jpg";
import imgSanJuan from "../../assets/San-Juan.jpg";
import imgTierraDelFuego from "../../assets/tierra-del-fuego-1.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default class AutoPlayMethods extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        return (
            <div>
                <Slider ref={(slider) => (this.slider = slider)} {...settings}>
                    <div>
                        <Card sx={{ maxWidth: 345 , boxShadow: 3 }}>
                            <CardMedia component="img" height="250" image={imgCordoba} alt="green iguana" />
                            <CardContent >
                                <Typography gutterBottom variant="h6" component="div">
                                    Cordoba
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Cordoba ofrece lugares tales como...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" component={Link} to="/info/province/cordoba">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                            <CardMedia component="img" height="250" image={imgBariloche} alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Bariloche
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Bariloche ofrece lugares tales como...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" component={Link} to="/info/city/bariloche">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                            <CardMedia component="img" height="250" image={imgBuenosAires} alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Buenos Aires
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Buenos Aires ofrece lugares tales como...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" component={Link} to="/info/city/buenos aires">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                            <CardMedia component="img" height="250" image={imgJujuy} alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Jujuy
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Jujuy ofrece lugares tales como...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                            <CardMedia component="img" height="250" image={imgSanJuan} alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    San juan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    San juan ofrece lugares tales como...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" component={Link} to="/info/province/san juan">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                            <CardMedia component="img" height="250" image={imgTierraDelFuego} alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Tierra Del Fuego
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tierra Del Fuego ofrece lugares tales como...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Slider>
            </div>
        );
    }
}
