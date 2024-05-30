import React, { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "danger",
  });
  const showAlert = (message, type = "danger") => {
    setAlert({ show: true, message, type });
  };

  const hideAlert = () => {
    setAlert({ show: false, message: "", type: "danger" });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
