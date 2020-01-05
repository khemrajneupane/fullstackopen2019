import React from "react";
import { createFilter } from "../reducers/filterReducer";
import { setNotificationMsg } from "../reducers/notificationReducer";
import { connect } from "react-redux";

const Filter = props => {
  const handleChange = event => {
    props.createFilter(event.target.value);
    if(event.target.value){
      props.setNotificationMsg(
        `you are filtering with ${event.target.value} `,4)
    }else{props.setNotificationMsg(0)}

    
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

