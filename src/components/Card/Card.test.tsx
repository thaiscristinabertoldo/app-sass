import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { Book } from '../../interfaces'
import { Card } from './Card'

const card: Book = {
  id: '1',
  price: 12.9,
  title: 'Test book',
  url: '/images/1.png'
}
const buildComponent = (props: Book = card) => render(<Card {...props} />)

describe('Card component', () => {
  it('should render correctly', () => {
    buildComponent()

    expect(screen.getByText(card.title)).toBeInTheDocument()
  })

  it('should render formatted price', () => {
    buildComponent()

    expect(
      screen.getByText(
        `R$ ${card.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      )
    ).toBeInTheDocument()
  })

  it('should render with invalid image', () => {
    buildComponent({ ...card, url: 'error' })
    act(() => {
      fireEvent.error(screen.getByAltText('capa'))
    })

    expect(screen.getByAltText('capa').getAttribute('src')).toBe('/images/notfound.png')
  })
})
