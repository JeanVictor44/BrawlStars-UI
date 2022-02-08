import {
    createContext, PropsWithChildren, useCallback, useContext, useMemo, useState
}from 'react'
import { UserData } from '../common/types'

interface UserDataContext {
    userData:UserData
    setUserNameData(userName:string): void,
    setUserAgeData(userAge:number):void
}

export const UserDataContext = createContext<UserDataContext | null>(null)

export const UserDataProvider = ({children}: PropsWithChildren<unknown>) => {
    const [ userName, setUserName ] = useState('')
    const [ userAge, setUserAge ] = useState(0)
    
    /* Ficar atento ... */
    const setUserNameData = useCallback((userName:string) => {
        setUserName(userName)
    },[])
    
    const setUserAgeData = useCallback((userAge:number) => {
        setUserAge(userAge)
    },[])
    
    const value = useMemo(() => ({
        userData: {userName, userAge},
        setUserNameData,
        setUserAgeData
    
    }), [userName,userAge, setUserNameData, setUserAgeData])
        
    
    return( 
        <UserDataContext.Provider value={value}>
            {
                children
            }
        </UserDataContext.Provider>
    )
}

const useUserData = () => {
    const context = useContext(UserDataContext)
    if(!context) {
        throw new Error('useUserData must be used within User Data Provider') 
    }
    return context
}
export default useUserData