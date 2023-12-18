import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();
  return <div className="bg-gray-500 text-white p-3 text-3xl text-center items-center font-bold">USER:{userid}</div>;
};

export default User;
