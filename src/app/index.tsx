import {Link, Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import Some from "../pages/Some";

import "./styles/index.scss"

import {useTheme} from "./theme/useTheme";
import {classNames} from "../shared/lib/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/some"}>Some</Link>
                <button onClick={toggleTheme}>Change theme</button>
            </nav>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/some"} element={<Some/>}/>
                <Route path={"/*"} element={<Some/>}/>
            </Routes>
        </div>
    )
}

export default App;