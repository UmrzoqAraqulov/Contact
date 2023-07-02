import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast() {
  const notify = () => toast.info("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer position="bottom-right"/>
    </div>
  );
}

export default Toast;
