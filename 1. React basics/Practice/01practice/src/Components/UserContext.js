import { createContext, useContext } from "react"


export const UserContext = createContext({
    login: false
})

export const UserContextProvider = UserContext.Provider

export default function useUserContext() {
    return useContext(UserContext)
}