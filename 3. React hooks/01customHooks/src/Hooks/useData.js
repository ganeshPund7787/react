import { useEffect, useState } from 'react'

const useData = ({ value }) => {
    const [data, setData] = useState("")
    useEffect(() => {
        setData(value)
    }, [])
    return data
}

export default useData