import {
    useRoutes,
    Navigate,
} from 'react-router-dom'
import { Name } from '../pages/Name'
import { Age } from '../pages/Age'
import useUserData from '../contexts/userData'
import { Principal } from '../pages/Principal'
import useAuth from '../contexts/auth'

export const Routes = () => {
    const { userData } = useUserData()
    const { userName} = userData
    const { signed } = useAuth()

    const routes = useRoutes([
        {path: '/', element: <Navigate to="/name" />},
        {path: '/name', element: < Name/> },
        { path: '/age', element: userName ? <Age />: <Navigate to="/name" />},
        { path: '/principal', element: signed ? <Principal /> : <Navigate to="/name" />}
    ])
    return routes
} 

/* 
    Se o usuário já registrou a idade e o nome, então pode ir para a página principal
    
*/