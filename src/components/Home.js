import React from 'react'
import ivoryb from "../layout/ivoryb.jpg"
import MediaCard from "./Landing/MediaCard"
import FAQ from "./Landing/FAQ.js"
import {Button, Container, Grid, makeStyles, Paper, Typography, useTheme} from "@material-ui/core";
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide'
import Footer from "./Landing/Footer"
import Staff from "./Landing/Staff"


const useStyles = makeStyles((theme) => {
    return{
       header:{
         padding: theme.spacing(4),  
       },
       btn:{
           variant: "contained",
           color: "#9c27b0",
           padding: theme.spacing(2)
       },
       paperContainer:{
        backgroundImage: `url(${ivoryb})`,
         backgroundSize: "cover",
       height: "100vh",
       color: "white",
       [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${ivoryb})`,
         backgroundSize: "cover",
       height: "80vh",
       color: "white",
      }
       }
    }
    
})
function Home() {

    const classes = useStyles();
    
    return (
        <div>
        <Container>
          <Paper className={classes.paperContainer}>
          <Flip left>
            <Typography variant="h4" className={classes.header}>Ivory Bites Restaurant and Bakery</Typography>
            </Flip>
            <Slide left>
            <Typography variant="body1" className={classes.header}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Typography> 
            </Slide>
            
            </Paper>
        </Container>

        <MediaCard/>
        <Staff/>
        <FAQ/>
        <Footer/>
        </div>
    )
}

export default Home
