import React, { createContext, useEffect, useState } from "react";



export const DataContext= createContext();


export const Dataprovider =  ({children}) => {
    const [items,setItems] = useState ([]);
    const [cart ,setCart] = useState ([]);
    const [register,setRegister] =useState([])
    const [userLoged, setUserLoged] = useState("");
    const [checkUserLoged, setCheckUserLoged] = useState("");

    return(
        <DataContext.Provider value={{items, setItems, cart ,setCart, userLoged, setUserLoged,checkUserLoged, setCheckUserLoged }}>
            {children}
        </DataContext.Provider>
    )
}