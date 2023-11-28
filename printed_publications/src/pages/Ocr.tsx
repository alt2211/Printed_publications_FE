// @ts-ignore
import { useState } from 'react'
import { createWorker } from 'tesseract.js'
import '../Styles/App.css'
import { Card, Col, Row, Skeleton, Upload } from 'antd'
import {
    InboxOutlined
} from '@ant-design/icons'

export default () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [ocrText, setOcrText] = useState<string>('')

    const doOCR = async (file: any) => {
        setOcrText('')
        setIsLoading(true)

        const worker = await createWorker('rus');

        console.log(file)
        const { data } = await worker.recognize(file);
        setOcrText(data.text)
        setIsLoading(false)
    };

    return (
        <div className="container">
            <Row gutter={[50, 50]}>
                <Col span={12}>
                    <Upload.Dragger
                        height={500}
                        style={{width: '100%'}}
                        accept='image/png, image/jpeg'
                        name='file'
                        multiple={false}
                        action={(file) => {
                            doOCR(file)
                            return ''
                        }}
                        customRequest={() => {
                        }}
                        fileList={[]}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">Нажмите или перетащите файл для загрузки</p>
                    </Upload.Dragger>
                </Col>
                <Col span={12}>
                    {isLoading ?
                        <Skeleton loading/>
                        :
                        ocrText && <Card>{ocrText}</Card>
                    }
                </Col>
            </Row>
        </div>
    )
}