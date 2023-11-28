import { BrowserRouter, Routes } from 'react-router-dom';
import useRouter from "./components/useRouter.tsx";
import { ConfigProvider } from "antd";
import './Styles/App.css'

export default () => {
    const router = useRouter()

    return (
        <ConfigProvider
            theme={{
                components: {
                    Form: {
                        labelFontSize: 16,
                    },
                    Input: {
                        controlHeightLG: 52,
                    },
                    Button: {
                        controlHeightLG: 52
                    }
                }
            }}
        >
            <BrowserRouter>
                <Routes>
                    {router}
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    )
}