// @flow

import * as React from "react";
import { Provider, Composer } from "react-cheers";
import HomePage from "./pages/home";
import "reset.css";
import "./app.css";
import "./components/notification/notifications.css";

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Provider>
          <main className="content">
            <HomePage />
          </main>
          <Composer />
          <footer className="footer">A footer</footer>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
