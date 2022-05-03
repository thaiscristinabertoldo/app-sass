import { FunctionComponent, useEffect, useState } from 'react'

import { Book } from '../../interfaces'
import { getBooks } from '../../services/books'
import { Card } from '../Card'
import style from './List.module.scss'

export const List: FunctionComponent = () => {
  const [books, setBooks] = useState<Array<Book>>([])

  useEffect(() => {
    setBooks(getBooks())
  }, [])

  return (
    <ul className={style['c-list']}>
      {books.map((book: Book) => (
        <Card key={book.id} {...book} />
      ))}
    </ul>
  )
}
