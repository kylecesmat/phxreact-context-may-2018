// @flow

import * as React from "react";
import SendNotifications from "../components/test/send-notifications";
import InspectNotifications from "../components/test/inspect-notifications";

type Props = {};
type State = {};

class Home extends React.Component<Props, State> {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <SendNotifications />
        <InspectNotifications />
      </div>
    );
  }
}

export default Home;
