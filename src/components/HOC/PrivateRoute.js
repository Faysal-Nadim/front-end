import React from 'react';
import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return <Route {...rest} component={(props) => {
//         const token = window.localStorage.getItem('token');
//         if(token){
//             return < Component {...props} />
//         }else{
//             return <Navigate to="/admin/signin" />
//         }
//     }} />
// }

const PrivateRoute = ({ children}) => {
    const token = window.localStorage.getItem('token');
    return token ? children : <Navigate to="/" />
}

export default PrivateRoute;