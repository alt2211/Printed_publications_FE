import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import 'filepond/dist/filepond.min.css'
import React from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import { createWorker } from 'tesseract.js'
import './App.css'
import Global from './global.ts'
import Button from './ui-kit/button/button.ts'
import { Frame } from './ui-kit/filters/filters.js'
import SearchStyle, { Search } from './ui-kit/search/search'
import Layout from './ui/layout/layout.tsx'

registerPlugin(FilePondPluginImagePreview);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isProcessing : false,
      ocrText : '',
      pctg : '0.00'
    }
    this.pond = React.createRef();
    this.worker = React.createRef();
    this.updateProgressAndLog = this.updateProgressAndLog.bind(this);
  }

  async doOCR(file) {
    this.setState({
      isProcessing : true,
      ocrText : '',
      pctg : '0.00'
    })
    // Loading tesseract.js functions
    const worker = await createWorker('rus');
    // Loading language as 'English'
    await worker.loadLanguage('rus');
    await worker.initialize('rus');
    // Sending the File Object into the Recognize function to
    // parse the data
    const { data: { text } } = await worker.recognize(file.file);
    this.setState({
        isProcessing : false,
        ocrText : text
    })
  };
  updateProgressAndLog(m) {
    // Maximum value out of which percentage needs to be
    // calculated. In our case it's 0 for 0 % and 1 for Max 100%
    // DECIMAL_COUNT specifies no of floating decimal points in our
    // Percentage
    var MAX_PARCENTAGE = 1 ;
    var DECIMAL_COUNT = 2 ;
  
    if(m.status === "recognizing text") {
      var pctg = (m.progress / MAX_PARCENTAGE) * 100
      this.setState({
          pctg : pctg.toFixed(DECIMAL_COUNT)
      })
    }
  }
  componentDidMount() {
    // Logs the output object to Update Progress, which
    // checks for Tesseract JS status & Updates the progress
    
    // this.worker = createWorker({
    //     logger: m => this.updateProgressAndLog(m),
    // });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
        <Layout>



        {/* <Button 
          width='142px'
          height='52px'
          background='#550DB2'
          radius='10px'
          border='none'
          textColor='#FFF'
          backgroundHover='#3F0789'
          >Применить</Button>
        <Button
        width='142px'
        height='52px'
        background='#FEE'
        radius='10px'
        border='none'
        textColor='#F44B4B'>Сбросить</Button>
        <Button
        width='180px'
        height='36px'
        background='#EAF3DE'
        radius='6px'
        border='1px solid #B8D395'
        textColor='#6AB20D'
        backgroundHover='#E3EBD7'
        borderHover='1px solid #6AB20D'>Редактировать</Button>
        <Button
        width='125px'
        height='36px'
        background='#FEE'
        radius='6px'
        border='1px solid #F4C2C2'
        textColor='#F44B4B'
        backgroundHover='#FEE'
        borderHover='1px solid #F44B4B'>Удалить</Button>
        <Button
        width='127px'
        height='36px'
        background='#F0EDF5'
        radius='6px'
        border='1px solid #D8C5F0'
        textColor='#550DB2'
        backgroundHover='#F0EDF5'
        borderHover='1px solid #550DB2'>Экспорт</Button> */}



        {/* <Frame svg="CalendarCheck.svg" name="Дата начала" />
        <Search count="0"/>
        <SearchStyle>
        </SearchStyle> */}
          <div style={{marginTop : "10%"}} className="row">
            <div className="col-md-4"></div>
              <div className="col-md-4">
              <FilePond ref={ref => this.pond = ref}
                onaddfile={(err,file) =>{
                  this.doOCR(file);
                }}
                onremovefile={(err,file) =>{
                  this.setState({
                    ocrText : ''
                  })
                }}
              />
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="card">
            <h5 className="card-header">
              <div style={{margin : "1%", textAlign: "left"}} className="row">
                <div className="col-md-12">
                  <i className={"fas fa-sync fa-2x " + (this.state.isProcessing ? "fa-spin" : "")}></i> 
                  <span className="status-text">
                    {this.state.isProcessing ? `Processing Image ( ${this.state.pctg} % )` : "Parsed Text"}
                  </span>
                </div>
              </div>
            </h5>
            <div class="card-body">
              <p class="card-text">{(this.state.isProcessing) ?
                '...........'
                : this.state.ocrText.length === 0 ? "No Valid Text Found / Upload Image to Parse Text From Image" : this. state.ocrText }
              </p>
            </div>
          </div>
          <div className="ocr-text"></div>
        </Layout>
        </div>
        <Global />
      </div>
    );
  }
}

export default App;