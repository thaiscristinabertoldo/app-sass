import { render, screen } from '@testing-library/react'

import { List } from './List'

const buildComponent = () => render(<List />)

describe('List component', () => {
  it('should render correctly', () => {
    buildComponent()

    expect(screen.getByRole('list').childElementCount).toEqual(5)
  })
})
