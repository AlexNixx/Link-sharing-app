import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss"

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
    PRIMARY = "primary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton,
    active?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        active,
        children,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(styles.button, {[styles.active]: active}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
}