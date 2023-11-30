import { BrowserRouter, Routes } from 'react-router-dom';
import useRouter from "./components/useRouter.tsx";
import { ConfigProvider } from "antd";
import React from 'react';
import './Styles/App.css'

export default () => {
    const router = useRouter()

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBorder: '#E6EAF8',
                    colorBgContainer: '#FFF',
                    borderRadius: 10,
                    colorPrimaryHover: '#D8C5F0',
                    colorPrimary: "#550DB2",
                    colorPrimaryBorder: "#FFF",
                    colorBorderSecondary: "#FFF",

                  },
                components: {
                    Form: {
                        labelFontSize: 16,
                    },
                    Input: {
                        controlHeightLG: 52,
                    },
                    Button: {
                        controlHeightLG: 52
                    },
                    DatePicker: {
                        controlHeightLG: 52
                    },
                    Select: {
                        controlHeightLG: 52,
                        boxShadow: 'none'
                    },
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

