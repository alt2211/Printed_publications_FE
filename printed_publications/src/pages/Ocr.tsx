// @ts-ignore
import { Skeleton } from 'antd'
import React, { useRef, useState } from 'react'
import { createWorker } from 'tesseract.js'
import '../Styles/App.css'
import style from '../ui/ocr/ocr.module.scss'

export default () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [ocrText, setOcrText] = useState<string>('')

	const doOCR = async (file: any) => {
		setOcrText('')
		setIsLoading(true)

		const worker = await createWorker('rus')

		console.log(file)
		const { data } = await worker.recognize(file)
		setOcrText(data.text)
		setIsLoading(false)
	}

	const DragDropFile = () => {
		const [drag, setDrag] = React.useState(false)
		const fileInputRef = useRef<HTMLInputElement>(null)

		const dragStartHandler = e => {
			e.preventDefault()
			setDrag(true)
		}

		const dragLeaveHandler = e => {
			e.preventDefault()
			setDrag(false)
		}

		const onDropHandler = e => {
			e.preventDefault()
			let files = [...e.dataTransfer.files]
			console.log(files[0])
			doOCR(files[0])
		}

		const handleClick = () => {
			// 👇️ open file input box on click of another element
			if (fileInputRef.current != null) {
				fileInputRef.current.click()
			}
		}

		return drag ? (
			<div
				onDragStart={e => dragStartHandler(e)}
				onDragLeave={e => dragLeaveHandler(e)}
				onDragOver={e => dragStartHandler(e)}
				onDrop={e => onDropHandler(e)}
				className={style.dropImg}
			>
				Распознание текста
			</div>
		) : (
			<div
				onDragStart={e => dragStartHandler(e)}
				onDragLeave={e => dragLeaveHandler(e)}
				onDragOver={e => dragStartHandler(e)}
				className={style.inputImg}
				onChange={dragStartHandler}
			>
				Перетащите сюда файл или&nbsp;
				<label
					htmlFor='filePicker'
					style={{ color: '#550DB2', cursor: 'pointer' }}
				>
					загрузите
				</label>
				<input
					id='filePicker'
					style={{ visibility: 'hidden' }}
					type='file'
					onChange={onDropHandler}
				></input>
			</div>
		)
	}

	return (
		<>
			{/* <div className={style.container}>
				<h1 style={{ marginBottom: '52px' }}>Добавление печатных изданий</h1>
				<div className={style.containerOcr}>
					<div className={style.inputImg}>
						<Upload.Dragger
							height={661}
							style={{ width: '724px', border: '1px dashed #550DB2;' }}
							accept='image/png, image/jpeg'
							name='file'
							multiple={false}
							action={file => {
								doOCR(file)
								return ''
							}}
							customRequest={() => {}}
							fileList={[]}
						>
							<p className='ant-upload-text'>
								Перетащите сюда файлы или загрузите
							</p>
						</Upload.Dragger>
					</div>
					<div>
						{isLoading ? (
							<Skeleton loading />
						) : (
							ocrText && <Card>{ocrText}</Card>
						)}
					</div>
				</div>
			</div> */}

			<div className={style.container}>
				<h1 style={{ marginBottom: '52px' }}>Добавление печатных изданий</h1>
				<div className={style.containerOcr}>
					{DragDropFile()}
					<div>
						{isLoading ? (
							<Skeleton loading />
						) : (
							ocrText && <p style={{ width: '592px' }}>{ocrText}</p>
						)}
					</div>
				</div>
			</div>
			{/* <div className='container'>
				<h1>Добавление печатных изданий</h1>
				<Row gutter={[50, 50]}>
					<Col span={12}>
						<Upload.Dragger
							height={500}
							style={{ width: '100%' }}
							accept='image/png, image/jpeg'
							name='file'
							multiple={false}
							action={file => {
								doOCR(file)
								return ''
							}}
							customRequest={() => {}}
							fileList={[]}
						>
							<p className='ant-upload-drag-icon'>
								<InboxOutlined />
							</p>
							<p className='ant-upload-text'>
								Нажмите или перетащите файл для загрузки
							</p>
						</Upload.Dragger>
					</Col>
					<Col span={12}>
						{isLoading ? (
							<Skeleton loading />
						) : (
							ocrText && <Card>{ocrText}</Card>
						)}
					</Col>
				</Row>
			</div> */}
		</>
	)
}
