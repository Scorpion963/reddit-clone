"use client"
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<{setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>, currentTheme: Theme} | null>(null)

type Theme = "dark" | "light"

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light')

    useEffect(() => {
        const localStorageTheme = localStorage.getItem('theme') as Theme | null

        if(localStorageTheme) {
            setCurrentTheme(localStorageTheme)
            localStorage.setItem("theme", localStorageTheme)
        }else{
            const prefersScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            const defaultTheme = prefersScheme ? "dark" : "light"
          
            localStorage.setItem("theme", defaultTheme)
            setCurrentTheme(defaultTheme)
        }
    }, [])

    useEffect(() => {
        document.body.classList.remove("light", "dark")
        document.body.classList.add(currentTheme)
        localStorage.setItem("theme", currentTheme)
    }, [currentTheme])

    return <ThemeContext.Provider value={{setCurrentTheme, currentTheme}}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error("useTheme must be withint ThemeProvider")
    }

    return context
}