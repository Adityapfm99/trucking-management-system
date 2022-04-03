import FirebaseLogin from './login/FirebaseLogin'
import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import FirebaseRegister from './register/FirebaseRegister'
import Auth0Login from './login/Auth0Login'
import JwtLogin from './login/JwtLogin'

const sessionRoutes = [
    {
        path: '/session/signup',
        component: FirebaseRegister,
    },
    {
        path: '/session/signin',
        component: FirebaseLogin,
    },
    {
        path: '/session/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/session/404',
        component: NotFound,
    },
]

export default sessionRoutes
