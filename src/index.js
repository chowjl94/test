import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppShell } from "./app-shell";
import "./index.css";
import { PageNotFound } from "./pages/404";
import { Home } from "./pages/home"







ReactDOM.render(
  <BrowserRouter>

        <AppShell>

          <Switch>
              <Route path = "/" exact>
                <Home/>
              </Route>

              <Route path="*">
                <PageNotFound />
              </Route>

          </Switch>

        </AppShell>
  </BrowserRouter>,
  document.querySelector("#root")
);
