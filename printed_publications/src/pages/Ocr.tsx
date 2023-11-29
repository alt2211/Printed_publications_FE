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
			console.log('мы в методе onDropHand')
			console.log(e)
			let files = [...e.dataTransfer.files]
			console.log(files)
			doOCR(files[0])
		}

		const handleChange = function (e) {
			e.preventDefault()
			if (e.target.files && e.target.files[0]) {
				doOCR(e.target.files[0])
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
					ref={fileInputRef}
					onChange={handleChange}
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
				<div className={style.elements}>
					<div className={style.containerOcr}>
						{DragDropFile()}
						<div className={style.containerElement}>
							{isLoading ? (
								<Skeleton loading />
							) : (
								ocrText && <p style={{ width: '592px' }}>{ocrText}</p>
							)}
						</div>
					</div>
					<div className={style.propertiesList}>
						<div className={style.inputFieldName}>ББК</div>
						<input className={style.inputField} name='BBK'></input>
						<div className={style.inputFieldName}>УДК</div>
						<input className={style.inputField} name='YDK'></input>
						<div className={style.inputFieldName}>Автор</div>
						<input className={style.inputField} name='author'></input>
						<div className={style.inputFieldName}>Название издания</div>
						<input className={style.inputField} name='publicationTitle'></input>
						<div className={style.inputFieldName}>Год публикации</div>
						<input className={style.inputField} name='publicationDate'></input>
						<div className={style.inputFieldName}>ISBN</div>
						<input className={style.inputField} name='ISBN'></input>
						<div className={style.inputFieldName}>Город издания</div>
						<input className={style.inputField} name='year'></input>
						<div className={style.inputFieldName}>Тип издания</div>
						<input className={style.inputField} name='type'></input>
						<div className={style.inputFieldName}>Описание</div>
						<input className={style.inputField} name='description'></input>
					</div>
				</div>
			</div>
			<div className={style.bottom}>
				<div className={style.bottomElement1}>
					<button className={style.arrowl} style={{ marginLeft: '807px ' }}>
						<img src='ArrowLeft.svg' alt='Левая стрелка' />
					</button>
					<div className={style.counter}>1 из 52</div>
					<button className={style.arrowl} style={{ marginRight: '426px' }}>
						<img src='ArrowRight.svg' alt='Правая стрелка' />
					</button>
				</div>
				<div className={style.bottomElement2}>
					<button className={style.addMore}>Добавить еще</button>
					<button className={style.save}>Сохранить</button>
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
