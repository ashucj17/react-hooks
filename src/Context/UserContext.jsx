import { createContext, useContext } from "react";

export const UserContext = createContext(null);

// Custom Hooks

export const useUserDetails = () =>{
   const userContext =  useContext(UserContext)
   if(!userContext){
    throw new Error ("useUserDetails must be used inside UserContextProvider")
   }
   return userContext;
}



export const UserContextProvider = ({children, userDetails})=>{
    return (
         <UserContext.Provider value={userDetails}>
            {children}
         </UserContext.Provider>
    )
}