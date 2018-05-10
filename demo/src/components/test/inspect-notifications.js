// @flow
import * as React from "react";
import isEqual from "react-fast-compare";
import { withNotifications } from "react-cheers";

type Props = {
  dispatch: Function
};

class Inspect extends React.Component<Props> {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props.dispatch, nextProps.dispatch);
  }

  onSubmit = () => {
    this.props.dispatch({
      kind: "warning",
      message: "Dispatched from somewhere else",
      expires: 5000
    });
  };

  render() {
    console.log("inspect-notifications: render");
    return (
      <React.Fragment>
        <h2>Dispatch From Seperate Component</h2>
        <button style={{ marginBottom: "20px" }} onClick={this.onSubmit}>
          Send Another Notification
        </button>
      </React.Fragment>
    );
  }
}

export default withNotifications(Inspect);
