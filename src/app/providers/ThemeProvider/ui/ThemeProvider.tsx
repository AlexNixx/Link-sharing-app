import {LOCAL_STORAGE_THEME_CAY, Theme, ThemeContext} from "../lib/ThemeContext";
import {FC, PropsWithChildren, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_CAY) as Theme || Theme.LIGHT

const ThemeProvider:FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;