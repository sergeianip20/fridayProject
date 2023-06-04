import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "app/store";
import App from "app/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Register} from "features/auth/Register/Register";
import {Login} from "features/auth/Login/Login";
import {GlobalError} from "common/GlobalError/GlobalError";
import {Packs} from "features/packs/Packs";
import {Header} from "features/header/Header";
import {CreateNewPassword} from "features/auth/CreatenewPassword/CreateNewPassword";
import {ForgotNewPassword} from "features/auth/forgotNewpassword/forgotNewPassword";
import {CheckEmail} from "features/auth/checkEmail/checkEmail";
import AvatarUser from "features/auth/avatar/Avatar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/packs",
        element: <Packs/>
    },
    {
        path: '/createnewpassword',
        element: <CreateNewPassword/>
    }, {
        path: 'forgotnewpassword',
        element: <ForgotNewPassword/>
    }, {
        path: '/checkemail',
        element: <CheckEmail/>
    }, {
    path: '/avatar',
        element:<AvatarUser />

    }
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Header/>
        <RouterProvider router={router}/>

        <GlobalError/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
