import React, { useContext } from "react";
import { AuthContxt } from "../AuthProvider/AuthProvider";

const ManageAuth = () => {
  const all = useContext(AuthContxt);
  return all;
};

export default ManageAuth;
