import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router';
import { EditorPage } from "./pages/EditorPage";
import { HomePage } from "./pages/HomePage";
import { TemplatePage } from "./pages/TemplatePage";
import { UserPage } from "./pages/UserPage";
import { RetroHeader } from "./editable-cmps/RetroHeader";
import { RetroSectionTwo } from "./editable-cmps/RetroSectionTwo";
import { RetroSection } from "./editable-cmps/RetroSection";



export const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/user" component={UserPage} />
        <Route path="/template" component={TemplatePage} />
        <Route path="/editor" component={EditorPage} />
        <Route path="/jonathan" component={RetroHeader} />
        <Route path="/raz" component={RetroSectionTwo} />
        <Route path="/shon" component={RetroSection} />
        <Route path="/" component={HomePage} />


      </Switch>
    </Router>
  )
}