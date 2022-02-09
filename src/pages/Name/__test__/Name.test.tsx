import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { 
    BrowserRouter as Router,
    
} from 'react-router-dom'
import { Name } from '..'
import { UserDataProvider } from '../../../contexts/userData'

describe("Name page tests", () => {
    it("should redirect the user to the /age url when he types the name and clicks the link", () => {
        render((
            <Router>
                <UserDataProvider>
                    <Name />
                </UserDataProvider>
            </Router>
        ))
        const inputName = screen.getByLabelText('name-input')
        userEvent.type(inputName, 'Jean')

        const redirectLink = screen.getByLabelText('confirm-link')
        userEvent.click(redirectLink)

        const currentLocation = window.location.pathname
        expect(currentLocation).toBe('/age') 
    })
    it('Should not redirect the user to the /age when he does not fill in the input name and click on the link', () => {
        render((
            <Router>
                <UserDataProvider>
                    <Name />
                </UserDataProvider>
            </Router>
        ))  
        const redirectLink = screen.getByLabelText('confirm-link')
        userEvent.click(redirectLink)

        const currentLocation = window.location.pathname
        expect(currentLocation).not.toBe('/age')
    })
})