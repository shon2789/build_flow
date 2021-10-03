import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router';
import { EditorPage } from "./pages/EditorPage";
import { HomePage } from "./pages/HomePage";
import { TemplatePage } from "./pages/TemplatePage";
import { UserPage } from "./pages/UserPage";
import { AuthModal } from "./components/AuthModal";
import { useDispatch } from "react-redux";
import { setUser } from "./store/actions/user.action";



export const App = () => {
  //Set user from localStorage(Survives refresh and browser close)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setUser())
  }, [])

  //Cancel the contextmenu
  window.addEventListener('contextmenu', (ev) => { ev.preventDefault() })

  return (
    <Router>
      <Switch>
        <Route path="/editor/:webAppId" component={EditorPage} />
        <Route path="/login" component={AuthModal} />
        <Route path="/user" component={UserPage} />
        <Route path="/template" component={TemplatePage} />
        <Route path="/user" component={UserPage} />
        <Route path="/editor" component={EditorPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}