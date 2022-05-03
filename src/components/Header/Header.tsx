import { FunctionComponent } from 'react'

import style from './Header.module.scss'

export const Header: FunctionComponent = () => {
  return (
    <header className={style['c-header']}>
      <img src="/images/logo.png" alt="logo" className={style['c-header__img']} />
      <h1 className={style['c-header__title']}>Livraria</h1>
    </header>
  )
}
