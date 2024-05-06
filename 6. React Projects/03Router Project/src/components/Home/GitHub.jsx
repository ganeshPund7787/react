import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);

  // async function fetchData() {
  //   const res = await fetch("https://api.github.com/users/bhujbalpratik");
  //   const data = await res.json();
  //   console.log(data);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="text-center text-orange-600 bg-black">
      <div className="flex justify-center items-center w-full ">
        <img
          // src={ data.avatar_url}
          src="https://avatars.githubusercontent.com/u/139871707?v=4"
          alt="Git picture"
          width={300}
          className="m-5 rounded-full"
        />
      </div>
      <h1 className="m-5 text-3xl">
        GitHub followers {data.followers ? data.followers : 9}
      </h1>
    </div>
  );
}

export default GitHub;

export const gitHubInLoader = async () => {
  const res = await fetch("https://api.github.com/users/bhujbalpratik");
  return res.json();
};
