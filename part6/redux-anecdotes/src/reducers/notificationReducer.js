export const setNotificationMsg = (message, time) => {
  return dispatch => {
    dispatch({
      type: "NOTIFICATION_MSG",
      message
    });
    setTimeout(() => {
      dispatch({
        type: "CLEAR_NOTIFICATION"
      });
    }, time * 1000);
  };
};
const notificationReducer = (state = "default message", action) => {
  switch (action.type) {
    case "NOTIFICATION_MSG":
      return action.message;
    case "CLEAR_NOTIFICATION":
      return null;
    default:
      return state;
  }
};

export default notificationReducer;
