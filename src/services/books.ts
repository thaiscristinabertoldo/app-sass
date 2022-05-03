import { Book } from '../interfaces'

const books: Array<Book> = [
  { id: '1', title: 'Memórias do Rock', price: 60.0, url: '/images/1.jpg' },
  { id: '2', title: 'Code to Zero', price: 67.58, url: '/images/2.jpg' },
  { id: '3', title: 'O criptógrafo', price: 99.9, url: '/images/3.jpg' },
  { id: '4', title: 'Quando deixamos de entender o mundo', price: 59.9, url: '/images/4.jpg' },
  { id: '5', title: 'Antes que o café esfrie', price: 59.9, url: '/images/5.jpg' }
]

export const getBooks = (): Array<Book> => {
  return books
}
