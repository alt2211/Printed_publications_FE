import { Button, Col, DatePicker, Row, Select, Table, Tag, Typography } from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined,
} from '@ant-design/icons'

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
                <Typography.Title level={1}>Список печатный изданий</Typography.Title>
                <Row gutter={[10, 0]}>
                    <Col span={12}>
                        <DatePicker.RangePicker
                            size='large'
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col span={6}>
                        <Select
                            size='large'
                            style={{ width: '100%' }}
                            options={[
                                { label: 'Петрович 1', value: '1' },
                                { label: 'Петрович 2', value: '2' },
                                { label: 'Петрович 3', value: '3' },
                            ]}
                            placeholder='Выберите автора'
                        />
                    </Col>
                    <Col span={6}>
                        <Button
                            style={{
                                backgroundColor: '#550DB2',
                                color: 'white'
                            }}
                            size='large'
                            block
                        >
                            Применить
                        </Button>
                    </Col>
                </Row>
            </div>

            <div className='frame-without-color'>
                <Tag color='green' icon={<EditOutlined/>} style={{ fontSize: 16, padding: '8px 16px' }}>Редактировать</Tag>
                <Tag color='red' icon={<DeleteOutlined/>} style={{ fontSize: 16, padding: '8px 16px' }}>Редактировать</Tag>
                <Tag color='#F0EDF5' icon={<DownloadOutlined/>}
                     style={{ fontSize: 16, padding: '8px 16px', color: '#550DB2', borderColor: '#D8C5F0' }}>Редактировать</Tag>
            </div>

            <div className='frame-without-color'>
                <Table
                    columns={columns}
                />
            </div>
        </>
    )
}