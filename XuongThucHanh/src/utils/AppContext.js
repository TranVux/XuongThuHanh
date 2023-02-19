import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(null);

    return (
        <AppContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </AppContext.Provider>
    )
}
