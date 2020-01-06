import React from "react";
import propTypes from "prop-types";

const Notification = ({notification}) => {
    const styles = {
        border: "5px solid green",
        position: "absolute",
        width: "35%",
        height: "100%",
        left: "12%",
        background: "linear-gradient(to bottom right, #B0DB7D 40%, #99DBB4 100%)",
        borderRadius: "20px",
        boxShadow: "5px 5px 20px rgba($gray, 10%)",
        perspective: "40px"
    };

  
return (<div style={styles}><p>default notification{notification}</p></div>);
   
};

export default Notification;