import { Button, Form, Input, notification } from "antd"
import FormItem from "antd/es/form/FormItem"
import TextArea from "antd/es/input/TextArea"
import React from "react"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "../ui/settings/settings.module.scss"
import { MainContext } from '../MainContext.ts'
import { IUser } from '../../types/User.ts'
import ConfirmationModal from "../ui-kit/confirmation/confirmation.tsx"

const Settings = () => {
  const [page, setPage] = useState<string>('settings');
  const { setUser } = useContext(MainContext);
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const [email, setEmail] = useState(user.email);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
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

    if (email !== user.email) {
      handleEmailChange();
    }
    if (newPassword1 !== '' && newPassword2 !== '' && newPassword1 === newPassword2) {
      handlePasswordChange(newPassword1);
    }
    logout();
  }
  const handleEmailChange = async () => {
    const token = localStorage.getItem('token');   
    try {
      //Переделать через env
      const response = await fetch('http://localhost:5000/changeEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({
          userId: user.id,
          newEmail: email,
        }),
      });
      const userData = await response.json();
          if (userData.error) logout();
    } catch (error) {
      console.error('Ошибка:', error);
      logout();
    }
  };

  const handlePasswordChange = async (newPassword) => {
    const token = localStorage.getItem('token');   
    try {
      //Переделать через env
      const response = await fetch('http://localhost:5000/cp/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({
          userId: user.id,
          newPassword: newPassword,
        }),
      });
      const userData = await response.json();
          if (userData.error) logout();
    } catch (error) {
      console.error('Ошибка:', error);
      logout();
    }
  };
  const handleDeleteAccount = async () => {
    const token = localStorage.getItem('token');  
    try {
      //Переделать через env
      const response = await fetch('http://localhost:5000/deleteAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({
          userId: user.id,
        }),
      });
      const userData = await response.json();
          if (!userData.error) logout();
          else{
            notification.error({
              message: 'Пользователь',
              description: userData.error,
              duration: 1,
            });
            logout();
          }
    } catch (error) {
      console.error('Ошибка:', error);
      logout();
    }
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const handleConfirm = () => {
    // Ваш код для подтверждения действия
    console.log('Действие подтверждено');
    setModalVisible(false);
    handleDeleteAccount();
  };

  const handleCancel = () => {
    // Ваш код для отмены действия
    console.log('Действие отменено');
    setModalVisible(false);
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={styled.box}>
        <div className={styled.block}
          onSubmit={updateUser}>
          <button className={styled.delete_Button} onClick={() => setModalVisible(true)}>Удалить аккаунт</button>
          <ConfirmationModal
            visible={isModalVisible}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
          <form>
          <h1 className={styled.page_name}>Настройки</h1>
          <div className={styled.vector}></div>
          <div>
            <h4 className={styled.inputBoxName}>Электронная почта</h4>
            <input name='email' type="text" className={styled.inputBox}
              value={email}
              onChange={handleInputChange}
              placeholder='Введите почту'></input>
          </div>
          <div>
            <h4 className={styled.inputBoxName}>Пароль</h4>
            <input name='pass1' className={styled.inputBox} placeholder='Введите пароль' 
            type={passwordVisible ? 'text' : 'password'}></input>
            <img src={!passwordVisible ? "closedEye.svg" : "Eye.svg"} alt="Пароль скрыт" 
            className={!passwordVisible ? styled.closedEye: styled.Eye} onClick={togglePasswordVisibility} />
          </div>
          <div>
            <h4 className={styled.inputBoxName}>Подтвердите пароль</h4>
            <input name='pass2' type={passwordVisible ? 'text' : 'password'} className={styled.inputBox} placeholder='Повторите пароль'></input>
          </div>
          <button class={styled.button_confirm}>Сохранить изменения</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Settings