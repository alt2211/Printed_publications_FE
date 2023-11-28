import '../Styles/login.scss';
import FormItem from "antd/es/form/FormItem";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    return (
        <Form layout='vertical' style={{ width: '100%' }} size='large'>
            <FormItem label='Электронная почта'>
                <Input
                    type='email'
                    size='large' style={{ width: '100%' }}
                    placeholder='youremail@gmail.com'
                />
            </FormItem>
            <FormItem label='Пароль'>
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
            >
                Продолжить
            </Button>
        </Form>
    )
}

const RegPage = () => {
    return (
        <Form layout='vertical' style={{ width: '100%' }} size='large'>
            <FormItem label='Электронная почта'>
                <Input
                    type='email'
                    size='large' style={{ width: '100%' }}
                    placeholder='youremail@gmail.com'
                />
            </FormItem>
            <FormItem label='Пароль'>
                <Input.Password
                    size='large' style={{ width: '100%' }}
                    placeholder='•••••••••'
                />
            </FormItem>
            <FormItem label='Повторите пароль'>
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