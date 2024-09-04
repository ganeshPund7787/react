import { useState } from "react";

const useGetUser = () => {
    const [data, setData] = useState({});
    const getData = async () => {

        const res = await fetch("https://api.github.com/users/VaibhavRokade1");

        const data = await res.json();
        if (!res.ok) {
            console.log(data.message)
            return;
        }
        setData(data);
        return data;
    }
    return { getData, data };
}

export default useGetUser;