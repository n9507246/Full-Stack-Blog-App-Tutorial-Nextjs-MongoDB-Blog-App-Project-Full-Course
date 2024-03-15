'use client'

import { createContext, useEffect, useState } from "react";

const getFromLocalStorage = () => {
    if(typeof window !== "undefined")
        return localStorage.getItem('theme') || 'light';
}

export const ThemeContext = createContext()
export const ThemeContextProveder = ({children}) => {
    const [theme, setTheme] = useState(()=>{ return getFromLocalStorage();})
    const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light')
    useEffect(() => { localStorage.setItem('theme', theme)} , [theme])
    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}