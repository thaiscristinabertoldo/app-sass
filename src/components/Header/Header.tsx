import { FunctionComponent } from 'react'

import style from './Header.module.scss'

export const Header: FunctionComponent = () => {
  return (
    <nav className={style['c-nav']}>
      <img src="/images/logo.png" alt="logo" className={style['c-navbar__img']} />
      <h1 className={style['c-navbar__title']}>Livraria</h1>
    </nav>
  )
}
