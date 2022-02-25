import {
    createContext,
    useState,
    useMemo,
    useCallback,
    PropsWithChildren,
    useContext
} from 'react'
import { UserData } from '../common/types'

// useState type 
export interface AuthState{
    signed: boolean,
    userData: UserData
}

export interface AuthContext extends AuthState {
    signIn(userData: UserData): void,
    signOut(): void
}

const AuthContext = createContext<AuthContext | null>(null)

// userData é feito no momento da autenticação

export const AuthProvider = ({children}: PropsWithChildren<unknown>) => {
    const [ data, setData ] = useState<AuthState>(() => {
        //verifica se o usuário já está logado
        const storedUser = localStorage.getItem('user')
        if(storedUser){
            const userData = JSON.parse(storedUser)
            return {
                signed:true,
                userData
            }
        }
        return {} as AuthState
    })

    const signIn = useCallback((userData: UserData) => {
        localStorage.setItem('user', JSON.stringify(userData))
        setData({signed: true, userData})
    },[])

    const signOut = useCallback(() => {
        setData({} as AuthState)
        localStorage.removeItem('user')
    },[])

    const value = useMemo(() => ({
        signed: data.signed,
        userData: data.userData,
        signOut,
        signIn
    }
    ),[data,signIn,signOut])

    return (
        <AuthContext.Provider value={value}>
               
            { children }

        </AuthContext.Provider>
    )
}
const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error('useAuth must be used within Auth Provider') 
    }
    return context
}

export default useAuth