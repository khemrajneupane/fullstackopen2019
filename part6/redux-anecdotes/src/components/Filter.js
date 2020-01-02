import React from "react";
import { createFilter } from "../reducers/filterReducer";
import { setNotificationMsg } from "../reducers/notificationReducer";
import { connect } from "react-redux";

const Filter = props => {
  const handleChange = event => {
    event.target.value
      ? props.setNotificationMsg(
          `you are filtering with ${event.target.value} `
        )
      : props.setNotificationMsg(null);
    props.createFilter(event.target.value);
    setTimeout(() => {
      props.setNotificationMsg(null);
    }, 5000);
  };
  const style = {
    marginBottom: 10,
    marginTop: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};
const mapDispatchToProps = {
  createFilter,
  setNotificationMsg
};
export default connect(null, mapDispatchToProps)(Filter);
/*
const mapStateToProps = state => {
  // sometimes it is useful to console log from mapStateToProps
  console.log(state);
  return {
    filtered: filtered(state),
    filter: state.filter
  };
};
*/
