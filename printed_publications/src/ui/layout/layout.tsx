import React from 'react'
import { Link } from 'react-router-dom'
import style from './layout.module.scss'

const Layout = ({ children }) => {
	return (
		<>
			<div className={style.customContainer}>
				<div className={style.logo}>
					<Link to={'/'}>
						<img src='Logo.svg' alt='Логотип' />
					</Link>
				</div>
				<div className={style.buttons}>
					<Link to={'/ocr'}>
						<button className={style.buttonAdd}>Добавить</button>
					</Link>
					<Link to={'/settings'}>
						<button className={style.buttonSettings}>Настройки</button>
					</Link>
					<Link to={'/help'}>
						<button className={style.buttonHelp}>Помощь</button>
					</Link>
					<Link to={'/login'}>
						<button className={style.buttonExit}>Выйти</button>
					</Link>
				</div>
			</div>
			<main>{children}</main>
		</>
	)
}

export default Layout
