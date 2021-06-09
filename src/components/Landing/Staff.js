import React from 'react'
import {Typography, Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import chef from "../../layout/chef.jpg"
import Pulse from 'react-reveal/Pulse'
  
const useStyles = makeStyles((theme) => ({

    image:{
       height: "59vh",
       marginTop: theme.spacing(9),
       [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3),
        height: "50vh",
        marginLeft: theme.spacing(3)
       }
       },
       grid:{
        marginTop: theme.spacing(9)
       },
       copyRight: {
        marginTop: theme.spacing(15)
        },
        text:{
         marginTop: theme.spacing(9),
         padding: theme.spacing(4),
         [theme.breakpoints.down('md')]: {
          marginTop: theme.spacing(4),
          marginRight: theme.spacing(3)
         }    
        },
        textPadding:{
          padding: theme.spacing(3)  
        }, 
        body:{
            marginBottom: theme.spacing(12),
            [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(7)
            }
        }
}));



export default function Staff() {
    const classes = useStyles();
    return (
        <div>
           <Container className={classes.body}>
             <Paper elevation="disabled">
             <Pulse>
             <Grid container spacing={3}>  <Grid item xs={12} sm={6}>
             <img src={chef} className={classes.image}/>
             </Grid>
            <Grid item xs={12} sm={6} className={classes.text} >
            <Typography className={classes.textPadding} variant ="h4">Our People</Typography> 
             <Typography className={classes.textPadding} variant="body2"> "Sed ut perspiciatis unde atem acclaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut"</Typography>
            </Grid>
               
            </Grid>
            </Pulse>
            </Paper>
            </Container>
        </div>
    )
}
