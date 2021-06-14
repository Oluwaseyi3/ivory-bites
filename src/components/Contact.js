import React from 'react';
import { Container, Paper, Grid,  Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Maps from "../layout/Maps.jpg"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import { useHistory} from "react-router-dom"
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: theme.spacing(5),
    },
    subtitle:{
      margin: theme.spacing(4)
    },
     image:{
       height: "70vh",
       [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(7)
       }
     },
     icon:{
       padding: theme.spacing(2)
     },
     itemIcon:{
      margin: theme.spacing(1)
     },
     mail:{
      fontWeightMedium: 600
     }
  }));

function Contact() {
  const classes = useStyles();
  const history = useHistory();

  function home() {
    history.push("/");
  }
    return (
        <div>
            <Container>
                <Paper className={classes.paperContainer} elevation="disabled">
                <Grid container direction="row" justify="flex-start"  alignItems="flex-start">
                <IconButton>
                <ArrowBackIosIcon  onClick={home} />
                </IconButton>
                
                </Grid>
            
                 <Grid container spacing={3}>
                  <Grid item lg={6}>
                  
                     <Typography variant="h4"> Contact Us</Typography>
                    
                     <div className={classes.subtitle}>
                       <Typography variant="subtitle1">Reach out to us on the following Social Media Platforms</Typography>
                          <div className={classes.icon}>
                            <FacebookIcon className={classes.itemIcon}/>
                            <TwitterIcon className={classes.itemIcon}/>
                            <InstagramIcon className={classes.itemIcon}/>
                            <WhatsAppIcon className={classes.itemIcon} />
                          </div>
                     </div>
                     <Typography variant="h5" style={{margin: "10px"}}>Telephone</Typography>
                     <div>
                        <PhoneIphoneTwoToneIcon fontSize="small"/>  <Typography variant="subtitle1"style={{fontWeight:"700"}}>09000000000, 08122222222, 07044444444</Typography>
                     </div>
                     <Typography variant="h5" style={{marginTop: "30px"}}>Email</Typography> <MailOutlineIcon />
                      <Typography variant="subtitle1" style={{fontWeight:"700"}}>ivorybites@gmail.com</Typography>
                    </Grid>
                    <Grid item lg={6}>
                    <Zoom left>
                     <img src={Maps} className={classes.image} alt="Contact"/>
                     </Zoom>
                    </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Contact
