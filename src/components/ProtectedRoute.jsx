import React from 'react'
import { Navigate ,Outlet} from 'react-router-dom';

// const ProtectedRoute = ({children,allowRoles}) => {
//   const token=localStorage.getItem("token");
//   const userRole=localStorage.getItem("role");

//   if(!token){
//     return <Navigate to="/pagename" />
//   }

//  if(!allowRoles.includes(userRole)){
//     return <Navigate to="/homepage" />
//  }
  
//   return children;
// }

// export default ProtectedRoute

//children represents components that are wrapped inside protected route
//<Route path="/" element={
{/* <ProtectedRoute allowRoles={['admin']}>
    <Component Name/Children />
</ProtectedRoute>
} */}

//protected routes

//at time of login/signup we will store the role in database
const ProtectedRoute = ({allowRoles}) => {
    const token=localStorage.getItem("token");
    const userRole=localStorage.getItem("role");
  
    if(!token){
      return <Navigate to="/pagename" />
    }

    if(!allowRoles.includes(userRole)){
        return <Navigate to="/homepage" />
    }

    return <Outlet />;
  }
  
  export default ProtectedRoute;

  <Route element={<ProtectedRoute allowRoles={['role1','role2']} />}>
    <Route path="/" element={<Pagename/>}/>
  </Route>

//authentication--verifies user
//authorization-- access to pages according to role 
//pages accessible by unauthorized users only
// const PublicRoute =()=>{
//     const token=localStorage.getItem("token");

//     return token ? <Navigate to="/"/> : < Outlet />
// }

// <Route element={<PublicRoute/>}>
//     <Route components ></Route>
// </Route>
//
//