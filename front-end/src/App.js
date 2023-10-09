import "./App.css"; 
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect, 
} from "react-router-dom"; 
import Home from "./components/Home"; 
import Signup from "./components/Signup"; 
  
function App() { 
  return ( 
    <> 
      <Router> 
        <Switch> 
          <Route exact path="/" component={Home} /> 
          <Route path="/Signup" component={Signup} /> 
          <Redirect to="/" /> 
        </Switch> 
      </Router> 
    </> 
  ); 
} 
  
export default App; 