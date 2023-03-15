import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    backgroundColor: bgColor,
  };

  return (
    <div style={styles}>
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;