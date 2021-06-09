
import './App.css';
import {Switch, Route, Redirect, Router} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import './index.css'
import Home from "./components/Home"
import NavBar from "./layout/NavBar.js"
import MenuTable from "./components/MenuTable"
import { createMuiTheme, ThemeProvider} from "@material-ui/core"

const theme = createMuiTheme({
  typography:{
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})


function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
     <NavBar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/Contact" component={Contact} />    
      <Route exact path="/menu" component={MenuTable} />
      <Redirect to="/"/> 
      </Switch>  
      </ThemeProvider>
    </div>
  );
}

export default App;
