import {Link, Route, Routes} from "react-router-dom";

import "./styles/index.scss"

import {useTheme} from "./theme/useTheme";
import {classNames} from "../shared/lib/classNames/classNames";

import {HomePage} from "../pages/home-page"
import {Suspense} from "react";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/some"}>Some</Link>
                <button onClick={toggleTheme}>Change theme</button>
            </nav>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path={"/"} element={<HomePage />}/>
                    <Route path={"/*"} element={<HomePage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;