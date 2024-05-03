import React, { useEffect, useState } from 'react'

const useFetch = ({ joke }) => {
    const [data, setData] = useState("");
    useEffect(() => {
        fetch(`https://official-joke-api.appspot.com/random_joke`).then((res) => res.json()).then(res => { setData(`${res.setup} ${res.punchline}`) }).catch(e => console.log(`error while fetch ${e}`))
    }, [joke])
    return data;
}

export default useFetch