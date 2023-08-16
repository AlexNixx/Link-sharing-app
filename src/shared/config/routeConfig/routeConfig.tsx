import {RouteProps} from "react-router-dom";

import {HomePage} from "pages/HomePage";
import {PreviewPage} from "pages/PreviewPage";
import {SignInPage} from "pages/SignInPage";
import {SignUpPage} from "pages/SignUpPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {ProfilePage} from "pages/ProfilePage";

export enum AppRoutes {
    HOME = "home",
    PROFILE = "profile",
    PREVIEW = "preview",
    SIGN_IN = "sign_in",
    SIGN_UP = "sign_up",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.PREVIEW]: "/preview",
    [AppRoutes.SIGN_IN]: "/sign-in",
    [AppRoutes.SIGN_UP]: "/sign-up",
    [AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage/>
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>
    },
    [AppRoutes.PREVIEW]: {
        path: RoutePath.preview,
        element: <PreviewPage/>
    },
    [AppRoutes.SIGN_IN]: {
        path: RoutePath.sign_in,
        element: <SignInPage/>
    },
    [AppRoutes.SIGN_UP]: {
        path: RoutePath.sign_up,
        element: <SignUpPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}