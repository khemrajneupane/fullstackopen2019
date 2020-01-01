import React from "react";
import { createFilter } from "../reducers/filterReducer";
import { setNotificationMsg } from "../reducers/notificationReducer";

const Filter = props => {
  const handleChange = event => {
    event.target.value
      ? props.store.dispatch(
          setNotificationMsg(`you are filtering with ${event.target.value} `)
        )
      : props.store.dispatch(setNotificationMsg(null));
    props.store.dispatch(createFilter(event.target.value));
    setTimeout(() => {
      props.store.dispatch(setNotificationMsg(null));
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

export default Filter;
