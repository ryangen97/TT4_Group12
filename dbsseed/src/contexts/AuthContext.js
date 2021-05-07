import React, { createContext, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

function AuthContextProvider({children}) {
    let history = useHistory()
    const [user, setUser] = useState({})
    useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem("user-details")) {
            setUser(JSON.parse(localStorage.getItem("user-details")))
        }
        else{
            setUser({"isAuthenticated": false})
        }
    }, [])


    function logout(){
        localStorage.clear()
        setUser({isAuthenticated: false})
        history.push("/login")
    }
  
    return (
    
        <AuthContext.Provider value={{user, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
    
}


export {useAuth, AuthContextProvider, AuthContext}
