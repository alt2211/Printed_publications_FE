import React from 'react'
import Button from '../../ui-kit/button/button'
import style from './layout.module.scss'

const Layout =({children}) =>{
    return(
        <>
            <div className={style.container}>
                <img src="Logo.svg" alt="Логотип" />
                <Button></Button>
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout;