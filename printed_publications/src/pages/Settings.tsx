import { Button, Form, Input, notification } from "antd"
import FormItem from "antd/es/form/FormItem"
import TextArea from "antd/es/input/TextArea"
import React from "react"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "../Styles/settings/settings.module.scss"
import { MainContext } from '../MainContext.ts'
import {IUser} from '../../types/User.ts'

const Settings = () => {
  const [page, setPage] = useState<string>('settings');
  const {setUser} = useContext(MainContext);
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const [username, setUsername] = useState(user.username);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  }

  const logout = () => {
    const u = {} as IUser
    localStorage.setItem('user', JSON.stringify(u))
    setUser(u)
  }

  const updateUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPassword1 = formData.get('pass1');
    const newPassword2 = formData.get('pass2');

    if (username !== user.username) {
      handleEmailChange();
    }
    if (newPassword1 !== '' && newPassword2 !== '' && newPassword1 === newPassword2) {
      handlePasswordChange(newPassword1);
    }
    logout();
  }

  const deleteUser = (e) => {
    handleDeleteAccount();
  }
  const handleEmailChange = async () => {
    try {
      //Переделать через env
      const response = await fetch('http://localhost:5000/changeEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          newEmail: username,
        }),
      });

    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handlePasswordChange = async (newPassword) => {
    try {
      //Переделать через env
      const response = await fetch('http://localhost:5000/cp/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          newPassword: newPassword,
        }),
      });

    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      //Переделать через env
      const response = await fetch('http://localhost:5000/deleteAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
        }),
      });
      logout();
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <>
      <div className={styled.box}>
        <form className={styled.block}
          onSubmit={updateUser}>
          <button className={styled.delete_Button} onClick={deleteUser}>Удалить аккаунт</button>
          <h1 className={styled.page_name}>Настройки</h1>
          <div className={styled.vector}></div>
          <div>
            <h4 className={styled.inputBoxName}>Электронная почта</h4>
            <input name='email' type="text" className={styled.inputBox}
              value={username}
              onChange={handleInputChange}
              placeholder='Введите почту'></input>
          </div>
          <div>
            <h4 className={styled.inputBoxName}>Пароль</h4>
            <input name='pass1' type="text" className={styled.inputBox} placeholder='Введите пароль'></input>
            <img src="closedEye.svg" alt="Пароль скрыт" className={styled.closedEye} />
          </div>
          <div>
            <h4 className={styled.inputBoxName}>Подтвердите пароль</h4>
            <input name='pass2' type="text" className={styled.inputBox} placeholder='Повторите пароль'></input>
            <img src="closedEye.svg" alt="Пароль скрыт" className={styled.closedEye} style={{ top: 365 }} />
          </div>
          <button class={styled.button_confirm}>Сохранить изменения</button>
        </form>
      </div>
    </>
  )
}

export default Settings