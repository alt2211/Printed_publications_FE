import { Button, Form, Input, notification } from "antd"
import FormItem from "antd/es/form/FormItem"
import TextArea from "antd/es/input/TextArea"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "../Styles/settings/settings.module.scss"

const Settings = () => {
    const [page, setPage] = useState<string>('settings')

    return(
        <>
            <div className = {styled.box}>
                <div className ={styled.block}>
                    <button className={styled.delete_Button}>Удалить аккаунт</button>
                    <h1 className={styled.page_name}>Настройки</h1>
                    <div className={styled.vector}></div>
                    <div>
                        <h4 className={styled.inputBoxName}>Электронная почта</h4>
                        <input type="text" className={styled.inputBox} value ="dimat@gmail.com"></input>
                    </div>
                    <div>
                        <h4 className={styled.inputBoxName}>Пароль</h4>
                        <input type="text" className={styled.inputBox} value="Введите пароль"></input>
                        <img src="closedEye.svg" alt="Пароль скрыт" className={styled.closedEye}/>
                    </div>
                    <div>
                        <h4 className={styled.inputBoxName}>Подтвердите пароль</h4>
                        <input type="text" className={styled.inputBox} value="Введите пароль"></input>
                        <img src="closedEye.svg" alt="Пароль скрыт" className={styled.closedEye} style={{top: 365}}/>
                    </div>
                    <button class={styled.button_confirm}>Сохранить изменения</button>
                </div>
            </div>
        </>
    )
}

export default Settings