import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router';
import { EditorPage } from "./pages/EditorPage";
import { HomePage } from "./pages/HomePage";
import { TemplatePage } from "./pages/TemplatePage";
import { UserPage } from "./pages/UserPage";


export const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/editor/:webAppId" component={EditorPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/template" component={TemplatePage} />
        <Route path="/editor" component={EditorPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}