import React from 'react'
import {Typography, Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { useHistory} from "react-router-dom"

   
const useStyles = makeStyles((theme) => ({

    paperContainer:{
        backgroundColor: 'black',
       height: "30vh",
       color: "white",
       marginTop: theme.spacing(9),
       padding: theme.spacing(8)
       },
       grid:{
        marginTop: theme.spacing(9)
       },
       copyRight: {
        marginTop: theme.spacing(15),
        [theme.breakpoints.down('md')]: {
          marginTop: theme.spacing(3)
        }
        },
        icon:{
          marginTop: theme.spacing(1)
        }
}));


export default function Footer() {

    const classes = useStyles();
    const history = useHistory();

    // function home() {
    //   history.push("/");
    // }
    function about() {
      history.push("/about");
    }
    function Contact() {
      history.push("/Contact");
    }
    function menu() {
      history.push("/menu");
    }
  
    
    return (
        <div> 
           <Container>
           <Paper className={classes.paperContainer}>
           <Grid container spacing={5}>
            <Grid item xs>
                    <Typography variant="subtitle1"> Company</Typography>
            </Grid>
            <Grid item xs>
                    <Typography variant="subtitle2"> Resources</Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="subtitle2"> Support</Typography>
            </Grid>
            
      </Grid>
      <Grid container spacing={5}>
           <Grid item xs>
                 <Typography variant="subtitle2" onClick={about}>About</Typography>
          </Grid>
          <Grid item xs>
                <Typography variant="subtitle2" onClick={menu}> Menu</Typography>
          </Grid>
         <Grid item xs>
            <Typography variant="subtitle2"> Email</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
           <Grid item xs>
                 <Typography variant="subtitle2" onClick={Contact}> Contact </Typography>
          </Grid>
          <Grid item xs>
                <Typography variant="subtitle2"> FAQs</Typography>
          </Grid>
         <Grid item xs>
            <Typography variant="subtitle2"> Telephone</Typography>
        </Grid>
      </Grid>
                <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
            >   <div className={classes.copyRight}>
                 <Typography variant ="body1" ><CopyrightIcon/> 2021 Ivory Bites Limited. All Rights Reserved</Typography>
                 </div>
            </Grid>
     
          </Paper>
           </Container>
        </div>
    )
}
