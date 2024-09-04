import useGetUser from "../Hooks/useGetUser";

const Home = () => {
  const { getData, data } = useGetUser();
  console.log(data);
  return (
    <div>
      <button
        className="bg-cyan-500 w-full p-3"
        type="button"
        onClick={getData}
      >
        GetData
      </button>
      <div className="">
        <ul>
          <li>{data.login}</li>
          <li>
            <img src={data.avatar_url} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
