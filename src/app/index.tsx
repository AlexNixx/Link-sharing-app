import "./styles/index.scss"

import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "../shared/lib/classNames/classNames";

import {HomePage} from "../pages/HomePage"
import {PreviewPage} from "../pages/PreviewPage";
import {SignInPage} from "../pages/SignInPage";
import {SignUpPage} from "../pages/SignUpPage";

import {Link, Route, Routes} from "react-router-dom";
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
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/preview"} element={<PreviewPage/>}/>
                    <Route path={"/sign-in"} element={<SignInPage/>}/>
                    <Route path={"/sign-up"} element={<SignUpPage/>}/>
                    <Route path={"/*"} element={<HomePage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;