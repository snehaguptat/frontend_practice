import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="bg-gray-700 p-4 text-white text-center font-semibold text-lg">
      User:{userId}{" "}
    </div>
  );
};

export default User;
