import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import * as ROUTES from "./constant/routes"
import {Home,SignIn,SignUp,Browser} from './pages'
import { IsUserRedirect, ProtectedRoute } from "./helper/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const {user} = useAuthListener()
  return (
    <Router>
        <Routes>
          <Route path={ROUTES.SIGN_IN} 
              element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                <SignIn />
              </IsUserRedirect>}> 
          </Route>
          <Route path={ROUTES.SIGN_UP} 
              element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                <SignUp />
              </IsUserRedirect>}> 
          </Route>
          <Route path={ROUTES.BROWSE} 
              element={
              <ProtectedRoute user={user} loggedInPath={ROUTES.BROWSE}>
                <Browser />
              </ProtectedRoute>}> 
          </Route>
          <Route path={ROUTES.HOME} 
              element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                <Home />
              </IsUserRedirect>}> 
          </Route>
           {/* <Route path={ROUTES.SIGN_IN} element={<SignIn/>} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp/>} /> */}
          {/* <Route path={ROUTES.BROWSE} element={<Browser/>} />
          <Route exact path={ROUTES.HOME} element={<Home/>} /> */}
        </Routes>
    </Router>
  );
}

