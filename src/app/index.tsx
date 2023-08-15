import "./styles/index.scss"

import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

import {Link, Route, Routes} from "react-router-dom";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/some"}>Some</Link>
                <button onClick={toggleTheme}>Change theme</button>
            </nav>
            <AppRouter />
        </div>
    )
}

export default App;