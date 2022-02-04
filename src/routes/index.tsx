import {
    useRoutes,
    Navigate
} from 'react-router-dom'
import { Name } from '../pages/Name'
import { Age } from '../pages/Age'

export const Routes = () => {
    const routes = useRoutes([
        {path: '/', element: <Navigate to="/name" />},
        {path: '/name', element: < Name/> },
        { path: '/age', element: <Age />}
    ])
    return routes
} 