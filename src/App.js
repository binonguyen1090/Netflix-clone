import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import * as ROUTES from "./constant/routes"
import {Home,SignIn,SignUp,Browser} from './pages'
export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home/>} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn/>} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp/>} />
          <Route path={ROUTES.BROWSE} element={<Browser/>} />
        </Routes>
    </Router>
  );
}

