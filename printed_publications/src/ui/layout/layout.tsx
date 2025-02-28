import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui-kit/button/button.ts'
import style from './layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <div className={style.customContainer}>
                <Link to={'/'}><img src="Logo.svg" alt="Логотип"/></Link>
                
                <div className={style.buttons}>
                    <Link to={'/ocr'} style={{marginRight: '8px' }}>
                    <Button
                        width='116px'
                        height='43px'
                        background='#F0EDF5'
                        radius='10px'
                        border='0px'
                        textColor='#550DB2'
                        backgroundHover='#F0EDF5'
                        borderHover='1px solid #550DB2'
                        fontSize='16px'
                        fontStyle='normal'
                        fontWeight='400'
                        fontlineHeight='120%'>
                        Добавить
                    </Button></Link>
                    <Link to={'/settings'} style={{marginRight: '8px'}}>
                        <Button
                        width='126px'
                        height='43px'
                        background='#F0EDF5'
                        radius='10px'
                        border='0px'
                        textColor='#550DB2'
                        backgroundHover='#F0EDF5'
                        borderHover='1px solid #550DB2'
                        fontSize='16px'
                        fontStyle='normal'
                        fontWeight='400'
                        fontlineHeight='120%'>
                        Настройки
                        </Button>
                    </Link>
                    <Link to={'/help'} style={{marginRight: '8px'}}>
                    <Button
                        width='106px'
                        height='43px'
                        background='#F0EDF5'
                        radius='10px'
                        border='0px'
                        textColor='#550DB2'
                        backgroundHover='#F0EDF5'
                        borderHover='1px solid #550DB2'
                        fontSize='16px'
                        fontStyle='normal'
                        fontWeight='400'
                        fontlineHeight='120%'>
                        Помощь
                    </Button>
                    </Link>
                    <Link to={'/login'}>
                    <Button
                        width='90px'
                        height='43px'
                        background='#FFF'
                        radius='10px'
                        border='2px solid #F0EDF5'
                        textColor='#550DB2'
                        textColorHover='#FFF'
                        backgroundHover='linear-gradient(90deg, #4D0D9F 0%, #BC1AB5 100%)'
                        borderHover='0px'
                        fontSize='16px'
                        fontStyle='normal'
                        fontWeight='400'
                        fontlineHeight='120%'>
                        Выйти
                    </Button></Link>
                </div>
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout;