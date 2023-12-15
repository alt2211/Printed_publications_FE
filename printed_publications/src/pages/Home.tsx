import { Button, Select, Table, Tag} from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import style from '../ui/home/home.module.scss'
import '../ui/dropdownlist/dropdownlist.tsx'
import React, { useEffect, useState } from "react"
import DropdownList from "../ui/dropdownlist/dropdownlist.tsx";
import { Book } from '../../types/Book.ts'
import App from '../ui-kit/customTable/customTable.tsx'

export default () => {

    const columns = [
        { title: 'Имя автора', dataIndex: 'author' },
        { title: 'Название издания', dataIndex: 'title' },
        { title: 'Дата публикации', dataIndex: 'date' },
        { title: 'Город', dataIndex: 'city' },
        { title: 'Описание', dataIndex: 'description' },
        { title: 'Количество', dataIndex: 'quantity' },
        { title: 'ББК', dataIndex: 'lbc' },
        { title: 'УДК', dataIndex: 'udc' },
        { title: 'ISBN', dataIndex: 'ISBN' },
        { title: 'Тип издания', dataIndex: 'publication_type' },
        {
            title: 'Действия',
            key: 'actions',
            render: (text, record) => (
                <span>
                    <a onClick={() => handleEdit(record)}>Редактировать</a>
                </span>
            ),
        },
    ]

    const handleEdit = (record) => {
        // Реализуйте логику изменения полей
        console.log('Редактирование записи', record);
    };

    const [books, setBooks] = useState<Book[]>();

    // const books: Book[] = [
    //     {
    //       id: 1,
    //       id_user: 1,
    //       author: 'Автор 1',
    //       title: 'Книга 1',
    //       date: new Date('01.01.2022'),
    //       city: 'Город 1',
    //       description: 'Описание 1',
    //       quantity: 10,
    //       lbc: 'ББК 123',
    //       udc: 'УДК 456',
    //       ISBN: 'ISBN 789',
    //       publication_type: 'Тип 1',
    //     },
    //   ];

      const handleLoadBooks = async () => {
        const userString = localStorage.getItem('user');
        const user = userString ? JSON.parse(userString) : null;
        try {
          //Переделать через env
          const response = await fetch('http://localhost:5000/loadList', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: user.id,
            }),
          });
          setBooks(await response.json());
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };
      useEffect(() => {
        handleLoadBooks();
      }, []);
    return (
        <>
            <div className={style.frameWithoutColor}>
                <div className={style.bigName}>Список печатный изданий</div>
                <div className={style.filters}>
                    <div className={style.date}>
                        <input type="text" className={style.date1} placeholder='Дата начала'/>
                        <div className={style.imageWrapper2}>
                            <img src="CalendarCheck.svg" alt="MagnifyingGlass" />
                        </div>
                    </div> 
                    <div className={style.date}>
                        <input type="text"className={style.date1} placeholder='Дата конца' /> 
                        <div className={style.imageWrapper2}>
                            <img src="CalendarCheck.svg" alt="MagnifyingGlass" />
                        </div>
                    </div> 
                    <div className={style.dropDownList}>
                        <DropdownList/>
                    </div>
                    <Button style={{backgroundColor: '#550DB2', color: 'white', width: '142px'}} size='large' block>
                        Применить
                    </Button>
                </div>
            </div>

            <div className={style.frc}>
                <div className={style.listActions}>
                    <div className={style.Text1}>Действия со списком</div>
                    {/* <Tag color='#EAF3DE' icon={<EditOutlined/>} className={style.editButton}>Редактировать</Tag> */}
                    <Tag color='#FEE' icon={<DeleteOutlined/>} className={style.deleteButton}>Удалить всё</Tag>
                    <Tag color='#F0EDF5' icon={<DownloadOutlined/>} className={style.exportButton} >Экспорт</Tag>
                </div>
                <div className={style.search}>
                <input type="text"className={style.search1} /> {/* Ваше поле ввода */}
                    <div className={style.imageWrapper}>
                        <img src="MagnifyingGlass.svg" alt="MagnifyingGlass" />
                    </div>
                </div>
            </div>

            <div className='frame-without-color-2'>
                {/* <Table
                    columns={columns}
                    dataSource={books}
                    pagination={{ pageSize: 25}}
                    className="custom-table"
                />  */}
                <App/>
            </div>
        </>
    )
    
}