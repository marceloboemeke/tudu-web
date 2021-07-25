import React, { createContext, useState, useEffect } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
    const { authenticated, loading, handleLogin, handleLogout, handleRegister } = useAuth();

    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogout, loading, handleRegister }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };