import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexMenu from "./components/IndexMenu";
import Payment from "./components/Payment";
import Register from "./components/Register";
import LoginRocket from "./components/LoginRocket";
import Profile from "./components/Profile";

function App() {
  // props -> properties

  return (
    /* El codigo de JS dentro del return se escribe con {} */
    <div className="App">
      <div>
        <Router>
          <Route exact path="/" component={IndexMenu} />
          <Route path="/pago" component={Payment} />
          <Route path="/registro" component={Register}/>
          <Route path="/signup" component={LoginRocket} />
          <Route path="/profile" component={Profile} />
        </Router>
      </div>
    </div> // JSX
  );
}

export default App;
