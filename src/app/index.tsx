import "./styles/index.scss"

import {useTheme} from "./theme/useTheme";
import {classNames} from "../shared/lib/classNames/classNames";

import {HomePage} from "../pages/home-page"
import {PreviewPage} from "../pages/preview-page";
import {SignInPage} from "../pages/sign-in-page";
import {SignUpPage} from "../pages/sign-up-page";

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