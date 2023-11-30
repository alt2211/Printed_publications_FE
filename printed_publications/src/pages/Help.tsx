import React, { ReactNode } from "react"
import style from '../ui/help/help.module.scss'

const Help = () => {
    return (
        <>
            <div className={style.frame}>
                <div className={style.text1}>
                    Text
                </div>
                <div className={style.text2}>
                    text2
                </div>
            </div>
        </>
    )
}

export default Help;