import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react'
import { ProgressBar } from '..'

describe('Test Progress Bar Component', () => {
    it('Should be able to show the Trophy Image when the trophy value was passed in the progressType prop', () => {
        render(<ProgressBar progressColor='orange' width='10px' height="10px" progressType='trophy'/>)
        const trophyImage = screen.getByRole('img',{ name: 'Trophy icon'})
        screen.logTestingPlaygroundURL()
        expect(trophyImage).toBeInTheDocument()
    })
    it('Should not render trophy image when pass value is passed in progressType property', () => {
        render(<ProgressBar progressColor='orange' width='10px' height="10px" progressType='pass'/>)
        const trophyImage = screen.queryByRole('img',{ name: 'Trophy icon'}) // case use getByRole the test break in this line beacau not found the img element
        expect(trophyImage).toBeNull() 
    })
}) 