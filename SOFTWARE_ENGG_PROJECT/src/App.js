
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Forgot from "./components/views/Forgot";
import {useState,useRef} from 'react';
import landing from "./components/views/landing";
import Navbar from "./components/views/Navbar";
import UploadProduct from "./components/views/UploadProduct";
import Events from "./components/views/Events";

const Auth = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Switch>
        {/* <Route path="/" component={landing} /> */}
        <Route path="/landing" component={landing} />
        {/* <Route path="/" component={Login} />  */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={Forgot} /> 
        <Route path="/UploadProduct" component={UploadProduct} /> 
        <Route path="/Events" component={Events} /> 

      </Switch>
    </Router>
  );
};

export default Auth;
