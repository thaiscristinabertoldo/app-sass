import { render, screen } from '@testing-library/react'

import { Header } from './Header'

const buildComponent = () => render(<Header />)

describe('Header component', () => {
  it('should render correctly', () => {
    buildComponent()

    expect(screen.getByText('Livraria')).toBeInTheDocument()
  })
})
