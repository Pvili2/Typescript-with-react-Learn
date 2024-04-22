import { createContext,useContext, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
    theme: Theme,
    setTheme: (theme: Theme) => void
}

type ThemeProviderProps = {
    children: React.ReactNode,
    defaultTheme?: Theme
}
//in TS we must add a default value to the createContext function
const ThemeProviderContext = createContext<ThemeProviderState| undefined>(undefined)

export function ThemeProvider({children, defaultTheme = "system"}:ThemeProviderProps){
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    return <ThemeProviderContext.Provider value={{theme,setTheme }}>
        {children}
    </ThemeProviderContext.Provider>
}

//custom hook
export const useTheme = () =>{

    const context = useContext(ThemeProviderContext);

    if(context === undefined) throw new Error("ThemProvider is undefined");

    return context;
}