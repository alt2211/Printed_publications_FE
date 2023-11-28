import React, { ReactNode } from "react";
import Layout from "../ui/layout/layout.tsx";
import { Navigate, Route } from "react-router-dom";
import Ocr from "../pages/Ocr.tsx";
import Login from "../pages/Login.tsx";


interface Page {
    element: ReactNode,
    path: string
}

export default () => {
    const pages: Page[] = [
        { element: <Ocr/>, path: '/ocr' },
        { element: <Login/>, path: '/login' },
        { element: <Navigate to='/ocr'/>, path: '*' },
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