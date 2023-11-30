import { Button, Select, Table, Tag} from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import style from '../ui/home/home.module.scss'
import '../ui/dropdownlist/dropdownlist.tsx'
import React, { useState } from "react"
import DropdownList from "../ui/dropdownlist/dropdownlist.tsx";

export default () => {

    const columns = [
        { title: 'Имя автора', dataIndex: 'authorName' },
        { title: 'Название издания', dataIndex: 'name' },
        { title: 'Дата публикации', dataIndex: 'date' },
        { title: 'Город', dataIndex: 'city' },
        { title: 'Описание', dataIndex: 'description' },
        { title: 'Количество', dataIndex: 'count' },
        { title: 'ББК', dataIndex: 'bbk' },
        { title: 'УДК', dataIndex: 'udk' },
        { title: 'ISBN', dataIndex: 'isbn' },
        { title: 'Тип издания', dataIndex: 'type' },
    ]



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
                    <Tag color='#EAF3DE' icon={<EditOutlined/>} className={style.editButton}>Редактировать</Tag>
                    <Tag color='#FEE' icon={<DeleteOutlined/>} className={style.deleteButton}>Удалить</Tag>
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
                <Table
                    columns={columns}
                    className="custom-table"
                />  
            </div>
        </>
    )
    
}