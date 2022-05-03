import { FunctionComponent, useState } from 'react'

import { Book } from '../../interfaces'
import style from './Card.module.scss'

export const Card: FunctionComponent<Book> = ({ title, price, url }: Book) => {
  const [srcImage, setSrcImage] = useState(url)

  const handleError = () => {
    setSrcImage('/images/notfound.png')
  }

  return (
    <li className={style['c-card']}>
      <img className={style['c-card__image']} src={srcImage} alt="capa" onError={handleError} />
      <h2 className={style['c-card__title']}>{title}</h2>

      <p className={style['c-card__price']}>
        {`R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
      </p>

      <button type="button" className={style['c-card__button']}>
        Detalhes
      </button>
    </li>
  )
}
