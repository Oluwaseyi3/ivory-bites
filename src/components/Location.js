import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Link } from "react-router-dom"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import {  Container, Grid, Typography} from '@material-ui/core';

class Location extends Component {
    state = {
        mapCenter:{
            lat: 7.4971,
            lng: 4.5024
        }
    }
   
    render() {
     

       
        return (
            <div>

          <Container>
          <Grid container direction="row" justify="flex-start"  alignItems="flex-start">
                <IconButton>
               <Link to="/">  <ArrowBackIosIcon /></Link>
                </IconButton>
                </Grid>
          
           
            <Typography variant="h2">Our Address</Typography>
          <Map google={this.props.google} zoom={17}
          initialCenter={{
            lat: this.state.mapCenter.lat ,
            lng: this.state.mapCenter.lng
          }}
          >

       <Marker 


       />

       
        </Map>
        
        </Container>
            </div>
        );
    }
}





export default GoogleApiWrapper({
    apiKey: ("AIzaSyAHbxk3oQFWFPjqJBvJaenJzvuFmRpLjIg")
  })(Location)






//   <h1>Angelina</h1>
//   <Map google={this.props.google} zoom={14}>

//   <Marker onClick={this.onMarkerClick}
//    name={'Current location'} />

// <InfoWindow onClose={this.onInfoWindowClose}>
//  <div>
//     <h1>{this.state.selectedPlace.name}</h1>
// </div>
//   </InfoWindow>
// </Map>