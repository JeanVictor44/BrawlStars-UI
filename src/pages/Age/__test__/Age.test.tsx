import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { Age } from '..'
import { AuthProvider } from '../../../contexts/auth'
import { UserDataProvider } from '../../../contexts/userData'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Age page tests', () => {
    it('Title 1 must contain "Este é o Brawl Stars!" text', () => {
        render((
            <UserDataProvider>
                <AuthProvider>
                    <Router>
                        <Age />
                    </Router>
                </AuthProvider>
            </UserDataProvider>
        ))

        const heading1 = screen.getByText(/Este é o Brawl Stars!/i)
        expect(heading1).toBeInTheDocument()
    })

    it('Paragraph must contain "Qual é a sua idade?" text', () => {
        render((
            <UserDataProvider>
                <AuthProvider>
                    <Router>
                        <Age />
                    </Router>
                </AuthProvider>
            </UserDataProvider>
        ))
        const paragraph = screen.getByText(/Qual é a sua idade?/i)
        expect(paragraph).toBeInTheDocument()
    })

    it('The Bea icon must be in the document', () => {
        render((
            <UserDataProvider>
                <AuthProvider>
                    <Router>
                        <Age />
                    </Router>
                </AuthProvider>
            </UserDataProvider>
        ))

        const beaIcon = screen.getByRole('img', { name: /bea icon/i})
        expect(beaIcon).toBeInTheDocument()
    }) 
})