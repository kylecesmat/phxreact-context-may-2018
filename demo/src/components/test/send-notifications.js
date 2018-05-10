// @flow
import * as React from "react";
import isEqual from "react-fast-compare";
import { withNotifications, type Notification } from "react-cheers";

const initialState = {
  kind: "notification",
  message: "This is a notification!",
  expires: 5000
};
type Props = {
  dispatch: Function,
  notifications: Array<Notification>
};
type State = Notification;

class Send extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = initialState;
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props.dispatch, nextProps.dispatch);
  }

  onSubmit = () => {
    this.props.dispatch(this.state);
    this.setState({ ...initialState });
  };

  render() {
    console.log("send-notifications: render");
    return (
      <React.Fragment>
        <h1 style={{ marginBottom: "20px" }}>Welcome Home!</h1>
        <textarea
          style={{ marginBottom: "20px" }}
          placeholder="message"
          value={this.state.message}
          onChange={({ target: { value } }) =>
            this.setState({ message: value })
          }
        />
        <input
          style={{ marginBottom: "20px" }}
          placeholder="expires"
          value={this.state.expires}
          onChange={({ target: { value } }) =>
            this.setState({ expires: value })
          }
        />
        <select
          style={{ marginBottom: "20px" }}
          value={this.state.kind}
          onChange={({ target: { value } }) => this.setState({ kind: value })}
        >
          <option value="notification">Notification</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>
        <button style={{ marginBottom: "20px" }} onClick={this.onSubmit}>
          Dispatch Notification
        </button>
      </React.Fragment>
    );
  }
}

export default withNotifications(Send);
