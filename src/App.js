
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import './index.css'
import Home from "./components/Home"
import NavBar from "./layout/NavBar.js"
import MenuTables from "./components/MenuTable"
import Location from "./components/Location"
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
      <Route exact path="/menu" component={MenuTables} />
      <Route exact path="/location" component={Location} />
      <Redirect to="/"/> 
      </Switch>  
      </ThemeProvider>
    </div>
  );
}

export default App;
