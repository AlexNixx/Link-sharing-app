import "./styles/index.scss"

import {AppRouter} from "app/providers/router";

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {Header} from "widgets/Header";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Header/>
            <AppRouter />
        </div>
    )
}

export default App;