import { useAppSelector, useAppDispatch } from 'app'

import { authThunks } from 'features/auth/auth.slice'


   

 

    

 


import { LoginFieldsType } from 'features/auth/components/Login'

import {

   

    RegisterBodyType,

   

    

} from 'features/auth/auth.api'



import { useCallback } from 'react'

export const useAuth = () => {

    const dispatch = useAppDispatch()


    



    

    const isProfileDefine = () => Boolean(profile)

    const isUserAuth = isProfileDefine()

    const login = useCallback(

        (data: LoginFieldsType) => {

            const payload = {

                email: data.loginEmail,

                password: data.loginPassword,

                rememberMe: data.rememberMe,

            }

            dispatch(authThunks.login(payload))

        },

        [dispatch]

    )

    const logout = useCallback(() => dispatch(authThunks.logout()), [dispatch])

    const registration = useCallback(

        (data: RegisterBodyType) => {

            dispatch(authThunks.register(data))

        },

        [dispatch]

    )

    

       

            

               

              

              



           

       

        

    

    

       

            

               

                

      

            

      

     



    const updateUserName = useCallback(

        (data: UpdateProfileBodyType) => {

            dispatch(authThunks.updateProfile(data))

        },

        [dispatch]

    )

    return {

        login,

        registration,

        logout,

      

       

       

       

       

       

       

        

    }

}
