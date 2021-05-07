import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function PrivateRoute({component: Component,  ...rest}) {
    const { user } = useAuth()
    if (user.isAuthenticated === undefined)
        return (null)
    
    return (
        
        <Route
            {...rest}
            render={props => 
                user.isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{pathname: "/login"}}/>
            }
        />
    )
}

export default PrivateRoute
