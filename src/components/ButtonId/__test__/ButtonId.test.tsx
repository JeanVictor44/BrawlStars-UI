import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ButtonId } from '..'

describe('Button ID tests', () => {
    it('Paragraph must contain "Já jogou antes?" text', () => {
        render(<ButtonId/>)
        const paragraph = screen.getByText(/Já jogou antes?/i)
        expect(paragraph).toBeInTheDocument() 
    })
    it('Button Id must contain "Supercell Id?" text', () => {
        render(<ButtonId/>)
        const buttonId = screen.getByText(/Supercell Id/i) 
        expect(buttonId).toBeInTheDocument()
    })
})