import React, { ReactNode } from "react";
import Layout from "../ui/layout/layout.tsx";
import { Navigate, Route } from "react-router-dom";
import Ocr from "../pages/Ocr.tsx";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";
import Settings from "../pages/Settings.tsx";
import Help from "../pages/Help.tsx";

interface Page {
    element: ReactNode,
    path: string
}

export default () => {
    const pages: Page[] = [
        { element: <Ocr/>, path: '/ocr' },
        { element: <Login/>, path: '/login' },
        { element: <Home/>, path: '/' },
        { element: <Navigate to='/login'/>, path: '*' },
        { element: <Settings/>, path: '/settings'},
        { element: <Help/>, path: '/help'}
    ]

    return (
        <>
            {pages.map(page =>
                <Route
                    key={page.path}
                    {...page}
                    element={
                        <div className="App">
                            <div className="custom-container">
                                <Layout>
                                    {page.element}
                                </Layout>
                            </div>
                        </div>
                    }
                />
            )}
        </>
    )
}