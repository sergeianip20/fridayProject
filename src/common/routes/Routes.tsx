export const router = createHashRouter([

    {

        path: paths.MAIN,

        element: <App />,

        errorElement: <PageNotFound />,

        children: [

            {

                path: paths.MAIN,

                element: <RequireAuth />,

                children: [

                    {

                        path: paths.CARDS,

                        element: <Cards />,

                    },

                    {

                        path: paths.PACKS,

                        element: <Packs />,

                    },

                    {

                        path: paths.PROFILE,

                        element: <Profile />,

                    },

                    {

                        path: paths.LEARN,

                        element: <Learn />,

                    },

                ],

            },

            {

                path: paths.AUTH,

                element: <Auth />,

                children: [

                    {

                        path: paths.CHECK_EMAIL,

                        element: <CheckEmail />,

                    },

                    {

                        path: paths.FORGOT_PASSWORD,

                        element: <ForgotPassword />,

                    },

                    {

                        path: paths.LOGIN,

                        element: <Login />,

                    },

                    {

                        path: paths.REGISTER,

                        element: <Registration />,

                    },

                    {

                        path: paths.SET_NEW_PASSWORD,

                        element: <NewPassword />,

                    },

                ],

            },

        ],

    },

])
