import { render, screen } from '@testing-library/react'

import { App } from './App'

const buildComponent = () => render(<App />)

describe('App component', () => {
  it('should render correctly', () => {
    buildComponent()

    expect(screen.getByText('Livraria')).toBeInTheDocument()
  })
})
