import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Paper, Container, Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ivoryf from "../../layout/ivoryf.jpg";
import caroa from "../../layout/caroa.jpg"
import carob from "../../layout/carob.jpg"
import Slide from "react-reveal/Slide"

const useStyles = makeStyles((theme) => {
  return{
    root: {
            maxWidth: 350,
            padding: theme.spacing(2),  
             [theme.breakpoints.down('md')]: {
              marginBottom: theme.spacing(10),
              maxWidth: 365
             }
          },
          media1: {
            height: 140,
            backgroundImage: `url(${carob})`
          },
          media2: {
            height: 140,
            backgroundImage: `url(${caroa})`
          },
          media3: {
            height: 140,
            backgroundImage: `url(${ivoryf})`
          },
      container:{
        padding: theme.spacing(4),
        marginTop: theme.spacing(9),
        marginBottom: theme.spacing(2)

      },
      paper:{
        elevation: "disabled",

      }
        }
})

export default function MediaCard() {
    const classes = useStyles();
    return (
        <div>
        <Container  className={classes.container}>
            
            <Grid container direction="row" justify="space-between" alignItems="center" >
            <Slide left>
                      <Card className={classes.root} >
                  <CardActionArea>
                  <CardMedia
                    className={classes.media1}
                    title="Quality Food"
                      />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Quality Food
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Slide>
              <Slide left>
              <Card className={classes.root}>
                  <CardActionArea>
                  <CardMedia
                    className={classes.media2}
                    title="Family Friendly"
                      />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Family Friendly
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              
              </Slide >
              <Slide left>
              <Card className={classes.root}>
                  <CardActionArea>
                  <CardMedia
                    className={classes.media3}
                    title="Baking Services"
                      />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Baking Services
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Slide>
              </Grid>
        
    </Container>
        </div>
    )
}
