import React, { createContext, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

function AuthContextProvider({children}) {
    let history = useHistory()
    const [user, setUser] = useState({})
    useEffect(() => {
        if (localStorage.getItem("user-details")) {
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

    function setSession(jsonObj) {
        jsonObj.isAuthenticated = true
        localStorage.setItem("user-details", JSON.stringify(jsonObj) )
        setUser(jsonObj)
    }
  
    return (
    
        <AuthContext.Provider value={{user, setUser, logout, setSession}}>
            {children}
        </AuthContext.Provider>
    )
    
}


export {useAuth, AuthContextProvider, AuthContext}
