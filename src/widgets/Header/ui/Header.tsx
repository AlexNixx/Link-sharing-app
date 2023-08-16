import {Link, useLocation} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";

import LinksIcon from "shared/assets/icons/link.svg"
import ProfileIcon from "shared/assets/icons/profile.svg"

import styles from "./Header.module.scss"
import {Button, ThemeButton} from "shared/ui/Button";

import Logo from "shared/assets/icons/logo-devlinks-large.svg"

export const Header = () => {
    const {pathname} = useLocation()

    return (
        <header className={styles.header}>
            <Logo className={styles.logo}/>

            <nav className={styles.navbar}>
                <Link to={"/"}>
                    <Button theme={ThemeButton.CLEAR} active={pathname === "/"}>
                        <LinksIcon/>
                        Links
                    </Button>
                </Link>
                <Link to={"/profile"}>
                    <Button theme={ThemeButton.CLEAR} active={pathname === "/profile"}>
                        <ProfileIcon/>
                        Profile Details
                    </Button>
                </Link>
            </nav>

            <Link to={"/preview"}>
                <Button theme={ThemeButton.OUTLINE}>Preview</Button>
            </Link>
        </header>
    );
}