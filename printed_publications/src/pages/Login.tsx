import { Button, Form, Input, notification } from "antd"
import FormItem from "antd/es/form/FormItem"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../Styles/login.scss'

const Authorization: React.FC = () => {
    const [page, setPage] = useState<string>('login')

    return (
        <>
            <div className='frame'>
                <div className='div'>
                    <div className='div2'>
                        <div className='div3'>
                            <div className={page === 'login' ? 'divwrapper' : 'divwrapper2'} onClick={() => setPage('login')}>
                                <div className={page === 'login' ? 'textwrapper' : 'textwrapper2'}>Вход</div>
                            </div>
                            <div className={page === 'register' ? 'divwrapper' : 'divwrapper2'} onClick={() => setPage('register')}>
                                <div className={page === 'register' ? 'textwrapper' : 'textwrapper2'}>Регистрация</div>
                            </div>
                        </div>
                        <div className='div4'/>
                    </div>
                    {page === 'login' && <LoginPage/>}
                    {page === 'register' && <RegPage/>}
                    <div>
                        Нажимая «Продолжить», вы принимаете&nbsp;
                        <Link style={{ color: '#A609CB', textDecoration: 'none' }} to={'/'}>пользовательское соглашение</Link>&nbsp;и&nbsp;
                        <Link style={{ color: '#A609CB', textDecoration: 'none' }} to={'/'}>политику конфиденциальности</Link>.
                    </div>
                </div>
            </div>
        </>
    );
};

const LoginPage = () => {
    const navigate = useNavigate()

    const onFinish = ({ email, password }) => {
        if (email === 'test@gmail.com' && password === 'qwer1234'){
            navigate('/')
        }
        else {
            notification.error({
                message: 'Неправильный логин или пароль',
                key: 'incorrectLogin'
            })
        }
    }

    return (
        <Form layout='vertical' style={{ width: '100%' }} size='large' onFinish={onFinish}>
            <FormItem name='email' label='Электронная почта'>
                <Input
                    type='email'
                    size='large' style={{ width: '100%' }}
                    placeholder='youremail@gmail.com'
                />
            </FormItem>
            <FormItem name='password' label='Пароль'>
                <Input.Password
                    size='large' style={{ width: '100%' }}
                    placeholder='•••••••••'
                />
            </FormItem>
            <div style={{ color: '#550DB2', fontSize: 18, textAlign: 'left', width: '100%' }}>
                Забыли пароль?
            </div>
            <br/>
            <Button
                style={{
                    backgroundColor: '#550DB2',
                    color: 'white'
                }}
                size='large'
                block
                htmlType='submit'
            >
                Продолжить
            </Button>
        </Form>
    )
}

const RegPage = () => {
    const onFinish = ({ email, password, repeatPassword }) => {
        notification.error({
            message: 'Пользователь с такой почтой уже зарегистиррован',
            key: 'incorrectLogin'
        })
    }

    return (
        <Form layout='vertical' style={{ width: '100%' }} size='large'>
            <FormItem name='email' label='Электронная почта'>
                <Input
                    type='email'
                    size='large' style={{ width: '100%' }}
                    placeholder='youremail@gmail.com'
                />
            </FormItem>
            <FormItem name='password' label='Пароль'>
                <Input.Password
                    size='large' style={{ width: '100%' }}
                    placeholder='•••••••••'
                />
            </FormItem>
            <FormItem name='repeatPassword' label='Повторите пароль'>
                <Input.Password
                    size='large' style={{ width: '100%' }}
                    placeholder='•••••••••'
                />
            </FormItem>
            <Button
                style={{
                    backgroundColor: '#550DB2',
                    color: 'white'
                }}
                size='large'
                block
            >
                Продолжить
            </Button>
        </Form>
    )
}

export default Authorization;