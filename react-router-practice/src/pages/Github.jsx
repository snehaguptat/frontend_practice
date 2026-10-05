import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState();
  // useEffect(() => {
  //   const fetchGithubDetails = async () => {
  //     const response = await fetch("https://api.github.com/users/snehaguptat");

  //     const userDetails = await response.json();

  //     console.log(userDetails);
  //     setData(userDetails);
  //   };

  //   fetchGithubDetails();
  // }, []);
  return (
    <div className="bg-gray-200 flex">
      <div>
        <img src={data?.avatar_url} className="w-50" />
      </div>
      <div>
        <p className="font-semibold text-lg p-4">{data?.followers}</p>
      </div>
    </div>
  );
};

export default Github;

export const getGithubInfo = async () => {
  const response = await fetch("https://api.github.com/users/snehaguptat");

  const data = await response.json();
  return data;
};
