import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router';
import { EditorPage } from "./pages/EditorPage";
import { HomePage } from "./pages/HomePage";
import { TemplatePage } from "./pages/TemplatePage";
import { UserPage } from "./pages/UserPage";
import { AuthModal } from "./components/AuthModal";




export const App = () => {

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