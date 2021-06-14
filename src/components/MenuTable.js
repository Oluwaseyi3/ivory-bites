import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import {makeStyles, Paper, Container, Grid} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Jollof from "../layout/Jollof.jpg"
import pepperSoup from "../layout/pepperSoup.jpg"
import Iyan from "../layout/Iyan.jpg"
import Amala from "../layout/Amala.jpg"
import Ewa from "../layout/Ewa.jpg"
import Fried from "../layout/Fried.jpg"
import { useHistory} from "react-router-dom"




const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    marginBottom: "30px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginTop: "30px"
  },
   paper:{
    padding: "3.5%"
   },
  avatar: {
    backgroundColor: blue[300],
  },
   header:{
     marginBottom: "3rem"
   }
  });

  


export default function MenuTables() {
    const classes = useStyles();
    const history = useHistory();

    function home() {
      history.push("/");
    }
      
    const menus = [
      {
        id: 1,
        title:"Amala",
        // subheader:"September 14, 2016",
        image:Amala,
        body:"Amala",
        text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests"
      },
      {
        id: 2,
        title:"Jollof Rice",
        image:Jollof,
        body:"Jollof",
        text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests"
      },
      {
        id: 3,
        title:"Iyan",
        image:Iyan,
        body:"Iyan",
        text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests"
      },
      {
        id: 4,
        title:"Pepper Soup",
        image:pepperSoup,
        body:"Pepper Soup",
        text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests"
      },
      {
        id: 5,
        title:"Ewa Agoyin",
        image:Ewa,
        body:"Durr",
        text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests"
      },
      {
        id: 6,
        title:"Fried Rice",
        image:Fried,
        body:"Fried Rice",
        text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests"
      }

  ];
    return (
        <div>
      <Container> 
      <Grid container direction="row" justify="flex-start"  alignItems="flex-start">
                <IconButton>
                <ArrowBackIosIcon  onClick={home} />
                </IconButton>
                </Grid>
                <Typography variant="h2" className={classes.header}>Our Menu</Typography>
        <Paper elevation="disabled" className={classes.paper}>
   
        <Grid container direction="row" justify="space-around" alignItems="flex-end" spacing={3}> 
         {menus.map((menu) => (
          <Grid item lg={4}>
              <Card className={classes.root}>
                <>
                 <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={menu.title}
              subheader={menu.subheader}
            />
                <CardMedia
              className={classes.media}
               image={menu.image} 
              title={menu.body}
            />
              <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               {menu.text}
              </Typography>
            </CardContent> 
            </>
          
         
       </Card>
       </Grid>
       ))}
      
       </Grid>
       </Paper>
       </Container>
        </div>
    )
}
