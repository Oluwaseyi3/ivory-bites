
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu"
import { Container, Paper, Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { useHistory} from "react-router-dom"





const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: theme.spacing(5),
    }
  
  }));
  
  
export default function Navbar() {

    const classes = useStyles();
    const history = useHistory();

    function home() {
      history.push("/");
    }
    function about() {
      history.push("/about");
    }
    function Contact() {
      history.push("/Contact");
    }
    function menu() {
      history.push("/menu");
    }
    // BreakPoints
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    console.log(isMatch);

    //Menu Icon
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <div>

     <div className={classes.root}>
        <AppBar position="static" color="inherit" className={classes.appBar} elevation="disabled">
            <Toolbar>
            {isMatch ?
              <Grid container direction="row-reverse" justify="flex-start" alignItems="baseline">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
                </IconButton>
                      <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={home}>home</MenuItem>
                  <MenuItem onClick={about}>About Us</MenuItem>
                  <MenuItem onClick={Contact}>Contact Us</MenuItem>
                  <MenuItem onClick={menu}>Menu</MenuItem>
                </Menu>
               
                </Grid> 
                :(
                <> 
            <Grid container direction="row-reverse" justify="flex-start" alignItems="baseline">
               <Button className={classes.title} onClick={about}>
                   About Us
               </Button>
               <Button className={classes.title} onClick={Contact}>
                   Contact Us
               </Button>
               <Button className={classes.title} onClick={menu}>
                   Menu
               </Button>
               <Button className={classes.title} onClick={home}>
                  Home
               </Button>
               </Grid> 
               </>
               )}
           
            </Toolbar>
      </AppBar>
      </div>
        </div>
    )
}




























































