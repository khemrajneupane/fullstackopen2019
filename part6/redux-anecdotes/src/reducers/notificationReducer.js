export const setNotificationMsg = message => {
  return {
    type: "NOTIFICATION_MSG",
    message
  };
};

const notificationReducer = (state = "default message", action) => {
  switch (action.type) {
    case "NOTIFICATION_MSG":
      return action.message;
    default:
      return state;
  }
};

export default notificationReducer;
