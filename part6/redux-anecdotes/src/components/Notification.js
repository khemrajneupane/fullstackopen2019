import React from "react";
import { connect } from "react-redux";
const Notification = props => {
  const message = props.notification;
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  let msg = message ? <div style={style}>{message} </div> : <div></div>;
  return msg;
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);
