import { Button, Col, DatePicker, Row, Select, Table, Tag, Typography } from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import style from '../ui/home/home.module.scss'

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
            <div className='frame-without-color'>
                <Typography.Title level={1} style={{marginTop: '0px'}}>Список печатный изданий</Typography.Title>
                <Row gutter={[10, 0]}>
                    <Col span={12}>
                        <DatePicker.RangePicker
                            size='large'
                            style={{ width: '100%', boxShadow: 'none'}}
                        />
                    </Col>
                    <Col span={6}>
                        <Select
                            size='large'
                            style={{ width: '100%'}}
                            options={[
                                { label: 'Пушкин 1', value: '1' },
                                { label: 'Пушкин 2', value: '2' },
                                { label: 'Пушкин 3', value: '3' },
                            ]}
                            placeholder='Выберите автора'
                        />
                    </Col>
                    <Col span={6}> 
                        <Button
                            style={{
                                backgroundColor: '#550DB2',
                                color: 'white',
                            }}
                            size='large'
                            block
                        >
                            Применить
                        </Button>
                    </Col>
                </Row>
            </div>

            <div className={style.frc}>
                {/* Старые стили у кнопок */}
                {/* <Tag color='#EAF3DE' icon={<EditOutlined/>} 
                     style={{ fontSize: 16, padding: '8px 16px' , color: '#6AB20D', borderColor: '#B8D395'}}>Редактировать</Tag>
                <Tag color='#FEE' icon={<DeleteOutlined/>} 
                     style={{ fontSize: 16, padding: '8px 16px' , color: '#F44B4B', borderColor: '#F4C2C2'}}>Удалить</Tag>
                <Tag color='#F0EDF5' icon={<DownloadOutlined/>}
                     style={{ fontSize: 16, padding: '8px 16px', color: '#550DB2', borderColor: '#D8C5F0' }}>Экспорт</Tag> */}
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